import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListaTareas from './components/ListaTareas';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <ListaTareas/>
    //   <StatusBar style="auto" />
    // </View>
    <ListaTareas/>
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
