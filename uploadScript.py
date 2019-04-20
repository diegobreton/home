import boto3
from io import BytesIO
import zipfile
import mimetypes
    
def lambda_handler(event, context):
    
    print("Begin lambda execution")
    location = {
        "bucketName": 'filesbuild.diegobreton.com',
        "objectKey": 'buildFiles.zip'
    }

    job = event.get("CodePipeline.job")
    if job:
        for artifact in job["data"]["inputArtifacts"]:
            if artifact["name"] == "MyAppBuild":
                location = artifact["location"]["s3location"]
                
    print("Building from" + str(location))
    s3 = boto3.resource('s3')
    filesBucket = s3.Bucket('files.diegobreton.com')
    buildBucket = s3.Bucket(location["bucketName"])
    
    zipFile = BytesIO()
    buildBucket.download_fileobj(location["objectKey"], zipFile)
    
    with zipfile.ZipFile(zipFile) as myZip:
        for nm in myZip.namelist():
            obj = myZip.open(nm)
            filesBucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
            filesBucket.Object(nm).Acl().put(ACL='public-read')
            
    if job:
        codepipepline = boto3.client('codepipeline')
        codepipepline.put_job_success_result(jobId = job["id"])
    
    return 'Executed upload script'