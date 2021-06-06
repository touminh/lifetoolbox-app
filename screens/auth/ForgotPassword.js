import React from "react";
import { ImageBackground, StyleSheet, Text, View,Image } from "react-native";
import { Content, Form, Item, Input, Label,Button,Toast,Spinner } from 'native-base';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Axios from "axios";
const image = { uri: "https://academy.lifetoolbox.me/img/login-bg.jpg" };
const logo={uri:"https://academy.lifetoolbox.me/images/logo.png"};

const ForGotPasswordScreen = ({navigation}) => {
  const [isLoading,setIsLoading]=React.useState(false);
const [email,setEmail]=React.useState(null);
if(isLoading){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Spinner color='blue' />
    </View>
  )
}
  return(
  <View style={styles.container}>
    
    <ImageBackground source={image} style={styles.image}>
      
      <Content contentContainerStyle={{flex:1,justifyContent:'center',paddingHorizontal:20}}>
        
        <View style={{alignItems:'center'}}>
          <Image source={logo} style={{resizeMode:'stretch',width:160,height:50}}/>
          <Text style={{color:'#fff',fontSize:25,marginVertical:10}}>Forgot Password</Text>
        </View>
       
      
          <Form>
            <Item floatingLabel last style={{marginVertical:10,paddingVertical:5}}>
              <Label style={{color:'#ffffff'}}>E-Mail Address</Label>
              <Input  style={{color:'#fff'}} autoCapitalize='none' value={email} onChangeText={
                e=>{
                  setEmail(e);
                }
              }/>
            </Item>
            <Button block info style={{marginVertical:10}} onPress={
                ()=>{
                  setIsLoading(true);
                  const fd=new FormData();
                  fd.append("email",email);
                  Axios.post('https://academy.lifetoolbox.me/backend/api/forget-password',fd).then(response=>{
                    if(response.data){
                      setIsLoading(false);
                      Toast.show({
                        text: "We are sending instructions to reset your password. If you do not receive an email, check your spam folder or make sure this email address is registered",
                        buttonText: "Okay",
                        type: "success",
                        duration: 4000
                      });
                      navigation.navigate("LoginScreen");
                      
                    }else{
                      setEmail(null);
                      setIsLoading(false);
                      Toast.show({
                        text: response.data.message,
                        buttonText: "Okay",
                        type: "danger",
                        duration: 4000
                      });
                      
                    }
                  })
                }
              }> 
              <Text style={{color:'#ffffff',fontSize:16}} >Reset</Text>
            </Button>
          </Form>
          
          <Button block transparent onPress={
            ()=>{navigation.navigate("LoginScreen")}
          }>
            <Icon name="arrow-left" style={{fontSize:25,color:'#fff'}}/>
            <Text style={{fontSize:20,color:'#fff'}}>Back</Text>
          </Button>
          
            
         
          
        </Content>
      
    
    </ImageBackground>
  </View>
)};

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

export default ForGotPasswordScreen;