import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const cardData = [
    {
      id: 1,
      title: 'eVie',
      stack: 'Front-End Only',
      image: 'https://yerimechoi.github.io/eVie/Assets/evie.png',
      description: 'eVie is an electic vehicle charger location tool. It allows users to search for charging stations in their area and provide info on them!',
      liveAppUrl: 'https://yerimechoi.github.io/eVie/',
      githubRepoUrl: 'https://github.com/yerimechoi/eVie'
    },
    {
      id: 2,
      title: 'pic-nic',
      stack: 'Full-Stack',
      image: 'https://cdn.midjourney.com/95b5453d-8c16-4368-ac0e-d221889b68ae/grid_0.png',
      description: 'pic-nic is a social media esque application centered around discovering and sharing food. Users can upload their own recipies, or browse for inspiration!',
      liveAppUrl: 'https://example.com',
      githubRepoUrl: 'Placeholder'
    },
    {
      id: 3,
      title: 'JACE',
      stack: 'Full-Stack, MERN',
      image: 'https://lh3.googleusercontent.com/pw/AMWts8D8m67tIHzCTp4kzfMFkzQMaa4zu1Otp4rzPn96jQSWm8318KYmU1nDGSBU3x2qIp8KoOdqY6049s6rmVjuB5lhqsNMxVX3rJo7Qcu8V5_4WnmdlBF3RJnQAGzDtlRoptYJsJcR-px4p5JPm02gNjEVgk-i_uqcNpe7QQZaugk4DJ9xbbacXezY0wRy9Xy62L2sCucVAhiM3NDn-DxRXQbDYLZT36UCiFwbVTfJe15VMc3OkDwMfG5r8IzWJprsbpNRnGYuQwLXXPTTu3_7XUUDfMeRbZ6wNoXM8snHC98ND8tL-o-A5sarvMhbGfwDsVRL17YncIqRU0148mN2hG5e3TyjHlByC_Qiu7IHfEX00G77JV86ud_Pz_9ocosnQAQ0Hwbz4zKLBgC06YITIxwR-Op_Ez_f_5iPFapOKtxy9lfuzz3mI4o_62ffUnfvjpmi4j3Mqpf0bbraQMSZNyPlLg6UsvX5v1EY_7HnHLLZ2j3mxLVdydtycI5bj6YkwARkExu5Dh3qj7NvffCCWRY0FBTqc-qi_yM6peDS-aJKjJlmE-OBnZBfc-ixkAaPgpJQ-hDq5Wr-vXG7WS2tuIbu8zf6WoAUmG4UfDvrawi0398iJsiB02vf2VjCUmPO6NArQ23Q05JL0L_NmIw_kpWNlYUPC3nC3dfxElX8uTebuHlNacsKBETNyBuGDNIAsg1qlp4CHSdxoqKCuQSUd0zNKyNwAszLn4Kh5OM-N0CeWPHxNU3HA08DjWMwb7ThjdxAuADgikvIUjvFztJe7s2wMj1UIAi1UVpsk6QYD5qUfMPHrqRWxemKszDHlH0Xi1pOzjlhkJNngnQsGu5fbglPUvoznKnjgALJ5lozvwqPWJjDo5SV7KcWJtffU5EfQiQ6oaPUzn4mCV0eeaqf1gikEIiBOF7y5poiXymbGxJyAVP48peCEugL-B7BfVY=w937-h937-s-no?authuser=0',
      description: '(thumbnail is placeholder for now) JACE is a full-stack web application that allows users (both restauraunt owners and clients) to handle orders, payment, and kitchen information for local restauraunts!',
      liveAppUrl: 'https://jace1971.herokuapp.com/',
      githubRepoUrl: 'https://github.com/cdennis27/JACE'
    },
    {
        id: 4,
        title: 'Placeholder',
        stack: 'placeholder',
        image: 'https://i.pinimg.com/736x/4d/79/99/4d7999a51a1a397189a6f98168bcde45--layout-design-ui-design.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        liveAppUrl: 'https://example.com',
        githubRepoUrl: 'Placeholder'
      }
  ];



  function Projects() {
    return (
      <div className="projects">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {cardData.map((projectData) => (
            <div className="project" key={projectData.id}>
              <ProjectCard
                title={projectData.title}
                stack={projectData.stack}
                image={projectData.image}
                description={projectData.description}
                liveAppUrl={projectData.liveAppUrl}
                githubRepoUrl={projectData.githubRepoUrl}
              />
            </div>
          ))}
        </div>
      </div>
    );
}


export default Projects;
