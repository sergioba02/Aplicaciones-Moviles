import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const Checkbox = ({texto}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);

  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
        {isChecked && <View style={styles.checked} />}
      </TouchableOpacity>
      <Text style={!isChecked ? styles.label : styles.labelChecked}>{texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    width: 14,
    height: 14,
    backgroundColor: 'black',
  },
  label: {
    fontSize: 16,
  },
  labelChecked: {
    textDecorationLine: 'line-through'
  }
});

export default Checkbox;