import React, {Component} from 'react';
import { Text } from 'react-native';

export default class ComponeteClasse extends Component {

    state = {
        usuario: {
            nome: 'fernando state',
            idade: 301,
        },

        texto: 'texto inicial',
    }

    devolveNome() {
        return 'Maria';
    }

    render() {
        return (
            <>

                <Text>Valores via props</Text>

                <Text
                    style={{ fontSize: 30, textAlignVertical: 'center' }}
                >
                    Nome {this.props.nome}
                </Text>

                <Text
                    style={{ fontSize: 30, textAlignVertical: 'center' }}
                >
                    Idade {this.props.idade}
                </Text>

                <Text
                    style={{ fontSize: 30, textAlignVertical: 'center' }}
                >
                    Outro nome {this.devolveNome()}
                </Text>
                
                    

                <Text>Valores via state</Text> 

                <Text
                    style={{ fontSize: 30, textAlignVertical: 'center' }}
                >
                    Nome {this.state.usuario.nome}
                </Text>

                <Text
                    style={{ fontSize: 30, textAlignVertical: 'center' }}
                >
                    Idade {this.state.usuario.idade}
                </Text>

                <Text
                    style={{ fontSize: 30, textAlignVertical: 'center' }}
                >
                    Outro nome {this.devolveNome()}
                </Text>
            </>
         );
    }
}



