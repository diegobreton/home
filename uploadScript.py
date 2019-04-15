import boto3
from io import BytesIO
import zipfile
import mimetypes

def lambda_handler(event, context):


    s3 = boto3.resource('s3')
    filesBucket = s3.Bucket('files.diegobreton.com')
    buildBucket = s3.Bucket('filesbuild.diegobreton.com')

    zipFile = BytesIO()
    buildBucket.download_fileobj('buildFiles.zip', zipFile)

    with zipfile.ZipFile(zipFile) as myZip:
        for nm in myZip.namelist():
            obj = myZip.open(nm)
            filesBucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
            filesBucket.Object(nm).Acl().put(ACL='public-read')

    return 'Executed upload script'
