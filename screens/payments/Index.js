import * as React from 'react';
import {View,ScrollView,StyleSheet,Image} from 'react-native';
import {Container, Header, Tab, Tabs, TabHeading,  Text,Subtitle} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ManualPayment from './ManualPaymentScreen';
import CreditPayment from './CreditPaymentScreen';
const courseImage={uri:"https://mk0digitallearn7ttjx.kinstacdn.com/wp-content/uploads/2019/03/Online-courses-1000x600.jpg"};
const Index =props=>{
return(
    <Container>
        <View style={{padding:10,width:'100%',backgroundColor:'#d6d6d6',alignItems:'center',flexDirection:'row'}}>
        
            <Image source={courseImage} style={{padding: 10,resizeMode:'stretch',width:120,height:65,borderRadius:10}}/>
            <View style={{alignSelf:'flex-start'}}>
                <Text style={styles.title}>Learn React Native With Redux</Text>
                <View style={{flexDirection:'row',color:'#6576ff'}}>
                    <Icon name="star" style={styles.start}/>
                    <Icon name="star" style={styles.start}/>
                    <Icon name="star" style={styles.start}/>
                    <Icon name="star" style={styles.start}/>
                    <Icon name="star" style={styles.start}/>
                </View>
                <Subtitle style={styles.price}>USD 50.00</Subtitle>
            </View>
            


        </View>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="cash" style={{color:'#6576ff',fontSize:25}}/><Text>Maual Payment</Text></TabHeading>}>
          <ScrollView>
              <ManualPayment />
          </ScrollView>
            
          </Tab>
          <Tab heading={ <TabHeading><Icon name="credit-card-outline" style={{color:'#6576ff',fontSize:20}}/><Text>Credit Payment</Text></TabHeading>}>
          <ScrollView>
              <CreditPayment />
          </ScrollView>
            
          </Tab>
        </Tabs>
        
      </Container>
);
}
const styles=StyleSheet.create({
 start:{
     fontSize:18,
     color:'#6576ff',
     paddingLeft:3
 },
 title:{
    color:'#000',
    fontWeight:'bold',
    fontSize:16,
    paddingHorizontal:5,
    paddingBottom:5
 },
 price:{
     color:'red',
     fontSize:15,
     textAlign:'right',
     fontWeight:'bold'
 }
})
export default Index;
