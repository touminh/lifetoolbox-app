import React from "react";
import { ImageBackground, StyleSheet, Text, View,Image } from "react-native";
import { Content, Form, Item, Input, Label,Button } from 'native-base';
import {AuthContext} from '../../components/Context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const image = { uri: "https://academy.lifetoolbox.me/img/login-bg.jpg" };
const logo={uri:"https://academy.lifetoolbox.me/images/logo.png"};
const LoginScreen = ({navigation}) =>
{
  const {signUp}=React.useContext(AuthContext);
  return(
    <View style={styles.container}>
      
      <ImageBackground source={image} style={styles.image}>
        
        <Content contentContainerStyle={{flex:1,justifyContent:'center',paddingHorizontal:20}}>
          
          <View style={{alignItems:'center'}}>
            <Image source={logo} style={{resizeMode:'stretch',width:160,height:50}}/>
            <Text style={{color:'#fff',fontSize:25,marginVertical:10}}>Personal Information</Text>
          </View>
            <Form>
              <Item floatingLabel last style={{marginVertical:10,paddingVertical:5}}>
                <Label style={{color:'#ffffff'}}>Full Name</Label>
                <Input style={{color:'#fff'}}/>
              </Item>
              <Item floatingLabel last style={{marginVertical:10,paddingVertical:5}}>
                <Label style={{color:'#ffffff'}}>Phone Number</Label>
                <Input style={{color:'#fff'}}/>
              </Item>
              <Item floatingLabel last style={{marginVertical:10,paddingVertical:5}}>
                <Label style={{color:'#ffffff'}}>Address</Label>
                <Input style={{color:'#fff'}}/>
              </Item>
              <Item floatingLabel last style={{marginVertical:10,paddingVertical:5}}>
                <Label style={{color:'#ffffff'}}>Country</Label>
                <Input style={{color:'#fff'}}/>
              </Item>
             
              <Button block info style={{marginVertical:10}} onPress={
                  ()=>{
                    signUp()
                  }
              }>
                <Text style={{color:'#ffffff',fontSize:16}}>Sign Up</Text>
              </Button>
            </Form>
            <Button block transparent onPress={
              ()=>{navigation.navigate("Register")}
            }>
              <Icon name="arrow-left" style={{fontSize:25,color:'#fff'}}/>
              <Text style={{fontSize:20,color:'#fff'}}>Back</Text>
            </Button>
              
           
            
          </Content>
        
      
      </ImageBackground>
    </View>
  );
          }
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    formContainer:{
     
     alignItems:'center'
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
    }
  });


export default LoginScreen;