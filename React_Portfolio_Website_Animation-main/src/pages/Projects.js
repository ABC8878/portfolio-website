import React from "react";
import { Card ,Button} from "react-bootstrap";
import { motion } from "framer-motion";
import project1 from "../images/news.jpg";
import project2 from "../images/contact.jpg";
import project3 from "../images/weather.jpg";
import project4 from "../images/pdf2.jpg";
import project5 from "../images/portfolio.jpg";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "News App",
      imageUrl: project1,
      link:'',
    },
    {
      id: 2,
      name: "Contact Manager App",
      imageUrl: project2,
      link:'https://contact-manager-reactapp.netlify.app/',
    },
    {
      id: 3,
      name: "Weather Information App",
      imageUrl: project3,
      link:'https://weather-information-app.netlify.app/',
    },
    {
      id: 4,
      name: "PDF Merger App",
      imageUrl: project4,
      link:'',
    },
    {
      id: 5,
      name: "Personal Portfolio Website",
      imageUrl: project5,
      link:'',
    },
    
  ];

  return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {projectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.id}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
              <Button href={item.link} target="_blank" variant="success">Live</Button>{' '}
              <Button variant="primary">View Code on GitHub</Button>{' '}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
