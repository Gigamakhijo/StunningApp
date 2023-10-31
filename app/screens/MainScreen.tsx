/* eslint-disable react/react-in-jsx-scope */
import { Image, ImageBackground, View, ViewStyle } from "react-native"
import { CalendarView } from "../components/CalendarView"
export const MainScreen = (_props) => {
  const BackGround = require("../../assets/images/app-background.png")
  const WeeklyReport = require("../../assets/images/WeeklyChart_Line.png")

  return (
    <ImageBackground source={BackGround} style={$backgroundImage}>
      <View style={$profileBox}>
        <Image source={WeeklyReport} style={$weeklyreportImage} />
        <CalendarView />
      </View>
    </ImageBackground>
  )
}

const $backgroundImage: ViewStyle = {
  backgroundColor: "#F6E4E4",
}

const $profileBox: ViewStyle = {
  backgroundColor: "#FFFFFF",
  borderRadius: 53,
  height: "100%",
  marginTop: 77,
}
const $weeklyreportImage: ViewStyle = {
  flexDirection: "row",
  marginLeft: 335,
  marginBottom: 10,
}
