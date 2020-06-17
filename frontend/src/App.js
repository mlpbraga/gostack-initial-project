import React, { useState } from 'react';

import './App.css';
import image from './assets/image.jpg';

import Header from './Header';

const App = () => {
  const [projects, setProjects] = useState(['Desenvolvimento de App', 'FronWeb']);

  const handleAddProject = () => {
    setProjects([
      ...projects,
      `Projeto ${Date.now()}`,
    ])
    console.log(projects)
  };

  return (
    <>
      <Header title='Homepage'/>
      <img width={300} src={image}/>
      <ul>
        {projects.map(project => <li key={project}>{project}</li> )}
      </ul>

      <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}

export default App;
