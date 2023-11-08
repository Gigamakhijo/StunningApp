/* eslint-disable react/react-in-jsx-scope */
// import React ,{useState, Component} from 'react';
import { ImageBackground,Image, View, ViewStyle,Text } from "react-native";
// import { Screen} from "../components";
import { Screen, CalendarView, LowerBar} from "../components";
// import { LowerBar} from "../components/LowerBar";
export const MainScreen = (_props) => {
  const BackGround = require("../../assets/images/app-background.png")
  const WeeklyReport = require("../../assets/images/WeeklyChart_Line.png")

  return(
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
      backgroundColor="#FFFEFE"
    >
      <ImageBackground source={BackGround} style={$backgroundImage}>
        <View style={$profileBox}>
          <Image source={WeeklyReport} style={$weeklyreportImage}/>
          <CalendarView />
          <Text style={$scheduletextstyle}>{new Date().toDateString()+" Schedule"}</Text>
          <View style={$scheduleBox}></View>
          {/* <LowerBar /> */}
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
const $scheduleBox: ViewStyle ={
  
  backgroundColor: "white",
  borderRadius: 20,
  height: 100,
  marginTop: 10,
  marginLeft:20,
  marginRight:20,
}
const $weeklyreportImage: ViewStyle = {
  marginTop: 5,
  marginLeft: 330,
}
const $scheduletextstyle: ViewStyle ={
  marginLeft: 30,
  marginTop:5,
}
