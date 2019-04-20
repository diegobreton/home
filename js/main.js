import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

const workExamples = [
  {
    title:"Work example",
    image: {
      desc:"example screenshot of a project involving chemistry",
      src:"images/example2.png",
      comment:""
    }
  },
  {
    title:"Work example",
    image: {
      desc:"example screenshot of a project involving chemistry",
      src:"images/example2.png",
      comment:""
    }
  },
  {
    title:"Work example",
    image: {
      desc:"example screenshot of a project involving chemistry",
      src:"images/example2.png",
      comment:""
    }
  }
]

ReactDOM.render(<ExampleWork work={workExamples} />, document.getElementById('example-work'));
