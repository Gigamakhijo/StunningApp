/* eslint-disable react/react-in-jsx-scope */
import { ImageBackground, View, ViewStyle,Image} from "react-native";
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars'

export const MainScreen = (_props) => {
const BackGround = require("../../assets/images/app-background.png")
const WeeklyReport = require("../../assets/images/WeeklyChart_Line.png")
const [selected, setSelected] = useState('');
  return (
    <ImageBackground source={BackGround} style = {$backgroundImage}>
        <View style = {$profileBox}>
          <View style = {$weekcalendargroup}>
            
            <View>
              <View style = {$weeklyreportImage}>
                <Image source= {WeeklyReport} />
              </View>
            <Calendar style ={$calendar}
              onDayPress={day => {
                setSelected(day.dateString);
              }}
              markedDates={{
                [selected]: {selected: true, disableTouchEvent: true}
              }}
              monthFormat={'MMMM'} // 달력에서 보이는 월이 바뀔때 실행되는 함수
              headerStyle={{
                // justifyContent: 'flex-start',
                // flexDirection: 'column,
              }}
              theme={{
                backgroundColor: 'FFFEFE',
                textDayFontWeight: '500', // 일 글자굵기
                textMonthFontWeight: '700', // 월 글자굵기
                textDayHeaderFontWeight: '500', // 요일 글자굵기
                calendarBackground: '#ffffff', // 캘린더 배경색상
                textSectionTitleColor: '#b6c1cd', // 요일 글자색상
                textDayFontSize: 15, // day 글자크기
                textMonthFontSize: 20, // month 글자크기
                textDayHeaderFontSize: 15, // 요일 글자크기
                selectedDayBackgroundColor: '#deabb2', // 일 선택시 나오는 동그라미 색상
                selectedDayTextColor: '#ffffff', // 일 선택시 나오는 동그라미안 글자 색상
                todayTextColor: '#deabb2', // 오늘 날짜 색상
                dayTextColor: '#2d4150', // 일 날짜 색상
                textDisabledColor: '#b6c1cd', // 다른달 일 나오는 부분 색깔
                arrowColor: '#ffffff', // 화살표색깔(지금은 흰색이라서 안보임)
                // dotColor: '#009688'
                }}
            />
            </View>
            </View>
        </View> 
    </ImageBackground>
    
  )
}
const $backgroundImage : ViewStyle = {
  backgroundColor:"#F6E4E4",
}

const $profileBox:  ViewStyle = {
backgroundColor: 'FFFEFE', // #FFFFFF
borderRadius: 53,
height:'100%',
marginTop: 77,
}
const $weeklyreportImage: ViewStyle={
  flexDirection: 'row',
  marginTop: 15,
  marginLeft: 335,
}
const $calendar : ViewStyle = {
  borderRadius: 30,
  borderWidth: 5,
  borderColor: 'white',
  height: 350,
  // padding: 10,
}
const $weekcalendargroup: ViewStyle={
  // alignContent: 'center',
  // flexDirection: 'row'
}