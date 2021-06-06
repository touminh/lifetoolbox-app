import React, { useState, useEffect } from 'react';
import {  Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {Button,Text,Input} from 'native-base';

const ImagePickerData=()=> {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ width:'100%',paddingTop:10,alignItems: 'center', justifyContent: 'center' ,flexDirection:'row'}}>
        
      <Button small bordered style={{borderColor:'#6576ff',alignItems:'center',justifyContent:'center'}} onPress={pickImage}>
          <Text style={{color:'#6576ff'}}>Input Reciept</Text>
      </Button>

      {image && <Image source={{ uri: image }} style={{ width: 200, height: 28,marginHorizontal:5 }} />}
      
    </View>
  );
}
export default ImagePickerData;