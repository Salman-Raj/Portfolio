import React from 'react';
import {Chrono} from 'react-chrono';
import './index.css'


const data = [
    {
    title: "2022-2023",
    cardTitle: "Fullstack Developer Trainee",
    cardSubtitle: "Nxt Wave CCBP 4.0 Intensive",
    cardDetailedText: "Learning Fullstack web development Trainee with IRC certification Course",
    },
  {
    title: "2019-2022",
    cardTitle: "Audit Associate",
    cardSubtitle: "Flipkart Wholesale(Walmart India Pvt Ltd)- Gajuwaka",
    cardDetailedText: "Worked As Inventory Management Associate where we work on SAP",
    },
  {
    title: "2016-2019",
    cardTitle: "B.com(commerce,computers)",
    cardSubtitle: "Andhra University - Visakhapatnam",
    cardDetailedText: "Completed Graduation with 54% in Andhra University in Open school",
  },
  {
    title: "2012-2014",
    cardTitle: "Intermediate In MPC",
    cardSubtitle: "Sri Chaitanya Jr College - Anakapalle",
    cardDetailedText: "Scored 904 out of 1000 Marks",
  },
  {
    title: "2012",
    cardTitle: "SSC",
    cardSubtitle: "AMG REM High School- Bheemili",
    cardDetailedText: "Scored 9.5 out of 10 and ranked second Position in School",
  },
];



const Qualifications = () => {
    return (
        <section id="qualifications">
              <div style={{width:"100%", height:"95vh",color:"#CC313D"}} className="chrono-container">
                <h3 className='text-center'>Experience And Qualifications</h3>
                <Chrono items={data} mode="VERTICAL" ></Chrono>
              </div>
           
        </section>
    );
};

export default Qualifications;