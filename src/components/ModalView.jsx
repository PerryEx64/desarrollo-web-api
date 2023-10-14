import React, { useContext } from 'react'
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { CreateContext } from '../../context'
import { AntDesign } from '@expo/vector-icons'
import { EditDistritos } from '../../services/request'

const ModalView = ({ distrito, modal, setModal }) => {
  const { setUpdated, updated } = useContext(CreateContext)
  const [nombre, setNombre] = React.useState(distrito.nombre)
  const [lider, setLider] = React.useState(distrito.lider)
  const [cantIglesias, setCantiIglesias] = React.useState(
    distrito.cantidad_iglesias
  )

  const handleState = (text, setData) => {
    setData(text)
  }

  const onUpdate = async () => {

    distrito.nombre = nombre
    distrito.lider = lider,
    distrito.cantidad_iglesias = cantIglesias
    distrito.updated_at = new Date()

    try {
      await EditDistritos(distrito)
      Alert.alert('Distrito actualizado')
      setUpdated(!updated)
      setModal(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModal(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View />
              <Text style={styles.modalText}>Hello World!</Text>
              <TouchableOpacity onPress={() => setModal(false)}>
                <AntDesign name='close' size={24} color='red' />
              </TouchableOpacity>
            </View>
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
              disabled={nombre && false}
              onPress={onUpdate}
              title='Actualizar'
              color='#841584'
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalView

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#F194FF'
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderColor: '#353535',
    padding: 10,
    borderRadius: 10
  }
})
