import React from 'react'
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native'
import { PutDistritos } from '../services/request'

const CrearDistritos = ({ setUpdate, update }) => {
  const [nombre, setNombre] = React.useState('')
  const [lider, setLider] = React.useState('')
  const [cantIglesias, setCantiIglesias] = React.useState('')

  const handleState = (text, setData) => {
    setData(text)
  }

  const onSave = () => {
    PutDistritos({
      nombre: nombre,
      lider: lider,
      cantidad_iglesias: cantIglesias
    })
      .then((res) => {
        setUpdate(!update)

        //Resetear valores
        setTimeout(() => {
          handleState('', setNombre)
          handleState('', setLider)
          handleState('', setCantiIglesias)
        }, 500)

        Alert.alert('Distrito creado exitosamente')
      })
      .catch((err) => {
        Alert.alert('error')
      })
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleState(text, setNombre)}
        value={nombre}
        placeholder='Nombre del Distrito'
        keyboardType='default'
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleState(text, setLider)}
        value={lider}
        placeholder='Nombre del Lider'
        keyboardType='default'
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleState(text, setCantiIglesias)}
        value={cantIglesias}
        placeholder='Cantidad de Iglesias'
        keyboardType='numeric'
      />

      <Button
        disabled={nombre != '' ? false : true}
        onPress={onSave}
        title='Guardar'
        color='#841584'
      />
    </View>
  )
}

export default CrearDistritos

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  }
})
