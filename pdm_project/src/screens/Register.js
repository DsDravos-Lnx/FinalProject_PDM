import React from "react"
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import DatePicker from 'react-native-datepicker'
import axios from 'axios'

const baseUrl = 'http://b9db-164-163-158-46.ngrok.io/'

const Cadastro = ({ navigation }) => {
    const [titulo, onChangeTitulo] = React.useState('')
    const [descricao, onChangeDescricao] = React.useState('')
    const [tarefa, onChangeTarefa] = React.useState('')
    const [data, onChangeData] = React.useState('')

    const handleCadastro = async () => {
        try {
            const url = `${baseUrl}api/create/atividade`;
            const response = await axios.post(url, {
                "titulo": titulo,
                "descricao": descricao,
                "tarefa": tarefa,
                "data": data,
            });

            if (navigation.canGoBack()) {
                navigation.goBack()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeTitulo}
                value={titulo}
                placeholder="Titulo"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeDescricao}
                value={descricao}
                placeholder="Descrição"
            />
            <DatePicker
                style={ styles.data }
                date={data}
                format="DD-MM-YYYY HH:mm:SS"
                minDate="29-03-2022"
                maxDate="31-08-2099"
                onDateChange={onChangeData}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeTarefa}
                value={tarefa}
                placeholder="Tarefa"
            />
            <TouchableOpacity onPress={handleCadastro} style={styles.confirmButton}> 
                <text>Salvar</text> 
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#27282D',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    input: {
        width: '100%',
        height: 40,
        marginBottom: 12,
        paddingLeft: 10,
        borderRadius: 20
    },
    data: {
        height: 40,
        margin: 12,
        width: 370,
    },
    confirmButton: {
        width: '100%',
        height: 40,
        backgroundColor: '#993399',
        borderRadius: 20,
        justifyContent: 'center'
    }
})

export default Cadastro;