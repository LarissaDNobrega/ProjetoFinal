import * as React from 'react';
import { Button, StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

export function Home({ navigation }) {
    return (
        <View style={styles.container}>

            <View>

                <TouchableOpacity onPress={() => navigation.navigate('History')}>
                    <Image style={styles.hamb} source={require('../images/hamburger.png')} />
                </TouchableOpacity>

                <Text style={styles.homeFont}>Order online choose the product</Text>

                <Text style={{ color: '#9A9A9D', fontSize: 15, marginTop: 10 }}>Phones</Text>

                <View style={styles.line} />
            </View>


            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.card}>
                    <Image style={styles.apple_watch} source={require('../images/apple_watch.png')} />
                    <View style={styles.prod_info}>
                        <Text style={{fontWeight: 'bold',  fontSize: 20,}}>Apple Watch</Text>
                        <Text style={{color: '#868686'}}>Series 6. Red</Text>
                        <Text style={{fontWeight: 'bold', color: '#5956E9'}}>$ 359</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image style={styles.apple_watch} source={require('../images/apple_watch.png')} />
                    <View style={styles.prod_info}>
                        <Text style={{fontWeight: 'bold',  fontSize: 20,}}>Apple Watch</Text>
                        <Text style={{color: '#868686'}}>Series 6. Red</Text>
                        <Text style={{fontWeight: 'bold', color: '#5956E9'}}>$ 359</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image style={styles.apple_watch} source={require('../images/apple_watch.png')} />
                    <View style={styles.prod_info}>
                        <Text style={{fontWeight: 'bold',  fontSize: 20,}}>Apple Watch</Text>
                        <Text style={{color: '#868686'}}>Series 6. Red</Text>
                        <Text style={{fontWeight: 'bold', color: '#5956E9'}}>$ 359</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image style={styles.apple_watch} source={require('../images/apple_watch.png')} />
                    <View style={styles.prod_info}>
                        <Text style={{fontWeight: 'bold',  fontSize: 20,}}>Apple Watch</Text>
                        <Text style={{color: '#868686'}}>Series 6. Red</Text>
                        <Text style={{fontWeight: 'bold', color: '#5956E9'}}>$ 359</Text>
                    </View>
                </View>

            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "Raleway",
        marginTop: 50,
        margin: 6
    },
    homeFont: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 45,
    },
    hamb: {
        width: '7%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    card: {
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
    },
    apple_watch: {
        width: '50%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    line: {
        borderBottomColor: '#5956E9',
        borderWidth: 2,
        borderRadius: 2,
        alignSelf: 'flex-start',
        width: 60,
        marginBottom: 10
    },
    prod_info:{
        margin: 10,
        color: '#000000',
        fontWeight: 'bold',
        justifyContent: 'center',
    }
    
});

