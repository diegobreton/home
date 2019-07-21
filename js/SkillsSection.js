import React from 'react';

class SkillsSection extends React.Component {
  render(){
    const skills = [
      {
        icon: "fab fa-android fa-3x",
        title: "Android Development",
        desc: "Over 3 years of enterprise-level native Android application development in Java and Kotlin."
      },
      {
        icon: "fab fa-apple fa-3x",
        title: "iOS Development",
        desc: "I have developed several applications for the iOS and MacOS platforms."
      },
      {
        icon: "fas fa-tasks fa-3x",
        title: "Project Management",
        desc: "I handle teams of software developers organize efficiently."
      },
      {
        icon: "fas fa-globe fa-3x",
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
          <div class='skill__img' ><i class={skill.icon}/></div>
          <div class='skill__title'>{skill.title}</div>
          <div class='skill__desc'>{skill.desc}</div>
        </div>
      </li>
    )
  }
}

export default SkillsSection;
