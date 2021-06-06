import React, { Component } from 'react';
import {View,StyleSheet,Image} from 'react-native';
import { DatePicker,Container, Card, CardItem,Content, Form, Item, Text,Button,Body,Left,Right,Label,Input, Subtitle } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const abapay={uri:'https://www.ionecards.com/_nuxt/img/ic_ABA_PAY_2x.e4400b5.png'};
const credit={uri:'https://travelwithgrant.boardingarea.com/wp-content/uploads/2018/06/Generic-Credit-Debit-Cards.jpg'};
const wing={uri:'https://www.androidfreeware.net/img2/com-wingmoney-wingpay.jpg'};
const tonchet={uri:'https://www.acledabank.com.kh/assets/unity/toanchet-icon.png'};
export default class PickerInputExample extends Component {
    constructor(props) {
    super(props);
    
    this.setDate = this.setDate.bind(this);
    this.state = {
      selected2: undefined,
      chosenDate: new Date() 
    };
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{margin:20}}>
          <Form>
           
            
            <View style={styles.inputGroup}>
                <Item floatingLabel style={{paddingVertical:5,flex:1,borderBottomColor:'#6576ff'}}>
                <Label style={{color:'#6576ff'}}>First Name</Label>
                <Input  style={{color:'#6576ff'}}/>
                </Item>
                <Item floatingLabel style={{paddingVertical:5,flex:1,borderBottomColor:'#6576ff'}}>
                <Label style={{color:'#6576ff'}}>Last Name</Label>
                <Input style={{color:'#6576ff'}}/>
                </Item>
            </View>
           
            <Item floatingLabel style={{paddingVertical:5,borderBottomColor:'#6576ff'}}>
                <Label style={{color:'#6576ff'}}>Email</Label>
                <Input style={{color:'#6576ff'}}/>
                </Item>
            <Card>
            <CardItem bordered>
             
                <Left>
                    <Image source={abapay} style={{width:80,height:50,resizeMode:'stretch'}}/>
                </Left>
                <Right style={{alignItems:'center'}}>
                <Text>ABA PAY</Text>
                <Subtitle>Tab To Pay with ABA Mobile</Subtitle>
                </Right>
              
            </CardItem>
            <CardItem bordered>
             
                <Left>
                <Image source={tonchet} style={{width:80,height:50,resizeMode:'stretch'}}/>
                </Left>
                <Right style={{alignItems:'center'}}>
                <Text>TonChet Pay</Text>
                <Subtitle>Tab To Pay with TonChet Mobile</Subtitle>
                </Right>
              
            </CardItem>
            <CardItem bordered>
             
                <Left>
                <Image source={credit} style={{width:80,height:50,resizeMode:'stretch'}}/>
                </Left>
                <Right style={{alignItems:'center'}}>
                <Text>Credit / Debit Card</Text>
                <Subtitle>Tab To Pay with ABA Mobile</Subtitle>
                </Right>
              
            </CardItem>
            <CardItem bordered>
             
                <Left>
                <Image source={wing} style={{width:80,height:50,resizeMode:'stretch'}}/>
                </Left>
                <Right style={{alignItems:'center'}}>
                <Text>Wing Pay</Text>
                <Subtitle>Tab To Pay with Wing Mobile</Subtitle>
                </Right>
              
            </CardItem>

            </Card>
                <Button block style={styles.btnNext}>
                    <Text>Submit</Text>
                </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
const styles=StyleSheet.create({
    inputGroup:{
        flex:1,
        flexDirection:'row'
    },
    btnNext:{
        backgroundColor:'#6576ff',
        marginVertical:10
    }
});