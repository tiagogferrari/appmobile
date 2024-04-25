import { Text, View, StyleSheet } from "react-native"
import { TextInput, Button } from "react-native-paper";

const ModificarPesquisa = () => {
    return (
        <View style={estilos.view}>
            <Text style={estilos.label}>Nome</Text>
            <TextInput style={estilos.TextInput} placeholder="Insira seu nome" />
            <Text style={estilos.label}>Data</Text>
            <TextInput style={estilos.TextInput} placeholder="Insira data" />
            <Text style={estilos.label}>Imagem</Text>
            <Text>?</Text>
            <Button labelStyle={estilos.BtnText} style={estilos.BtnC}>SALVAR</Button>
        </View>
    )
}

const estilos = StyleSheet.create({
    view: {
        backgroundColor: '#372775',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        alignSelf: 'flex-start',
        marginLeft: '17%',
        marginBottom: 5,
        color: 'white',
        fontFamily: 'AveriaLibre-Regular'
    },
    TextInput: {
        marginBottom: 20,
        width: 500,
        height: 40,
    },
    BtnC: {
        backgroundColor: "#37BD6D",
        borderRadius: 0,
        marginBottom: 10,
        width: 500,
    },
    BtnText: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 20
    },
})

export default ModificarPesquisa