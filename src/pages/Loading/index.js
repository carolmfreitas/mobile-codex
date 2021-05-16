import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Styles from './styles.android'

export default function Loading() {
  return (
    <View style={Styles.container}>
      <ActivityIndicator size="large" color="#fff" />
      <Text style={Styles.loading}>Loading</Text>
    </View>
  )
}