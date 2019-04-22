import React from 'react';

import IntroSection from './IntroSection'
import SkillsSection from './SkillsSection'

//import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    return (
      <div>
        <div>Hola mundo</div>

        <IntroSection />
        
        <SkillsSection />
      </div>
    )
  }
}

export default App;
