import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import CrearDistritos from './src/CrearDistritos'
import VerDistritos from './src/VerDistritos'
import { CreateContext } from './context'

export default function App() {
  const [updated, setUpdated] = React.useState(false)

  return (
    <CreateContext.Provider value={{ updated, setUpdated }}>
      <View style={styles.container}>
        <View style={{ height: '50%' }}>
          <CrearDistritos update={updated} setUpdate={setUpdated} />
        </View>
        
        <View style={{ height: '50%' }}>
          <VerDistritos />
        </View>
      </View>
    </CreateContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: '#fff'
  },
  card: {}
})
