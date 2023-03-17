import React from 'react';
import { View ,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView, } from 'react-native';

export default function KeyboardAvoidingWrapper({children}) {
 return (
 
    <KeyboardAvoidingView style={{ flex: 1}} behavior="undefined">
      <ScrollView   contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>

  );
}