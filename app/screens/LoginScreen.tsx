import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle, ViewStyle, ImageBackground } from "react-native"
import { Button, Screen, TextField } from "../components"
import { AppStackScreenProps } from "../navigators"
import { spacing } from "../theme"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  const { navigation } = _props

  const backgroundImage = require("../../assets/images/app-background.png")

  const error = false

  function login() {
    navigation.navigate("Main")
  }

  function signup() {
    navigation.navigate("SignUp")
  }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
      backgroundColor="#FFFEFE"
    >
      <ImageBackground source={backgroundImage} style={$backgroundImage}></ImageBackground>

      <TextField
        placeholder="이메일을 입력하세요."
        inputWrapperStyle={$emailtextField}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
        status={error ? "error" : undefined}
      />

      <TextField
        placeholder="비밀번호를 입력하세요."
        inputWrapperStyle={$passwordtextField}
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        secureTextEntry={true}
        // labelTx="loginScreen.passwordFieldLabel"
        onSubmitEditing={login}
      />

      <Button
        testID="signin-button"
        style={$signInButton}
        text="회원가입 하기"
        textStyle={$signInText}
        preset="reversed"
        onPress={signup}
        pressedTextStyle={$signInText}
        pressedStyle={$signInButton}
      />

      <Button
        testID="login-button"
        style={$loginButton}
        text="로그인"
        textStyle={$loginText}
        preset="reversed"
        onPress={login}
        pressedTextStyle={$pressedloginText}
        pressedStyle={$pressedloginButton}
      />
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
}

const $emailtextField: ViewStyle = {
  width: 300,
  height: 45,
  marginTop: 400,
  marginBottom: 10,
  marginLeft: 20,
  backgroundColor: "#FFFFFF",
}

const $passwordtextField: ViewStyle = {
  width: 300,
  height: 45,
  marginBottom: 10,
  marginLeft: 20,
  backgroundColor: "#FFFFFF",
}

const $pressedloginButton: ViewStyle = {
  marginBottom: spacing.xs,
  marginLeft: 20,
  marginRight: 20,
  flexDirection: "column",
  borderRadius: 10,
  alignItems: "center",
  width: 300,
  height: 40,
  backgroundColor: "#787878",
}

const $loginButton: ViewStyle = {
  marginBottom: spacing.xs,
  marginLeft: 20,
  marginRight: 20,
  flexDirection: "column",
  borderRadius: 10,
  alignItems: "center",
  width: 300,
  height: 40,
  backgroundColor: "#E1E1E1",
}

const $signInButton: ViewStyle = {
  marginBottom: 5,
  marginLeft: 210,
  flexDirection: "column",
  borderRadius: 10,
  width: 115,
  minHeight: 1,
  paddingVertical: 2,
  backgroundColor: "#FFFEFE",
}

const $loginText: TextStyle = {
  color: "#000000",
}

const $signInText: TextStyle = {
  color: "#DD8181",
}

const $pressedloginText: TextStyle = {
  color: "#FFFFFF",
}

const $backgroundImage: ViewStyle = {
  backgroundColor: "#F6E4E4",
}
