import React from 'react';
import { SafeAreaView, View, ImageBackground, Dimensions, Text, StyleSheet } from 'react-native';
const { height} = Dimensions.get("window");
const logoH = require("../assets/img/logoHorizontal.png")
const blessinho = require("../assets/img/blessinho.png")
const logo = require("../assets/img/logoIcon.png")

import {FontFamily} from "../util/CommonStyle"



export default function WelcomeScreen() {
    return (
        <SafeAreaView>
            <View  style={{height:250, width: 250}}>
            <ImageBackground style={{height: height / 2.5}} resizeMode="contain"  source={blessinho}/>
            <View style={{}}>
                <Text style={styles.Text}>Texto teste</Text>
            </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Text: {
     color:"blue",
    fontFamily: FontFamily.bold
    },
  });
  