import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View,Image,Toast } from "react-native";
import { AuthContext } from '../../components/Context';
import { Content, Form, Item, Input, Label,Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({route,navigation}) => {
  const {VerifyTwoFactor}=React.useContext(AuthContext);
  const image = { uri: "https://academy.lifetoolbox.me/img/login-bg.jpg" };
const logo={uri:"https://academy.lifetoolbox.me/images/logo.png"};
const [code,setCode]=React.useState(null);

  return(
  <View style={styles.container}>
    
    <ImageBackground source={image} style={styles.image}>
      
      <Content contentContainerStyle={{flex:1,justifyContent:'center',paddingHorizontal:20}}>
        
        <View style={{alignItems:'center'}}>
          <Image source={logo} style={{resizeMode:'stretch',width:160,height:50}}/>
          <Text style={{color:'#fff',fontSize:25,marginVertical:10}}>Check Point</Text>
        </View>
       
      
          <Form>
           
            <Item floatingLabel last style={{marginVertical:10,paddingVertical:5}}>
              <Label style={{color:'#ffffff'}}>Two Factor Code</Label>
              <Input style={{color:'#fff'}} autoCapitalize='none' keyboardType="number-pad" onChangeText={
              e=>{
                setCode(e);
              }
              }/>
            </Item>
            
            <Button block info style={{marginVertical:10}} onPress={
                ()=>{
                  const fd=new FormData();
                  fd.append("code",code);
                  fd.append("email",route.params.email);
                  VerifyTwoFactor(fd);
                }
            }>
              <Text style={{color:'#ffffff',fontSize:16}}>Verify</Text>
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
);}

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