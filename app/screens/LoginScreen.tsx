import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { TextInput, TextStyle, ViewStyle, ImageBackground } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import axios from "axios"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  const authPasswordInput = useRef<TextInput>()
  const { navigation } = _props
  const [authPassword, setAuthPassword] = useState("")
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const {
    authenticationStore: { authEmail, setAuthEmail, setAuthToken, validationError },
  } = useStores()
  const BackGround = require("../../assets/images/app-background.png")

  useEffect(() => {
    // Here is where you could fetch credentials from keychain or storage
    // and pre-fill the form fields.
    setAuthEmail("");
    setAuthPassword("")

    // Return a "cleanup" function that React will run when the component unmounts
    return () => {
      setAuthPassword("")
      setAuthEmail("")
    }
  }, [])

  const error = isSubmitted ? validationError : ""

  function login() {
    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount +1)
    setAuthPassword("")
    setAuthEmail("")

    setAuthToken(String(Date.now()))
    // We'll mock this with a fake token.
  }
  // const BackGround = require("../../assets/images/app-background.png")

  const PasswordRightAccessory = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral800}
            containerStyle={props.style}
            size={20}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )
  
  function goSignup() {
    navigation.navigate("Signup");
  }

  return (
    // <ImageBackground source={BackGround} style = {$backgroundImage}></ImageBackground>
    <Screen
      preset="auto"
  
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
      backgroundColor="#FFFEFE"
    >
      {attemptsCount > 2 && <Text tx="loginScreen.hint" size="sm" weight="light" style={$hint} />}

      <ImageBackground source={BackGround} style = {$backgroundImage}></ImageBackground>

      <TextField
        value={authEmail}
        onChangeText={setAuthEmail}
        placeholder="이메일을 입력하세요."
        inputWrapperStyle={$emailtextField}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
        // labelTx="loginScreen.emailFieldLabel"
        helper={error}
        status={error ? "error" : undefined}
        onSubmitEditing={() => authPasswordInput.current?.focus()}
      />

      <TextField
        ref={authPasswordInput}
        value={authPassword}
        onChangeText={setAuthPassword}
        placeholder="비밀번호를 입력하세요."
        inputWrapperStyle={$passwordtextField}
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        secureTextEntry={isAuthPasswordHidden}
        // labelTx="loginScreen.passwordFieldLabel"
        onSubmitEditing={login}
        RightAccessory={PasswordRightAccessory}
      />

      <Button
        testID="signin-button"
        style={$signInButton}
        text ="회원가입 하기"
        textStyle={$signInText}
        
        preset="reversed"
        
        onPress={goSignup}
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

const $hint: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.md,
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
  marginBottom:10,
  marginLeft:20,
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
  marginLeft:210,
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

const $backgroundImage : ViewStyle = {
      backgroundColor:"#F6E4E4",
}

// @demo remove-file