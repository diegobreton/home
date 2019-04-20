import React from 'react';

class ExampleWork extends React.Component{
  render(){
    return (
      <section className="section section--alignCentered section--description">
      { this.props.work.map( (example, i) => {
          return (
             <ExampleWorkBubble data={example} key={i} />
           )
          }
        )
      }
      </section>
    )
  }
}

class ExampleWorkBubble extends React.Component{
  render(){

    const data = this.props.data;

    return(
      <div className="section__exampleWrapper">
        <div className="section__example">
          <img alt={data.image.desc}
               className="section__exampleImage"
               src={data.image.src}/>
          <dl className="color--cloud">
            <dt className="section__exampleTitle section__text--centered">
              {data.title}
            </dt>
            <dd></dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default ExampleWork;
