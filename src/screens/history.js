import * as React from 'react';
import { Button, StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export function History({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={{ justifyContent: 'center', marginTop: 30 }} >
                <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => navigation.navigate('Home')}>
                    <Ionicons style={styles.backIcon} name="md-arrow-back-sharp" size={35} color="black" />
                </TouchableOpacity>

                <Text style={{ fontWeight: "bold", fontSize: 20, alignSelf: 'center', marginTop: 30 }}>Order History</Text>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image style={styles.guy_with_pc} source={require('../images/guy_with_pc.png')} />

                <Text style={{ fontWeight: "bold", fontSize: 30 }}>No history yet</Text>

                <Text style={{ color: '#9A9A9D', fontSize: 20, marginTop: 10, textAlign: 'center' }}>Hit the blue button down below to create an order</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.button}>Start ordering
                    </Text>
                </TouchableOpacity>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        fontFamily: "Raleway",
        margin: 6

    },
    guy_with_pc: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    button: {
        marginTop: 20,
        fontFamily: 'Raleway',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFFFFF',
        backgroundColor: '#58C0EA',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 60
    },
});

