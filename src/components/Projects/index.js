import React from 'react';
import "./index.css"

const projects = [
{
    title: "Food Munch",
    subtitle: "Html and CSS",
    description:
      "Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers",
    // image: "https://res.cloudinary.com/dqvaejele/image/upload/v1667125031/pexels-min-an-1482803_j1hfjf.jpg",
    link: "http://newrestaurant.ccbp.tech/",
  },
  {
    title: "Wikipedia Application",
    subtitle: "Javascript And HTML",
    description:
      "Developed custom wikipedia search application where user can search and view curated results and can see detailed explanation in wikipedia by clicking on the specific result",
    image: "",
    link: "http://wikipedia1411.ccbp.tech/login",
  },
  {
    title: "Todo App",
    subtitle: "React and CSS",
    description:
      "Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based on Salary range and Employment type, etc",
    image: "",
    link: "",
  },
  {
    title: "Tasty Kitchen App",
    subtitle: "React and CSS",
    description:
      "Implemented a responsive Online Food Ordering System like Swiggy/Zomato where users can see popular restaurants with sort by rating, specific restaurant details, adding or removing food items to cart, and payments section.",
    image: "",
    link: "https://tastykitchen141.ccbp.tech/",
  },
  
];

const Projects = () => {
    return (
            <section id="projects" className="projects-container">
                <div className="apps-information"> 
                        <p className="description">
                            Developed some Responsive Websites using HTML,CSS,JavaScript and React
                        </p>

                    <div className="projectslist">
                                {projects.map((project) => (
                                    <a href={project.link}
                                    key={project.image}
                                    className="">
                                    <div className="projects-img">
                                            {/* <img
                                            alt="gallery"
                                            className=""
                                            src={project.image}
                                            /> */}
                                            <div className="projects-info">
                                                    <h1 className="project-title">
                                                        {project.title}
                                                    </h1>
                                                    <h2 className="projects-name">
                                                        {project.subtitle}
                                                    </h2>
                                                    <p className="projects-description">
                                                        {project.description}
                                                    </p>
                                            </div>
                                    </div>
                                    </a>
                                ))}
                    </div>
                </div>
            </section>
            
        
    );
};

export default Projects;