/* eslint-disable react/react-in-jsx-scope */
import { TextField } from 'app/components';
import { spacing } from 'app/theme';
import { Button, Screen, Text} from "../components" // 여기 주의하세용.. 리액트에서 가져오는게 아니라 컴포넌트에 있는 버튼입니다.
import { View,ViewStyle,StyleSheet,Image} from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Profile = require("../../assets/images/app-basic-profile.png")

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
      <Screen preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >

      <Text preset = "bold" size = 'xxl'>
        {"Stunning"}
        {'\n'}
        {'\n'}
        {'\n'}
      </Text>
      <View>
        <View style = {$profileimage}>
          <Image source={Profile} style = {styles.image}/>
        </View>
      </View>
        <View>
          <Text >
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
        
        <View style = {styles.fixToText}>
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
      </Screen>
    );
  };
  
const $screenContentContainer: ViewStyle = {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xl,
    // backgroundColor: '#FFFFFF'
}

const $profileimage: ViewStyle = {
  alignItems: 'center',
}

const $textField: ViewStyle = {
    paddingVertical: spacing.xs,
    marginTop: spacing.xxxs,
    width: '100%',
    display: "flex",
}

const $tapButtonSignup: ViewStyle = {
    marginTop: spacing.md,
    borderRadius: 10,
    backgroundColor: "#1DB43E",
    width: "40%",
    top: '300%',
}

const $tapButtonBack: ViewStyle = {
  marginTop: spacing.md,
  borderRadius: 10,
  backgroundColor: "#D63D3D",
  width: '40%',
  top: '300%',
}

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 110,
    width: 110,
  },
},);

