import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import ResetPasswordScreen from './ResetPassword';
import ForgotPassword from './ForgotPassword';
import Register from './Register';
import PersonalInfo from './PersonalInfo';
import TwoFactor from './TwoFactor';


const RootStackNavigator=({navigation})=>{
    const RootStack=createStackNavigator();
    return(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="LoginScreen" component={LoginScreen}/>
        <RootStack.Screen name="ForgotPasswordScreen" component={ForgotPassword}/>
        <RootStack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
        <RootStack.Screen name="Register" component={Register}/>
        <RootStack.Screen name="PersonalInfo" component={PersonalInfo}/>
        <RootStack.Screen name="TwoFactor" component={TwoFactor}/>
    </RootStack.Navigator>
    );
}
export default RootStackNavigator;
