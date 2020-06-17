import React, { useState, useEffect } from 'react';

import './App.css';

import Header from './Header';

import api from './services/api';

const App = () => {
  const [projects, setProjects] = useState([]);

  const handleAddProject = async () => {
    const response = await api.post('projects', {
      title: `Projeto ${Date.now()}`,
      owner: `Luísa Braga`,
    });

    const project = response.data;

    setProjects([
      ...projects,
      project
    ]);
  };

  useEffect(() => {
    api.get('projects').then( response => {
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <Header title='Homepage'/>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <strong>{project.title}</strong>
            <p>{project.owner}</p>
          </li>
        ))}
      </ul>

      <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}

export default App;
