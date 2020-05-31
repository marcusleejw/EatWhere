import React,{ useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
    } from "react-native";
import firebase from "../database/Firebase";
import FlatButton from "../shared/button";
import { MaterialIcons } from '@expo/vector-icons';

export default function FoodDetails ({ navigation, route }) {

    const { price } = route.params;

    const [quantity, setQuantity] = useState(0);
    const decreaseQuantity = () => {
        setQuantity(quantity - 1)
    };
    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    };

    return (
        <View style = { styles.container }>
            {/* <Text>
                Chicken Katsu 
            </Text>

            <View style = { styles.amountContainer }>
                <View style = { styles.amountButtonContainer }>
                    <TouchableOpacity onPress = {decreaseQuantity}>
                        <View style = {styles.icon}> 
                            <MaterialIcons
                                name = 'remove'
                                size = {20}
                            />
                        </View>
                    </TouchableOpacity>
                
                <Text style = { styles.quantity }> { quantity.toString() }</Text>

                    <TouchableOpacity onPress = {increaseQuantity}>  
                        <View style = { styles.icon }> 
                            <MaterialIcons
                                name = 'add'
                                size = {20}
                            />
                        </View>
                    </TouchableOpacity>
                </View> 
            </View>


            <View style = { styles.bottomButtonContainer }> 
                <Button 
                onPress = { () => navigation.navigate('Cart') }
                title = { 'Add to cart'.toUpperCase() }
                />
                <View style = { styles.buttonPriceText }>
                    <Text>
                        { '$' + price } 
                    </Text>
                </View>
            </View> */}

            <View> 
                <Text>
                    Food details screen  
                </Text>
            </View>
            <View style = { styles.bottomButtonContainer }> 
                <Button 
                color = '#f01d71'
                onPress = { () => navigation.navigate('Cart') }
                title = { 'Add to cart'.toUpperCase() }
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        backgroundColor: '#fff'
    },
    amountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    amountButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    quantity: {
        top: -1,
        paddingHorizontal: 20,
        fontSize: 18,
        color: '#f01d71',
        textAlign: 'center',
    },
    bottomButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 16,
        paddingHorizontal: 24,
        position:'absolute',
        bottom: 0,
    },
    buttonPriceText: {
        fontSize: 16,
        lineHeight: 18,
        color: 'white',
    }
});

const buttonStyle = StyleSheet.create({
    button: {
        borderRadius: 8,
        marginVertical: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "pink",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },
});

