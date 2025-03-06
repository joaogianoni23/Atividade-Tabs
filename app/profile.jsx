import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from '@rneui/themed';

export default function Profile () {
    return (

        <Card>
        <View style={styles.container}>
            
            <Image
                source={{ uri: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/12/Rodrigo-Garro-e1734108125460.jpg?w=1200&h=900&crop=1"}}
                style={{ width: 100, height: 100, borderRadius: 100 }}></Image>
                <Text style={styles.text}>Rodrigo Garro</Text>
                <Text>Personalize esta página como quiser!</Text>
            </View>
            </Card>
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