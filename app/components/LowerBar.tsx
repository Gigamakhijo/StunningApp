import * as React from "react"
import { StyleProp,ViewStyle,View } from "react-native"
import { observer } from "mobx-react-lite"
// import { colors, typography } from "app/theme"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import { NavigationContainer } from "@react-navigation/native"
import { MainScreen,MyprofileScreen,StudywithmeListScreen,CameraScreen} from "../screens";
import { Icon} from "../components";
export interface LowerBarProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}
const Tab =  createBottomTabNavigator();
/**
 * Describe your component here
 */
 export const LowerBar = observer(function LowerBar(props: LowerBarProps) {
  const { style } = props
  const $styles = [$container, style]
   // Bottom Tab 생성 및 커스텀
   return (
    <View style={$styles}>
        <Tab.Navigator
        initialRouteName="Main"
          screenOptions={{
            tabBarActiveTintColor: "#e91e63",
          }}

        >
          <Tab.Screen
           name="Main" 
           component={MainScreen}
           options={{
            tabBarIcon: ({color, size}) => (
              <Icon icon="calendar" color={color} size={size} />
            )
           }}
            />
          <Tab.Screen 
          name="Camera" 
          component={CameraScreen}
          options={{
            tabBarIcon: ({color, size}) => (
            <Icon icon="camera" color={color} size={size} />
            )
           }}
           />
          <Tab.Screen 
          name="StdwmList"
          component={StudywithmeListScreen}
          options={{
            tabBarIcon: ({color, size}) => (
            <Icon icon="stdwmList" color={color} size={size} />
            )
            }}
            />
          <Tab.Screen
          name="MyProfile" 
          component={MyprofileScreen}
          options={{
            tabBarIcon: ({color, size}) => (
            <Icon icon="myprofile" color={color} size={size} />
            )
            }}
          />
        </Tab.Navigator>
     </View>
   );
})

const $container: ViewStyle = {
  justifyContent: "center",
}

