import { View, Text, StyleSheet } from 'react-native';

export default function News () {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Minhas Noticias</Text>
            <Text>Personalize esta página como quiser!</Text>
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