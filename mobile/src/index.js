import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='#7159c1'/>
    <View style={styles.container}>
      <Text style={styles.title}> GoStack </Text>
    </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
export default App;
