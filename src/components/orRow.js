import React from 'react';
import { View,Text } from 'react-native';

export default function Row() {
 return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:12.5,}}>
    <View style={{flex: 1, height: 1.25, backgroundColor: 'grey'}} />
    <View>
        <Text style={{width: 50, textAlign: 'center', color:"grey"}}>Ou</Text>
    </View>
    <View style={{flex: 1, height: 1.25, backgroundColor: 'grey'}} />
    </View>
  );
}