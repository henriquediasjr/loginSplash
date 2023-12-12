import React, { useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

import * as Animatable from "react-native-animatable";

import { useNavigation } from '@react-navigation/native';

export default function Login() {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangePasswordHandler = (password) => {
        setPassword(password);
    };
    const onChangeEmailHandler = (email) => {
        setEmail(email);
    };
    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/login", {
                email: email,
                password: password,
            });

            const userToken = (response.data.token);
            navigation.navigate('Invoices', { token: userToken });
            // console.log(userToken);


            // window.location.replace(`http://localhost:8080/api/v1/dashboard`);
        } catch (error) {
            console.error("Login error:", error);
        };
    };





    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>

            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.titles}>Email</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}
                    value={email}
                    onChangeText={onChangeEmailHandler}
                />
                <Text style={styles.titles}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha..."
                    style={styles.input}
                    value={password}
                    onChangeText={onChangePasswordHandler}
                />

                <Pressable style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </Pressable>

                <Pressable style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </Pressable>
            </Animatable.View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: 'red',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#a1a1a1'
    }
})