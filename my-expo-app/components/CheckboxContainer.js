import { View, StyleSheet } from "react-native"
import Checkbox from './CheckBox'
import React, { useState } from 'react'


export default function CheckboxContainer(){
    const [listaTareas] = useState([])
    return(
        <>
        <View style={styles.checkboxContainer}>
            {listaTareas.map((tarea) => {
                return (
                    <>
                        {/* <View style={styles.tarea}>
                            <Checkbox texto={tarea.tarea} />
                        </View> */}
                        <Checkbox texto={tarea.tarea} />
                    </>
                )
            })}
        </View>
        </>
    )
}

const styles = StyleSheet.create({

    checkboxContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 100,

    }
});