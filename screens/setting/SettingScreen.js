import React from 'react';
import {View} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'

const SettingScreen=({navigation})=>{

  return(
  
  <View>
 
      <ListItem bottomDivider onPress={
        ()=>{navigation.navigate('PersonalInfo')}
      }>
        <Icon name='person' />
        <ListItem.Content>
          <ListItem.Title>Personal Info</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem bottomDivider onPress={
        ()=>{navigation.navigate('Notification')}
      }>
        <Icon name='alarm' />
        <ListItem.Content>
          <ListItem.Title>Notification</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem bottomDivider onPress={
        ()=>{navigation.navigate('AccountActivity');}
      }>
        <Icon name='assessment' />
        <ListItem.Content>
          <ListItem.Title>Account Activity</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem bottomDivider onPress={
        ()=>{navigation.navigate('SecuritySetting');}
      }>
        <Icon name='build' />
        <ListItem.Content>
          <ListItem.Title>Security Setting</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem bottomDivider onPress={
        ()=>{navigation.navigate('PasswordChange');}
      }>
        <Icon name='lock' />
        <ListItem.Content>
          <ListItem.Title>Password Change</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
  
</View>);
}
export default SettingScreen;