import React, { useContext } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { GetDistritos } from '../services/request'
import ActionButtons from './components/ActionButtons'
import { CreateContext } from '../context'

const VerDistritos = () => {
  const [data, setData] = React.useState([])
  const { updated } = useContext(CreateContext)

  React.useEffect(() => {
    GetDistritos().then((res) => {
      setData(res)
    })
  }, [updated])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data &&
        data.map((item, index) => (
          <View
            key={index}
            style={{
              width: '100%',
              borderWidth: 1,
              padding: 8,
              borderRadius: 10,
              flexDirection: 'row',
              marginVertical: 8,
              justifyContent: 'space-evenly'
            }}
          >
            <View>
              <Text style={{ textAlign: 'center' }}>{item.nombre}</Text>
              <Text style={{ textAlign: 'center' }}>{item.lider}</Text>
            </View>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}
            >
              <ActionButtons distrito={item}  />
            </View>
          </View>
        ))}
    </ScrollView>
  )
}

export default VerDistritos
