import React from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
    return (
      <div className="card">
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-stack">{props.stack}</h5>
          <p className="card-text">{props.description}</p>
          <div className="card-links">
            <a href={props.liveAppUrl} target="_blank" rel="noopener noreferrer" className="card-link liveApp">Live App</a>
            <a href={props.githubRepoUrl} target="_blank" rel="noopener noreferrer" className="card-link githubButton">GitHub Repo</a>
          </div>
        </div>
      </div>
    );
  }

export default ProjectCard;