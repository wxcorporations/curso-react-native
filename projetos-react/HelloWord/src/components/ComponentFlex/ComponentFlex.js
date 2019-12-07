import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import estilo from './estilo';

const ComponentFlex = function (props) {
    return (
        <View style={ estilo.container }>
            {/* <Image 
                style={{width: 50, height: 50}}
                source={{uri:'https://icon2.cleanpng.com/20180607/eql/kisspng-nubank-credit-card-financial-crisis-of-200708-brazil-png-5b19b73b8103e0.6915791715284119635285.jpg'}}    
            ></Image> */}
            <Image 
                style={ estilo.imgIcon }
                source={ 
                    require('../../assets/img/Nubank_App_icon.png') 
                }    
            ></Image>
            <Text style={[ estilo.title, estilo.titleColor ]} >
                { props.titulo }
            </Text>
        </View>
    );
}

export default ComponentFlex;