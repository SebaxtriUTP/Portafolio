/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Project: Airline Platform",
    description:
      "For this project, I led a team in developing an airline platform utilizing Django framework for the backend and Vue.js for the frontend. The platform encompassed comprehensive flight booking management, passenger handling, and flight itinerary management. Leveraging Django's robust backend capabilities facilitated efficient data handling and processing, while Vue.js empowered us to create a dynamic and intuitive user interface. ",
    url: "https://github.com/SebaxtriUTP",
  },
  {
    title: "Chess using websockets",
    description:
      "In this project, I spearheaded the development of a real-time multiplayer chess game using Python. We employed threading, distributed systems, and websocket connections to enable seamless interaction between players. Leveraging threading allowed us to manage concurrent tasks efficiently, ensuring smooth gameplay experience for multiple users. Additionally, we implemented distributed systems to handle communication between servers and clients, ensuring scalability and reliability.",
    url: "https://github.com/SebaxtriUTP/Chess",
  },
  {
    title: "Mini c compiler using python",
    description:
      "Our compiler followed a modular architecture, comprising lexical analysis, syntax parsing, semantic analysis, and code generation phases. Through careful design and implementation, we ensured compatibility with a subset of the C language, focusing on essential features like variable declarations, arithmetic operations, conditionals, loops, and function definitions.",
    url: "https://github.com/SebaxtriUTP/mini-c-compiler",
  },
  {
    title: "Monocycle RISC-V Processor: Assembly to Machine Language Converter",
    description:
      "The Monocycle RISC-V Processor is a program meticulously crafted to convert assembly language code into machine language. Built to support the RISC-V architecture, this tool enables developers to seamlessly translate human-readable assembly instructions into binary instructions executable by the processor.",
    url: "https://github.com/SebaxtriUTP/Procesador-Monociclo-RISC-V",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
