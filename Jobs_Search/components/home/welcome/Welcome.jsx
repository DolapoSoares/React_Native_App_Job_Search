import { useState } from 'react'
import { View, Text , TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import { useRouter } from "expo-router"

import { icons, SIZES } from "../../../constants"

import styles from './welcome.style'

const Welcome = () => {

  const router = useRouter()
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Soares</Text>
        <Text style={styles.welcomeMessage}>You can find your favourite jobs here</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="Search for jobs here"
            />
        </View>
      </View>
    </View>
  )
}

export default Welcome