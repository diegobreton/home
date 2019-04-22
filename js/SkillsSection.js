import React from 'react';

class SkillsSection extends React.Component {
  render(){
    const skills = [
      {
        src: "images/example2.png",
        title: "Android Development",
        desc: "Over 3 years of enterprise-level native Android application development in Java and Kotlin."
      },
      {
        src: "images/example2.png",
        title: "iOS Development",
        desc: "I have developed several applications for the iOS and MacOS platforms."
      },
      {
        src: "images/example2.png",
        title: "Project Management",
        desc: "I handle teams of software developers in efficient ways."
      },
      {
        src: "images/example2.png",
        title: "Web Development",
        desc: "The most up-to-date knowledge of web development tools."
      }
    ];

    return (
      <ul className="skills-section">
        { skills.map( (skill, idx) => {
          return (
            <Skill data={skill} key={idx}/>
              )
            }
          )
      }
      </ul>
    )
  }
}

class Skill extends React.Component {
  render(){
    const skill = this.props.data;

    return(
      <li>
        <div class='skill'>
          <div class='skill__img' ><img src={skill.src}/></div>
          <div class='skill__title'>{skill.title}</div>
          <div class='skill__desc'>{skill.desc}</div>
        </div>
      </li>
    )
  }
}

export default SkillsSection;
