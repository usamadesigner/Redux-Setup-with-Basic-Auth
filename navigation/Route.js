import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { useSelector,connect, shallowEqual} from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { ActivityIndicator,View } from 'react-native';
import {GetData} from '../redux/auth/action.auth';
import {Authorization,isLoadingSelector} from '../redux/auth/selector.auth'
import Colors from '../constants/Color';

const Route = ({GetDataFunc}) => {
const Auth=useSelector(Authorization,shallowEqual)
const loading =useSelector(isLoadingSelector,shallowEqual);

  React.useEffect(() => {
    const app=GetDataFunc();
return()=>{
app;
}
  }, []);
  if(loading)
  {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:Colors.BG}}>
        <ActivityIndicator size={'large'}/>
      </View>
    )
  }
  return (

    <NavigationContainer>
      {Auth===false?(
        <AuthStack/>
      ):(
        <MainStack/>
      )}
    </NavigationContainer>

  
  );
};


const mapDispatchToProps = dispatch => {
  return {
    // dispatching Login action to update State
    GetDataFunc: event => dispatch(GetData(event)),
  };
};

export default connect(null, mapDispatchToProps)(Route);