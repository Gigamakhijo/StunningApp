import { observer } from "mobx-react-lite"
import { ImageBackground, View, ViewStyle, Image, TextStyle, Pressable } from "react-native"
import React, { FC, useState } from "react"
import { Button, TextField, Text } from "app/components"
import { AppStackScreenProps } from "../navigators"
import { spacing } from "app/theme"

interface SetProfileScreenProps extends AppStackScreenProps<"SetProfile"> {}

export const SetProfileScreen: FC<SetProfileScreenProps> = observer(function SetProfileScreen(
  _props,
) {
  const { navigation } = _props

  const BackGround = require("../../assets/images/app-background.png")
  const Profile = require("../../assets/images/app-basic-profile.png")
  const AppBar = require("../../assets/icons/app-bar.png")

  function continueToMain() {
    navigation.navigate("Main")
  }
  const [isSelect, setSelect] = useState([false, false])

  const selectGender = (id: number) => {
    return (
      <Pressable
        style={[$tapButtonGender, { borderColor: isSelect[id] ? "#000" : "#D9D8D8" }]}
        onPress={() => {
          setSelect([...isSelect.slice(0, id), !isSelect[id], ...isSelect.slice(id + 1)])
        }}
      >
        <Text style={$textStyleGender}>{"여자"}</Text>
      </Pressable>
    )
  }
  const selectGender2 = (id: number) => {
    return (
      <Pressable
        style={[$tapButtonGender, { borderColor: isSelect[id] ? "#000" : "#D9D8D8" }]}
        onPress={() => {
          setSelect([...isSelect.slice(0, id), !isSelect[id], ...isSelect.slice(id + 1)])
        }}
      >
        <Text style={$textStyleGender}>{"남자"}</Text>
      </Pressable>
    )
  }

  return (
    <ImageBackground source={BackGround} style={$backgroundImage}>
      <View style={$profileBox}>
        <View style={$screenContentContainer}>
          <View style={$profileImage}>
            <Image source={Profile} />
            <Image source={Profile} />
          </View>
          <View style={$appBar}>
            <Image source={AppBar} />
          </View>
          {/* textfield view start */}
          <View>
            <View style={$textFieldBox}>
              <View>
                <Text preset="bold">{"아이디"}</Text>
              </View>
              <TextField
                inputWrapperStyle={$textField}
                placeholder="아이디를 입력하세요 " // text 입력 전 기본 문자
                autoCapitalize="none"
                placeholderTextColor={"#8C8C8C"}
              />
            </View>
            <View style={$textFieldBox}>
              <Text preset="bold">{"성별"}</Text>
              <View style={$alignGenderButton}>
                {selectGender(0)}
                {selectGender2(1)}
              </View>
            </View>
            <View style={$textFieldBox}>
              <View>
                <Text preset="bold">{"이메일"}</Text>
              </View>
              <TextField
                inputWrapperStyle={$textField}
                placeholder="이메일" // text 입력 전 기본 문자
                autoCapitalize="none"
                placeholderTextColor={"#8C8C8C"}
              />
            </View>
            <View style={$textFieldBox}>
              <View>
                <Text preset="bold">{"전화번호"}</Text>
              </View>
              <TextField
                inputWrapperStyle={$textField}
                placeholder="전화번호" // text 입력 전 기본 문자
                autoCapitalize="none"
                placeholderTextColor={"#8C8C8C"}
              />
            </View>
            <View style={$appBar}>
              <Image source={AppBar} />
            </View>
          </View>
          {/* textfield view end */}
          <View style={$buttonAlign}>
            <Button text="취소" style={$tapButtonBack} onPress={navigation.goBack} />
            <Button text="완료" style={$tapButtonSignup} onPress={continueToMain} />
          </View>
        </View>
      </View>
    </ImageBackground>
  )
})

const $appBar: ViewStyle = {
  alignItems: "center",
}

const $alignGenderButton: ViewStyle = {
  justifyContent: "space-between",
  flexDirection: "row",
  backgroundColor: "#FFFFFF",
  marginRight: 90,
}

const $profileImage: ViewStyle = {
  marginTop: "15%",
  marginBottom: "10%",
  paddingHorizontal: 50,
  alignSelf: "auto",
  justifyContent: "space-between",
  flexDirection: "row",
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xl,
  paddingHorizontal: spacing.xl,
  justifyContent: "center",
}

const $profileBox: ViewStyle = {
  backgroundColor: "#FFFFFF",
  borderRadius: 53,
  height: "100%",
  marginTop: 77,
}

const $backgroundImage: ViewStyle = {
  backgroundColor: "#F6E4E4",
}

const $buttonAlign: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: "50%",
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
  shadowOffset: { height: 40, width: 40 },
}

const $tapButtonGender: ViewStyle = {
  width: 80,
  height: 40,
  paddingVertical: 0,
  backgroundColor: "#FFFFFF",
  borderColor: "#D9D8D8",
  borderWidth: 2,
  marginRight: 5,
  marginLeft: 10,
  borderRadius: 4,
  alignItems: "center",
}

const $textStyleGender: TextStyle = {
  fontSize: 15,
  color: "#000",
  marginTop: 6,
}

const $textFieldBox: ViewStyle = {
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  marginTop: 15,
  marginBottom: 15,
}

const $textField: ViewStyle = {
  marginLeft: 10,
  backgroundColor: "#FFFFFF",
  width: 290,
  borderColor: "#FFFFFF",
}
