import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Divider } from 'react-native-elements';
import {  Button, Text } from 'native-base';
const PasswordChange=(props)=>{
    return(<View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }}>
        <Text h4 style={{
            color:'#6576ff',
            marginVertical:50
        }}>Change Your Password</Text>
  <Divider/>
  <View style={{
      width:'100%',
      paddingHorizontal:20,
    
        alignItems:'center',
        justifyContent:'center'
  }}>
        <Input placeholder="Current Password" secureTextEntry={true} leftIcon={
    <Icon
      name='lock'
      size={24}
      color='#6576ff'
      style={{
        paddingRight:10
    }}
    />
  }/>
        <Input placeholder="New Password" secureTextEntry={true} leftIcon={
    <Icon
      name='lock'
      size={24}
      color='#6576ff'
      style={{
        paddingRight:10
    }}
    />
  }/>
        <Input placeholder="Confirm Password" secureTextEntry={true} leftIcon={
    <Icon
      name='lock'
      size={24}
      color='#6576ff'
      style={{
          paddingRight:10
      }}
    />
  }/>
        <Button block style={{backgroundColor:'#6576ff'}}>
            <Text>Info</Text>
          </Button>
        </View>
    
        
    </View>);
}
export default PasswordChange;