import { View, StyleSheet } from "react-native"
import Checkbox from './CheckBox'


export default function CheckboxContainer({array}){
    return(
        <>
        <View style={styles.checkboxContainer}>
            {array.map((tarea) => {
                return (
                    <>
                        <View>
                            <Checkbox texto={tarea.tarea} />
                        </View>
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
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginLeft: -170

    },
    texto: {
        fontSize: 16
    }
});