/* eslint-disable react-native/no-color-literals */
import { TextField } from 'app/components';
import { spacing } from 'app/theme';
import { Button,Text} from "../components" // 여기 주의하세용.. 리액트에서 가져오는게 아니라 컴포넌트에 있는 버튼입니다.
import { View,ViewStyle,StyleSheet,Image, ImageBackground} from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = require("../../assets/images/app-basic-profile.png")
const BackGround = require("../../assets/images/app-background.png")

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

    axios.post('http://127.0.0.1:8000/signup', {
      email: userEmail,
      password: userPassword
    })
    .then(function (response) {
      if(response.data === false)
        alert('이미 등록된 유저입니다.')
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
      <ImageBackground source={BackGround} style = {styles.backgroundimage}>
        <View style={$screenContentContainer}>
         <Text preset = "bold" size = 'xxl' style = {styles.text}>
          {"STUNNING"}
        </Text>
        <View>
          <View style = {$profileimage}>
            <Image source={Profile} style = {styles.image}/>
          </View>
        </View>
        <View>
          <Text>
            {'email'}
          </Text>
          <TextField 
            value={userEmail}
            onChangeText={setUserEmail}
            placeholder="이메일을 입력하세요." // text 입력 전 기본 문구
            containerStyle={$textField}
            autoCapitalize="none" 
          />
          <Text>
            {'password'}
           </Text>
         <TextField 
          value={userPassword}
          onChangeText={setUserPassword}
          placeholder="8자 이상 입력하세요."
          containerStyle={$textField}
          autoCapitalize="none"
         />
        </View>
        <View  style = {styles.fixToText} >
          <Button
            testID="Back-Button"
            text ="취소"
            style={$tapButtonBack}
            preset="reversed"
            onPress={returnLogin}
          />
          <Button
           testID="SignUp-button"
           text = "완료"
           style={$tapButtonSignup}
           preset= "reversed"
           onPress={registerUser}
          />
        </View>
      </View> 
      </ImageBackground>
    );
  };
const styles = StyleSheet.create({
    backgroundimage: {
      backgroundColor:"#F6E4E4",
      height: '100%',
      width: '100%',
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    image: {
      height: 90,
      width: 90,
    },
    text: {
      marginTop: 50,
    }
  },
);
  
const $screenContentContainer: ViewStyle = {
     paddingVertical: spacing.xl,
     paddingHorizontal: spacing.xl,
     justifyContent: "center",
    
}
const $profileimage: ViewStyle = {
  marginTop: '40%',
  marginBottom: '10%',
  alignItems: 'center',
}

const $textField: ViewStyle = {
  marginTop: 5,
  marginBottom: 5,
}

const $tapButtonSignup: ViewStyle = {
  borderRadius: 10,
  backgroundColor: "#1DB43E",
  width: "40%",
  top: '410%',
}
const $tapButtonBack: ViewStyle = {
  // marginTop: spacing.md,
  borderRadius: 10,
  backgroundColor: "#D63D3D",
  width: '40%',
  top: '410%',
}


