import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import estilos from './estilo'

const Cor = function (props) {
    return (
        <View>
            <Text style={ estilos.titulo }>Cor: {props.nomeCor}</Text>
        </View>
    );
}

export default Cor;