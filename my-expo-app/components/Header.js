import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View>
        <Text style={styles.header}>Lista de Tareas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 70,
        fontSize: 30
    }
});