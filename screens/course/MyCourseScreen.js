import React, { Component } from 'react';
import {Image,ScrollView} from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
// const mycourse=require('../../assets/mycouse.jpg')
export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Content>
        <Image source={require('../../assets/mycourse.jpg')} style={{width:'100%'}}/>
        <ScrollView>
          <List style={{
            marginVertical:20
          }}>
            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://kinsta.com/wp-content/uploads/2018/05/what-is-php-3-1.png' }} />
              </Left>
              <Body>
                <Text>PHP Developer From Zero</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Learn</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://kinsta.com/wp-content/uploads/2018/05/what-is-php-3-1.png' }} />
              </Left>
              <Body>
                <Text>PHP Developer From Zero</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Learn</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://kinsta.com/wp-content/uploads/2018/05/what-is-php-3-1.png' }} />
              </Left>
              <Body>
                <Text>PHP Developer From Zero</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Learn</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://kinsta.com/wp-content/uploads/2018/05/what-is-php-3-1.png' }} />
              </Left>
              <Body>
                <Text>PHP Developer From Zero</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Learn</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://kinsta.com/wp-content/uploads/2018/05/what-is-php-3-1.png' }} />
              </Left>
              <Body>
                <Text>PHP Developer From Zero</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Learn</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}