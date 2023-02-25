import React from 'react';
import './index.css'


const skills=[
    { name: "HTML & CSS", completion: "80%" },
    { name: "Python", completion: "70%" },
    { name: "Javascript", completion: "70%" },
    { name: "Node & Express", completion: "70%" },
    { name: "SQL", completion: "80%" },
    { name: "Javascript", completion: "80%" },


]

const Skills = () => {
    
    return (
        <section id="skills" className='skills'>
        <div className="">
          <div className="">
            
            <h1 className="">
              Skills &amp; Technologies
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
              ipsa delectus eum quo voluptas aspernatur accusantium distinctio
              possimus est.
            </p>
          </div>
          {skills.map((skill) => 
                        (
                            <div className="skill-container">
                                <div className="">
                                    <h1 className="skill-name">
                                        {skill.name}
                                    </h1>
                                        <p className="skill-completion">
                                            {skill.completion}
                                        </p>
                                </div>
                            </div>
                            
                        ))}
        
        </div>
      </section>
    );
};

export default Skills;