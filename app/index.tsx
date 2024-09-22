import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { StatusBar } from "expo-status-bar";

const Index = () => {
    const router = useRouter();
    // State to store form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Function to handle form submission
    const handleSubmit = () => {
        if (name === '' || email === '') {
            Alert.alert('Please fill out all fields.');
        } else {
            Alert.alert(`Form Submitted: \nName: ${name} \nEmail: ${email}`);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={(text) => setName(text)}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
            />

            <Button title="Submit" onPress={handleSubmit} />
            <View style={{ marginTop: 15 }}>
                <Button title="Open School Form" onPress={() => router.push("/school-form")} />
            </View>
            <StatusBar style='dark' />
        </View>
    );
};

// Styling the components
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
});

export default Index;
