import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';

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
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#7159c1' />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text styles={styles.project}>{project.title}</Text>
          )}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          style={style.button}
          onPress={handleAddProject}
        >
          <Text style={style.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7159c1',
    flex: 1,
  },
  project: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#FFF',
    margin: 20,
    padding: 50,
    borderRadius:4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold'
  },
})
export default App;
