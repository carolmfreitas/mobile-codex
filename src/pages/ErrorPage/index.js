import React from 'react';
import { Text, View } from 'react-native';
import Styles from './styles.android'

export default function ErrorPage({error}) {
    return (
        <View style={Styles.container}>
          {
              error === 'getStorageToken' ? (
                <View>
                  <Text style={Styles.texto}>Erro ao pegar token do armazenamento</Text>
                  <Text style={Styles.texto}>Tente novamente mais tarde</Text>
                </View>
              ) : error === 'checkToken' ? (
                <View>
                  <Text style={Styles.texto}>Erro ao tentar checar token</Text>
                  <Text style={Styles.texto}>Tente novamente mais tarde</Text>
                </View>
              ) : (
                <View>
                  <Text style={Styles.texto}>{error}</Text>
                  <Text style={Styles.texto}>Tente novamente mais tarde</Text>
                </View>
              )
          }
        </View>
    )
}