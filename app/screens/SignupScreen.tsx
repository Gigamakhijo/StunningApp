/* eslint-disable react/react-in-jsx-scope */
import { TextField } from 'app/components';
import { spacing } from 'app/theme';
import { Button} from "../components" // 여기 주의하세용.. 리액트에서 가져오는게 아니라 컴포넌트에 있는 버튼입니다.
import { View,ViewStyle } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const SignupScreen = (_props) => {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const { navigation } = _props

  useEffect(() => {
  setUserEmail("leewoorim@naver.com")
  setUserPassword("leewoorim")

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
        console.log("이미 있는 유저");
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
      <View>
        <TextField 
          label= "SignUp Screen"
          value={userEmail}
          onChangeText={setUserEmail}
          containerStyle={$textField}
          autoCapitalize="none"
          placeholder="enter the email"
        />
        <TextField 
          value={userPassword}
          onChangeText={setUserPassword}
          containerStyle={$textField}
          autoCapitalize="none"
          placeholder="enter the password"
        />
        <Button
          testID="SignUp-button"
          text = "Sign Up"
          style={$tapButton}
          preset="reversed"
          onPress={registerUser}
        />
        <Button
          testID="Back-Button"
          text ="Back"
          style={$tapButton}
          preset="reversed"
          onPress={returnLogin}
        />
      </View>
    );
  };



const $textField: ViewStyle = {
    marginBottom: spacing.lg,
  }
const $tapButton: ViewStyle = {
    marginTop: spacing.xs,
}
