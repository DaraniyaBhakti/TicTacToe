import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Sqaure(props: any) {
  return (
    <TouchableOpacity onPress={props.squareClick}>
        <View style={{ borderWidth: 1, borderColor: 'black', width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontWeight:'400',fontSize:20}}>{props.value}</Text>
        </View>
      </TouchableOpacity>
  )
}