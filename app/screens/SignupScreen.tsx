import { observer } from "mobx-react-lite"
import { TextField } from "app/components"
import { spacing } from "app/theme"
import { Screen, Button, Text } from "../components"
import { View, ViewStyle, Image, ImageBackground } from "react-native"
import { AppStackScreenProps } from "../navigators"
import React, { FC } from "react"

interface SignupScreenProps extends AppStackScreenProps<"SignUp"> {}

export const SignupScreen: FC<SignupScreenProps> = observer(function SignupScreen(_props) {
  const { navigation } = _props

  const Profile = require("../../assets/images/app-basic-profile.png")
  const BackGround = require("../../assets/images/app-background.png")
  const ProfileLock = require("../../assets/icons/app-lock-Icon.png")
  const ProfilePerson = require("../../assets/icons/app-person-icon.png")

  function setUpProfile() {
    navigation.navigate("SetProfile")
  }

  return (
    <Screen preset="scroll">
      <ImageBackground source={BackGround} style={$backgroundImage}>
        <View style={$profileBox}>
          <View style={$screenContentContainer}>
            <Text preset="bold" size="xl" style={$logoText}>
              {"STUNNING"}
            </Text>
            <View>
              <View style={$profileImage}>
                <Image source={Profile} />
              </View>
            </View>
            <View>
              <View style={$textFieldBox}>
                <View style={$personIcon}>
                  <Image source={ProfilePerson} />
                </View>
                <TextField
                  placeholder="이메일을 입력하세요." // text 입력 전 기본 문구
                  inputWrapperStyle={$emailTextField}
                  autoCapitalize="none"
                  placeholderTextColor={"#8C8C8C"}
                />
              </View>
              <View style={$textFieldBox}>
                <View style={$lockIcon}>
                  <Image source={ProfileLock} />
                </View>
                <TextField
                  placeholder="8자 이상 입력하세요."
                  inputWrapperStyle={$passwordTextField}
                  autoCapitalize="none"
                  placeholderTextColor={"#8C8C8C"}
                />
              </View>
            </View>
            <View style={$buttonField}>
              <Button text="취소" style={$tapButtonBack} onPress={navigation.goBack} />
              <Button text="완료" style={$tapButtonSignup} onPress={setUpProfile} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </Screen>
  )
})

const $backgroundImage: ViewStyle = {
  backgroundColor: "#F6E4E4",
}
const $buttonField: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingVertical: "70%",
}

const $profileBox: ViewStyle = {
  backgroundColor: "#FFFFFF",
  borderRadius: 53,
  height: "100%",
  marginTop: 77,
}

const $textFieldBox: ViewStyle = {
  justifyContent: "space-between",
  flexDirection: "row",
}

const $logoText: ViewStyle = {
  marginTop: 20,
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xl,
  paddingHorizontal: spacing.xl,
  justifyContent: "center",
}

const $profileImage: ViewStyle = {
  marginTop: "45%",
  marginBottom: 35,
  alignItems: "center",
}

const $personIcon: ViewStyle = {
  marginTop: 10,
  alignItems: "center",
  marginRight: 19,
  marginLeft: 4,
  width: 16,
  height: 2,
}
const $lockIcon: ViewStyle = {
  marginTop: 18,
  alignItems: "center",
  marginRight: 15,
  height: 24,
  width: 24,
}

const $emailTextField: ViewStyle = {
  borderRadius: 15,
  backgroundColor: "#FFFFFF",
  width: 290,
}
const $passwordTextField: ViewStyle = {
  marginTop: 10,
  borderRadius: 15,
  backgroundColor: "#FFFFFF",
  width: 290,
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
