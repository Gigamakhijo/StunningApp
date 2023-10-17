import { TextField } from 'app/components';
import { spacing } from 'app/theme';
import { Button} from "../components" // 여기 주의하세용.. 리액트에서 가져오는게 아니라 컴포넌트에 있는 버튼입니다.
import { View,ViewStyle } from 'react-native';

export const SignupScreen = (_props) => {
  const { navigation } = _props
  function returnLogin() {
    navigation.navigate("Login");
  }
  function goMain() {
    navigation.navigate("Main");
  }
    return (
      <View>
        <TextField 
          label= "SignUp Screen"
          containerStyle={$textField}
          autoCapitalize="none"
          placeholder="enter the email"
        />
        <TextField 
          containerStyle={$textField}
          autoCapitalize="none"
          placeholder="enter the password"
        />
        <Button
          testID="SignUp-button"
          text = "Sign Up"
          style={$tapButton}
          preset="reversed"
          onPress={returnLogin}
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
