import React from 'react';
import { Alert,View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function Main({navigation}) {
    return(
    <View style={styles.container}>
        <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
            />
        <TextInput
            style={styles.input}
            placeholder="Email"
        />
        <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Senha"
        />

        <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.push('Home')}
        >
            <Text style={styles.botaoText}>Entrar</Text>
            
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.botao1}
            onPress={() => navigation.push('Senha')}
        >
            <Text style={styles.botaoText}>Esqueci minha Senha</Text>
            
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.botao1}
            onPress={() => navigation.push('Cadastro')}
        >
            <Text style={styles.botaoText}>Criar nova conta</Text>
            
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

    logo:{
        width: 300,
        height: 150,
        marginBottom: 20,
        borderRadius: 4,
        
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

    botao1: {
        width: 300,
        height: 42,
        
        marginTop: 10,
        padding: 8,
        borderRadius: 4,

    }
    

});


export default Main;