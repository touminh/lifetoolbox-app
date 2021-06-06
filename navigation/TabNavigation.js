
import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import Library from '../screens/course/LibraryScreen';
import MyCourse from '../screens/course/MyCourseScreen';
import PersonalInfo from '../screens/setting/PersonalInfoScreen';
import SecuritySetting from '../screens/setting/SecurityScreen';
import Setting from '../screens/setting/SettingScreen';
import Help from '../screens/help/Index';
import Notification from '../screens/setting/NotificationScreen';
import AccountActivity from '../screens/setting/ActivityLogScreen';
import PasswordChange from '../screens/setting/ChangePasswordScreen';
import PaymentScreen from '../screens/payments/Index';
import ThankYou from '../screens/Informs/ThankYou';


import CourseDetail from '../screens/course/CourseDetailScreen';
import CourseLearning from '../screens/course/CourseLearningScreen';
import Cart from '../screens/course/CartScreen';
import AboutThisCourse from '../screens/course/AboutThisCourseScreen';
import Resources from '../screens/course/ResourcesScreen';
import CourseDetailAnnouncements from '../screens/course/CourseDetailAnnouncementsScreen';


const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const MyCourseStack=createStackNavigator();
const LibraryStack=createStackNavigator();
const TabScreen=()=>{
    return(
<Tab.Navigator
      initialRouteName="Overview"
      activeColor="#ffffff"
      shifting={true}
    >
      <Tab.Screen
        name="Overview"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Overview',
          tabBarColor:'#6576FF',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryStackScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarColor:'#6576FF',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="My Course"
        component={MyCourseStackScreen}
        options={{
          tabBarLabel: 'My Course',
          tabBarColor:'#6576FF',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    );
}
export default TabScreen;
const HomeStackScreen=({navigation})=>{
    return(
      <HomeStack.Navigator screenOptions={{
        title:"Overview",
      headerStyle: {
        backgroundColor: '#6576FF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  
  }}>
    <HomeStack.Screen name="Overview" component={HomeScreen} options={{
      title:"Overview",
      headerLeft:()=>(
        <Icon.Button
          name="ios-menu" 
          size={26} 
          backgroundColor="#6576FF"
          onPress={
            ()=>{
              navigation.openDrawer()
            }
          }
        ></Icon.Button>
      )
    }}/>
    <HomeStack.Screen name="PersonalInfo" component={PersonalInfo} options={{
      title:"Profile",
    }}/>
    <HomeStack.Screen name="PaymentScreen" component={PaymentScreen} options={{
      title:"Payment",
    }}/>
    <HomeStack.Screen name="Notification" component={Notification} options={{
      title:"Notification",
    }}/>
    <HomeStack.Screen name="AccountActivity" component={AccountActivity} options={{
      title:"Account Activity",
    }}/>
    <HomeStack.Screen name="SecuritySetting" component={SecuritySetting} options={{
      title:"Security Setting",
    }}/>
    <HomeStack.Screen name="Setting" component={Setting} options={{
      title:"Setting",
    }}/>
    <HomeStack.Screen name="ThankYou" component={ThankYou} options={{
      title:"Thank You",
    }}/>
     <HomeStack.Screen name="PasswordChange" component={PasswordChange} options={{
      title:"Password Change",
    }}/>
    <HomeStack.Screen name="Help" component={Help} options={{
      title:"Help",
    }}/>


    <HomeStack.Screen name="CourseDetail" component={CourseDetail} options={{
      title:"Course Detail",
    }}/>
    <HomeStack.Screen name="CourseLearning" component={CourseLearning} options={{
      title:"Course Learning",
    }}/>
    <HomeStack.Screen name="Cart" component={Cart} options={{
      title:"Cart",
    }}/>
    <HomeStack.Screen name="AboutThisCourse" component={AboutThisCourse} options={{
      title:"About this Course",
    }}/>
    <HomeStack.Screen name="Resources" component={Resources} options={{
      title:"Resources",
    }}/>

    <HomeStack.Screen name="CourseDetailAnnouncements" component={CourseDetailAnnouncements} options={{
      title:"Announcements",
    }}/>

    
  </HomeStack.Navigator>
    );
    
  }
  const MyCourseStackScreen=({navigation})=>{
    return(<MyCourseStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#6576FF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  
  }}>
    <MyCourseStack.Screen name="MyCourse" component={MyCourse} 
    options={{
      title:"My Course"
      
    }}
    />
  </MyCourseStack.Navigator>);
    
  }
  const LibraryStackScreen=({navigation})=>{
    return(<LibraryStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#6576FF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  
  }}>
    <LibraryStack.Screen name="Library" component={Library} 
    options={{
      title:"Library"
      
    }}
    />
  </LibraryStack.Navigator>);
    
  }