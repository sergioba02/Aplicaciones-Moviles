import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import AddTask from './components/AddTask';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <AddTask/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
