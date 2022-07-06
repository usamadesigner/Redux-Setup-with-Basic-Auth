import React ,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Font from '../constants/Font';
import Size from '../constants/Size';
import Colors from '../constants/Color';
import { SignIn } from '../redux/auth/action.auth';

const Login = ({SignInFunc}) => {
	const [email, setEmail] = useState('');
	const [passward, setPassward] = useState('');
  const Login=()=>{
const data={
  'email':email,
'password':passward,
device_token:'zasdcvgtghnkiuhgfde345tewasdfghjkm'
}
console.log(data)
SignInFunc(data);
   
  }
  
  return (
    <SafeAreaView style={style.container}>
      <View style={style.topSection}>
        <Text style={style.title}>Hello Again!</Text>
        <Text style={style.subtitle} textBreakStrategy="highQuality">
          Chance to get your life Better
        </Text>
      </View>
      <View style={style.middleSection}>
        <View style={style.inputView}>
          <TextInput
            style={style.inputBox}
            placeholder="Enter Username"
            placeholderTextColor={Colors.caption}
            value={email}
            onChangeText={(email)=>setEmail(email)}
          />
        </View>
        <View style={style.inputView}>
          <TextInput
            style={style.inputBox}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={Colors.caption}
            value={passward.Password}
            onChangeText={(pass)=>setPassward(pass)}
          />
        </View>
        <TouchableOpacity
          style={style.passwordRecoveryView}
          onPress={() => console.log('poress')}>
          <Text style={style.Tertiarylink}>Recovery Password</Text>
        </TouchableOpacity>
        <View style={style.buttonView}>
          <TouchableOpacity
            style={style.LoginButton}
            onPress={() => Login()}>
            <Text style={[style.Tertiarylink, {color: Colors.BG}]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching Login action to update State
    SignInFunc: event => dispatch(SignIn(event)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Font.SemiBold,
    fontSize: Size.h2,
    color: Colors.Secondary,
  },
  subtitle: {
    fontFamily: Font.Regular,
    fontSize: Size.sub,
    color: Colors.Secondary,
  },
  passwordRecoveryView: {
    alignSelf: 'flex-end',
    marginHorizontal: 24,
  },
  Tertiarylink: {
    fontFamily: Font.Regular,
    fontSize: Size.body,
    color: Colors.Secondary,
  },
  middleSection: {
    flex: 3,
    minWidth: '90%',
    alignItems: 'center',
  },
  inputView: {
    minWidth: '90%',
    alignSelf: 'center',
    marginVertical: 12,
  },
  inputBox: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 1,
    fontFamily: Font.Regular,
    fontSize: Size.body,
    backgroundColor: Colors.BG,
    borderRadius: 16,
    borderColor: Colors.caption,
    color: Colors.Secondary,
    elevation: 2,
  },
  buttonView: {
    width: '90%',
    marginTop: 16,
  },
  LoginButton: {
    backgroundColor: Colors.Primary,
    padding: 16,
    justifyContent: 'center',
    borderRadius: 16,
    alignItems: 'center',
    elevation: 5,
  },
});
