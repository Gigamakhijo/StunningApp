/* eslint-disable react/react-in-jsx-scope */
import { ImageBackground, View, ViewStyle } from "react-native";

export const MainScreen = (_props) => {
  
const BackGround = require("../../assets/images/app-background.png")

  return (
    <ImageBackground source={BackGround} style = {$backgroundImage}>
        <View style = {$profileBox}>

        </View>
    </ImageBackground>
  )
}

const $backgroundImage : ViewStyle = {
    backgroundColor:"#F6E4E4",
  }

const $profileBox:  ViewStyle = {
  backgroundColor: '#FFFFFF',
  borderRadius: 53,
  height:'100%',
  marginTop: 77,
}
