import React, { useState } from 'react'
import { Text, TextInput, Button, StyleSheet, View } from 'react-native'
import Checkbox from './CheckBox'


export default function ListaTareas() {
    const [listaTareas, setListaTareas] = useState([])
    const [tarea, setTarea] = useState()
    return (
        <>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.header}>Lista de Tareas</Text>
                </View>
                <View style={styles.addTarea}>
                    <Text style={styles.tarea}>Tarea</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Escribe la tarea"
                        onChangeText={e => setTarea(e)}
                        defaultValue={tarea}
                    />
                    <Button 
                        style={styles.button}
                        onPress={() => {
                            setTarea('')
                            setListaTareas([...listaTareas, { tarea: tarea }])

                        }}
                        title="+"
                        color="#841584"
                    />
                </View>
            </View>
            <View style={styles.checkboxContainer}>
                {listaTareas.map((tarea) => {
                    return (
                        <>
                            <Checkbox texto={tarea.tarea} />
                        </>
                    )
                })}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    checkboxContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 100,

    },
    header: {
        marginTop: 70,
        fontSize: 30,
    },
    addTarea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    tarea: {
        fontSize: 16
    },
    title: {
        flex: 1,
        justifyContent: 'flex-start'
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
});