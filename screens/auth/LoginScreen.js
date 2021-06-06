import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { Content, Item, Input, Label, Button, Toast } from 'native-base';
import { AuthContext } from '../../components/Context';
const image = { uri: "https://academy.lifetoolbox.me/img/login-bg.jpg" };
const logo = { uri: "https://academy.lifetoolbox.me/images/logo.png" };

const LoginScreen = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
          <View style={{ alignItems: 'center' }}>
            <Image source={logo} style={{ resizeMode: 'stretch', width: 160, height: 50 }} />
            <Text style={{ color: '#fff', fontSize: 25, marginVertical: 10 }}>Sign-In</Text>
          </View>
          
            <Item floatingLabel last style={{ marginVertical: 10, paddingVertical: 5 }}>
              <Label style={{ color: '#ffffff' }}>E-Mail Address</Label>
              <Input style={{ color: '#fff' }} autoCapitalize='none' value={email}  keyboardType="email-address" onChangeText={e => {
                setEmail(e);
              }} />
            </Item>
            <Item floatingLabel last style={{ marginVertical: 10, paddingVertical: 5 }}>
              <Label style={{ color: '#ffffff' }}>Password</Label>
              <Input secureTextEntry={true} autoCapitalize='none' style={{ color: '#fff' }}
                value={password}
                onChangeText={
                  e => { setPassword(e); }
                } />
            </Item>
            <Text style={{ color: '#fff', textAlign: 'right', marginVertical: 10 }} onPress={
              () => { navigation.navigate("ForgotPasswordScreen") }
            }>Forgot Password</Text>
            <Button block info style={{ marginVertical: 10 }} onPress={
              () => {
                const fd = new FormData();
                fd.append("email", email);
                fd.append("password", password);
                fd.append("device_name","mobile");
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (email === null) {
                  Toast.show({
                    text: "Email can not be empty!",
                    buttonText: "Okay",
                    type: "danger"
                  });
                } else if (password === null) {
                  Toast.show({
                    text: "Password can not be empty!",
                    buttonText: "Okay",
                    type: "danger"
                  });
                } else if (reg.test(email) === false) {
                  Toast.show({
                    text: "Data is not format!",
                    buttonText: "Okay",
                    type: "danger"
                  });
                } else {
                  signIn(fd)
                }

              }
            }>
              <Text style={{ color: '#ffffff', fontSize: 16 }}>Login</Text>
            </Button>
            <Text style={{ color: '#fff', textAlign: 'right', marginVertical: 10 }} onPress={
              () => { navigation.navigate("Register") }
            }>Not yet have account?Register</Text>
          


        </Content>


      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  formContainer: {

    alignItems: 'center'
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