import React from 'react';
import { Alert,View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function Conta({navigation}) {
    return(
    <View style={styles.container}>
        <Image
        source={require('../assets/foto.jpg')}
        style={styles.foto}
        />
        <Text style={styles.texto}>Digite seu nome</Text>
        <TextInput
            style={styles.input}
            
            placeholder="Nome"
        />
        <Text style={styles.texto}>Digite seu email</Text>
        <TextInput
            style={styles.input}
            
            placeholder="Email"
        />
        <Text style={styles.texto}>Digite sua senha</Text>
        <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Senha"
        />
        <Text style={styles.texto}>Confirme sua senha</Text>
        <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Senha"
        />
        <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.goBack()}
        >
            <Text style={styles.botaoText}>Cadastrar</Text>
            
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

    foto:{
        width: 150,
        height: 150,
        marginBottom: 20,
        borderRadius: 100,
        
    },

    texto: {
        fontWeight: "bold",
        fontSize: 16,
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
        borderRadius:4

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



export default Conta;