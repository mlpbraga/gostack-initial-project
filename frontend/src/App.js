import React, { useState } from 'react';

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
      <ul>
        {projects.map(project => <li key={project}>{project}</li> )}
      </ul>

      <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}

export default App;
