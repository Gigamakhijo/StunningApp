import React from "react"
import { ImageBackground, View, ViewStyle } from "react-native"
import { Screen, Icon } from "../components"
import { CalendarView } from "../components/CalendarView"

export const MainScreen = (_props) => {
  const image = require("../../assets/images/app-background.png")

  return (
    <Screen preset="scroll">
      <View style={$container}>
        <ImageBackground source={image} style={$backgroundImage}>
          <Icon icon="stats" style={$iconStyle} />
          <CalendarView />
        </ImageBackground>
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  backgroundColor: "$FFFEFE"
}

const $iconStyle: ViewStyle = {

}

const $screenContentContainer: ViewStyle = {
  flexDirection: "column",
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

const $weeklyreportImage: ViewStyle = {
  marginTop: 5,
  marginLeft: 330,
}