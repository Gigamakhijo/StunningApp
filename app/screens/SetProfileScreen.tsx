/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { ImageBackground, View, ViewStyle, Image, ImageStyle, TextStyle, Pressable } from "react-native"
import React, { useEffect, useState } from "react"
import { Button, TextField, Text, Screen } from "app/components"
import { useStores } from "app/models"
import { spacing } from "app/theme"

export const SetProfileScreen = (_props) => {
  const [userId, setUserId] = useState("")
  const { navigation } = _props

  const BackGround = require("../../assets/images/app-background.png")
  const Profile = require("../../assets/images/app-basic-profile.png")
  const AppBar = require("../../assets/icons/app-bar.png")

  useEffect(() => {
    return () => {
      setUserId("")
    }
  }, [])

  const {
    authenticationStore: { logout },
  } = useStores()

  function goHome() {
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
    <Screen
      preset="auto"
    >    
      <ImageBackground source={BackGround} style={$backgroundImage}>
        <View style={$profileBox}>
          <View style={$imageAlign}>
            <Image source={Profile} style={$image1Align} />
            <Image source={Profile} style={$image2Align} />
          </View>
          <Text preset= "bold" style={$textStylePhoto}> {"사진 변경하기"} 
          </Text>
          <View style={$HorizonLine}></View>
          <View style={$profileAlign}>
            <Text style={$profiletextStyle}>{"아이디"}</Text>
            <TextField
                 inputWrapperStyle={$textField}
                 value={userId}
                 onChangeText={setUserId}
                 placeholder="아이디를 입력하세요 " // text 입력 전 기본 문자
                 autoCapitalize="none"
                 placeholderTextColor={"#8C8C8C"}
                 placeholderTxOptions={$placeholdertextStyle}
            />
          </View>

        </View>
      </ImageBackground>
    </Screen>
    // <ImageBackground source={BackGround} style={$backgroundImage}>
    //   <View style={$profileBox}>
    //     <View style={$screenContentContainer}>
    //       <View style={$profileImage}>
    //         <Image source={Profile} />
    //         <Image source={Profile} />
    //       </View>
    //       <View style={$appBar}>
    //         <Image source={AppBar} />
    //       </View>
    //       {/* textfield view start */}
    //       <View>
    //         <View style={$textFieldBox}>
    //           <View>
    //             <Text preset="bold">{"아이디"}</Text>
    //           </View>
    //           <TextField
    //             inputWrapperStyle={$textField}
    //             value={userId}
    //             onChangeText={setUserId}
    //             placeholder="아이디를 입력하세요 " // text 입력 전 기본 문자
    //             autoCapitalize="none"
    //             placeholderTextColor={"#8C8C8C"}
    //           />
    //         </View>
    //         <View style={$textFieldBox}>
    //           <Text preset="bold">{"성별"}</Text>
    //           <View style={$alignGenderButton}>
    //             {selectGender(0)}
    //             {selectGender2(1)}
    //           </View>
    //         </View>
    //         <View style={$textFieldBox}>
    //           <View>
    //             <Text preset="bold">{"이메일"}</Text>
    //           </View>
    //           <TextField
    //             inputWrapperStyle={$textField}
    //             placeholder="이메일" // text 입력 전 기본 문자
    //             autoCapitalize="none"
    //             placeholderTextColor={"#8C8C8C"}
    //           />
    //         </View>
    //         <View style={$textFieldBox}>
    //           <View>
    //             <Text preset="bold">{"전화번호"}</Text>
    //           </View>
    //           <TextField
    //             inputWrapperStyle={$textField}
    //             placeholder="전화번호" // text 입력 전 기본 문자
    //             autoCapitalize="none"
    //             placeholderTextColor={"#8C8C8C"}
    //           />
    //         </View>
    //         <View style={$appBar}>
    //           <Image source={AppBar} />
    //         </View>
    //       </View>
    //       {/* textfield view end */}
    //       <View style={$buttonAlign}>
    //         <Button text="취소" style={$tapButtonBack} onPress={logout} />
    //         <Button text="완료" style={$tapButtonSignup} onPress={goHome} />
    //       </View>
    //     </View>
    //   </View>
    // </ImageBackground>
  )
}


const $appBar: ViewStyle = {
  alignItems: "center",
}

const $alignGenderButton: ViewStyle = {
  justifyContent: "space-between",
  flexDirection: "row",
  backgroundColor: "#FFFFFF",
  marginRight: 90,
}


const $imageAlign: ImageStyle = {
  alignSelf: "auto",
 justifyContent: "space-between",
 flexDirection: "row",
 marginTop: 29,
 marginBottom: 8,
}

const $image1Align: ImageStyle = {
   marginLeft: 74,
}

const $image2Align: ImageStyle = {
  // marginLeft: 63,
  marginRight: 74,
}

const $profileAlign: ViewStyle = {
  flexDirection: "row",
  alignItems: "baseline",
  justifyContent: "space-between",
  marginTop: 25,
}

const $profileBox: ViewStyle = {
  backgroundColor: "#FFFEFE",
  borderTopLeftRadius: 53,
  borderTopRightRadius: 53,
  height: "100%",
  marginTop: 75.13,
}

const $backgroundImage: ViewStyle = {
  width: '100%',
  height: '100%',
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

const $profiletextStyle: TextStyle = {
  fontSize: 15,
  fontWeight: "bold",
  marginLeft: 37,
  marginRight: 10,
}

const $placeholdertextStyle: TextStyle = {
  fontSize: 15,
  fontWeight: "bold",
}
const $textStylePhoto: TextStyle ={
  fontSize: 15,
  fontWeight: "100",
  marginLeft: 230,
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
  // marginLeft: 10,
  // justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  width: 220,
  height: 40,
  borderColor: "#FFFFFF",
}



const $HorizonLine: ViewStyle = {
        backgroundColor: "#ECECEC",
        height: 3,
        width: 391,
        marginTop: 9,
        // background: "#fff", 
       //  padding: "0 10px",
}
