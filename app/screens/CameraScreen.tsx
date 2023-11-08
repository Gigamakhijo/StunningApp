// import { observer } from "mobx-react-lite"
import React, { }from "react"
import { ImageBackground,View, ViewStyle} from "react-native";
import { Screen} from "../components";
// import { AppStackScreenProps } from "../navigators"

export const CameraScreen = (_props) => {
  const BackGround = require("../../assets/images/app-background.png")
  return(
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
      backgroundColor="#FFFEFE"
    >
      <ImageBackground source={BackGround} style={$backgroundImage}>
        <View style={$profileBox}>
        </View>
      </ImageBackground>
    </Screen>
  )
}

const $screenContentContainer: ViewStyle ={
  // alignContent: 'flex-start',
  flexDirection: 'column',
}
const $backgroundImage: ViewStyle = {
  backgroundColor: "#F6E4E4",
}

const $profileBox: ViewStyle = {
  backgroundColor: "FFFEFE",
  borderRadius: 53,
  height: "100%",
  marginTop: 77,
}