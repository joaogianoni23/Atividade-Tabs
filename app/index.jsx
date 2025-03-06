import { View, Text, StyleSheet } from 'react-native';

export default function Home () {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem-vindo á Página Inicial!</Text>
            <Text>Este é um app com Expo Router</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});