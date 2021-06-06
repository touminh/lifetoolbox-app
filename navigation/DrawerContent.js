import React from 'react';
import { View, StyleSheet } from 'react-native';
import {AuthContext} from '../components/Context';
import AsyncStorage from '@react-native-community/async-storage';
import {
    Avatar,
    Title,
    Caption,
    Drawer
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const DrawerContent=(props)=> {
    const {signOut}=React.useContext(AuthContext);
    React.useEffect(()=>{
        let user=null;
        setTimeout(async() => {
            try{
                user=await AsyncStorage.getItem("userData");
                console.log(user);
            }catch(e){
                console.log(e);
            }
        }, 3000);
    },[]);
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://scontent.fpnh11-1.fna.fbcdn.net/v/t1.0-9/123301386_1162476810814387_6972418280920342942_o.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_eui2=AeFnLHN0j5W-PoCaQU8ZdNpTJhnqyHvugswmGerIe-6CzNyeOv5ohTj7IHCjo4qZYLWnpriSwPpfilSokaLBteB7&_nc_ohc=thIpILfPBeoAX_PcC3e&_nc_ht=scontent.fpnh11-1.fna&oh=88d6f0c7d2b8b9950b477411e6b0ce39&oe=5FEA63C9'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>MET TOUMINH</Title>
                                <Caption style={styles.caption}>Student</Caption>
                            </View>
                        </View>

        
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color="#6576FF"
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color="#6576FF"
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('PersonalInfo')}}
                        />
                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color="#6576FF"
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Setting')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color="#6576FF"
                                size={size}
                                />
                            )}
                            label="Help"
                            onPress={() => {props.navigation.navigate('Help')}}
                        />
                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color="#6576FF"
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color:'#6576FF',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
export default DrawerContent;