import { AntDesign, Feather } from '@expo/vector-icons'
import React, { useContext } from 'react'
import { Alert, TouchableOpacity } from 'react-native'
import { DeleteDistritos } from '../../services/request'
import { CreateContext } from '../../context'
import ModalView from './ModalView'

const ActionButtons = ({ distrito }) => {
  const { updated, setUpdated } = useContext(CreateContext)
  const [modalVisible, setModalVisible] = React.useState(false)

  const handleEdit = () => {
    //modal & actualiza lista
    setModalVisible(true)
  }

  const handleDelete = () => {
    //alerta de confirmacion & actualiza lista
    console.log('elimina')
    DeleteDistritos(distrito.id).then(() => {
      setUpdated(!updated)
      Alert.alert('Eliminado Correctamente')
    })
  }
  return (
    <>
      <TouchableOpacity onPress={handleEdit}>
        <AntDesign name='edit' size={24} color='orange' />
      </TouchableOpacity>
      <ModalView distrito={distrito} modal={modalVisible} setModal={setModalVisible} />

      <TouchableOpacity onPress={handleDelete}>
        <Feather name='delete' size={24} color='red' />
      </TouchableOpacity>
    </>
  )
}

export default ActionButtons
