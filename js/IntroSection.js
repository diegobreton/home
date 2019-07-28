import React from 'react';
//import ReactDOM from 'react-dom';

class IntroSection extends React.Component {
  render(){
    return (
      //Header
      <div className='intro-section-container'>
        <div className='intro-section__textgrid'>
          <h2 className= 'intro-header'>I am Diego Bretón</h2>
          <p className='intro-body'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          <br/><br/>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
          <SocialButtonsContainer />
          <IntroInfoButtonsContainer />
        </div>

        <img className='intro-image' src="images/diego.png"/>
      </div>
    )
  }
}

class SocialButtonsContainer extends React.Component{
  render(){
    return(
      <ul className='social-btn-cont' >
        <li><a href="https://www.linkedin.com/in/diegobretonp/" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a></li>
        <li><a href="https://twitter.com/bretondiego_" target="_blank"><i class="fab fa-twitter-square fa-3x"></i></a></li>
        <li><a href="https://github.com/diegobreton/" target="_blank"><i class="fab fa-github-square  fa-3x"></i></a></li>
      </ul>
    )
  }
}

class IntroInfoButtonsContainer extends React.Component {
  render(){
    return(
      <ul className='info-btn-cont' >
        <li><button className='ninja-button' type='button'>Contact me</button></li>
        <li><button className='ninja-button' type='button'>Download C.V.</button></li>
      </ul>
    )
  }
}

export default IntroSection;
