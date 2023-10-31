/* eslint-disable react-native/no-color-literals */
import { TextField } from 'app/components';
import { spacing } from 'app/theme';
import { Button,Text} from "../components" // 여기 주의하세용.. 리액트에서 가져오는게 아니라 컴포넌트에 있는 버튼입니다.
import { View,ViewStyle, Image, ImageBackground, Alert} from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = require("../../assets/images/app-basic-profile.png")
const BackGround = require("../../assets/images/app-background.png")
const ProfileLock = require("../../assets/icons/app-lock-Icon.png")
const ProfilePerson = require("../../assets/icons/app-person-icon.png")

export const SignupScreen = (_props) => {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const { navigation } = _props

  useEffect(() => {
  setUserEmail("")
  setUserPassword("")

  return () => {
    setUserEmail("")
    setUserPassword("")
  }
  },[])
  
  function registerUser() {
    // console.log(userEmail);
    // console.log(userPassword);

    axios.post('http://127.0.0.1:8080/signup', {
      email: userEmail,
      password: userPassword
    })
    .then(function (response) {
      if(response.data === false)
        Alert.alert('이미 등록된 유저입니다.')
      else{
        console.log("등록완.") // 콘솔 처리 돼 있는 부분은 프론트에서 수정해서 사용자한테 띄워주시면 됩니다. 
        navigation.navigate("Login");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  function returnLogin(){
    navigation.navigate("Login");    
  }
    
  return (
      <ImageBackground source={BackGround} style = {$backgroundImage}>
        <View style = {$profileBox}>
          <View style={$screenContentContainer}>
            <Text preset = "bold" size = 'xl' style = {$logoText}>
              {"STUNNING"}
            </Text>
            <View>
              <View style = {$profileImage}>
                <Image source={Profile} />
              </View>
            </View>
            <View>
            <View style = {$textFieldBox}>
            <View style = {$personIcon}>
            <Image source={ProfilePerson} />
            </View>
            <TextField 
              value={userEmail}
              onChangeText={setUserEmail}
              placeholder="이메일을 입력하세요." // text 입력 전 기본 문구
              inputWrapperStyle={$emailTextField}
              autoCapitalize="none" 
              placeholderTextColor={"#8C8C8C"}
            />
            </View>
            <View style = {$textFieldBox}>
            <View style = {$lockIcon}>
            <Image source={ProfileLock}/>
            </View>
            <TextField 
              value={userPassword}
              onChangeText={setUserPassword}
              placeholder="8자 이상 입력하세요."
              inputWrapperStyle={$passwordTextField}
              autoCapitalize="none"
              placeholderTextColor={"#8C8C8C"}
            />
            </View>
            </View>
              <View  style = {$buttonField} >
                <Button
                  text ="취소"
                  style={$tapButtonBack}
                  onPress={returnLogin}
                />
                <Button
                  text = "완료"
                  style={$tapButtonSignup} 
                  onPress={registerUser}
                 />
              </View>
          </View> 
        </View>
    </ImageBackground>
  );
};

const $backgroundImage : ViewStyle = {
      backgroundColor:"#F6E4E4",
}
const $buttonField : ViewStyle =  {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: "70%",
}

const $profileBox:  ViewStyle = {
      backgroundColor: '#FFFFFF',
      borderRadius: 53,
      height:'100%',
      marginTop: 77,   
}

const $textFieldBox: ViewStyle = {
      justifyContent: 'space-between',
      flexDirection: 'row',
}

const $logoText: ViewStyle = {
      marginTop: 20,
}
  
const $screenContentContainer: ViewStyle = {
     paddingVertical: spacing.xl,
     paddingHorizontal: spacing.xl,
     justifyContent: "center",    
}

const $profileImage: ViewStyle =  {
  marginTop: '45%',
  marginBottom: 35,
  alignItems: 'center',
}

const $personIcon: ViewStyle =  {
  marginTop: 10,
  alignItems: 'center',
  marginRight: 19,
  marginLeft: 4,
  width:16,
  height:2,
}
const $lockIcon: ViewStyle =  {
  marginTop: 18,
  alignItems: 'center',
  marginRight: 15,
  height:24,
  width:24,
}

const $emailTextField: ViewStyle = {
  borderRadius: 15,
  backgroundColor: "#FFFFFF",
  width: 290
}
const $passwordTextField: ViewStyle = {
  marginTop: 10,
  borderRadius: 15,
  backgroundColor: "#FFFFFF",
  width: 290
}
const $tapButtonSignup: ViewStyle = {
  borderRadius: 10,
  backgroundColor: "#E7E6E6",
  width: 140,
  height: 56,
  borderColor: "#E7E6E6",
}
const $tapButtonBack: ViewStyle = {
  borderRadius: 10,
  backgroundColor: "#F3DDDD",
  width: 140,
  height: 56,
  borderColor: "#F3DDDD",
}


