import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native'
import CheckboxContainer from './CheckboxContainer'

export default function AddTask(){
    const [listaTareas, setListaTareas] = useState([])
    const [tarea, setTarea] = useState()
    return(
        <>
            <View style={styles.addTarea}>
                <Text style={styles.tarea}>Tarea</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Escribe la tarea"
                    onChangeText={setTarea}
                    defaultValue={tarea}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        setTarea('')
                        setListaTareas([...listaTareas, { tarea: tarea }])

                    }}
                >
                    <Text style={styles.add}>Agregar</Text>
                </TouchableOpacity>
            </View>
            <CheckboxContainer array={listaTareas}/>
        </>
    )
}

const styles = StyleSheet.create({
    addTarea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: -150,
        marginBottom: -150
        },
    tarea: {
        fontSize: 16
    },
    input: {
        height: 40,  // Altura del TextInput
        width: 200,  // Ancho del TextInput
        borderColor: 'gray',  // Color del borde
        borderWidth: 1,  // Ancho del borde
        paddingHorizontal: 10,  // Espaciado interno horizontal
        borderRadius: 5,  // Bordes redondeados
        backgroundColor: '#f9f9f9',  // Fondo del TextInput
        color: 'black',  // Color del texto
        fontSize: 16,  // Tamaño de la fuente
        marginLeft: 10,
        marginRight: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#049afc',
        padding: 12,
        borderRadius: 5,
    },
    add: {
        color: '#ffffff'
    }
});