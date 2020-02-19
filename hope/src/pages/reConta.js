import React from 'react';
import { Alert,View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


clicou = () => {
    Alert.alert("Hope", "Uma solicitação foi enviada para seu email!");
}

function reConta() {
    return(
    <View style={styles.container}>
        <Text style={styles.texto}>Digite seu email</Text>

        <TextInput
            style={styles.input}
            placeholder="Email"
        />

        <TouchableOpacity
            style={styles.botao}
            onPress={() => {this.clicou()}}
        >
            <Text style={styles.botaoText}>Solicitar nova senha</Text>
            
        </TouchableOpacity>

    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#7159c1',
        alignItems: 'center',
        justifyContent: 'center',
    },

    texto: {
        fontWeight: "bold",
        fontSize: 25,
        color: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        marginTop: 10,
        padding: 8,
        width: 300,
        backgroundColor : '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius:4,
    },

    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#483D8B',
        marginTop: 10,
        padding: 8,
        borderRadius: 4,
           
    },

    botaoText: {
        fontWeight: "bold",
        fontSize: 16,
        color: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',

    },
});

export default reConta;