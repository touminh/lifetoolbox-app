import * as React from 'react';

import {
  Container, Content, Card, CardItem, Text, Body,
  Button, ListItem, Icon, Right, Thumbnail
} from "native-base";
const PersonalInfoScreen = () => {

  return (
    <Container>
      <Content>
        <Card>
          <CardItem header bordered>
            <Text>Personal Info</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem style={{alignItems:'center',justifyContent:'center',flex:1,flexDirection:'column'}}>
          <Thumbnail square style={{width:150,height:150}} source={{uri: 'https://scontent.fpnh11-1.fna.fbcdn.net/v/t1.0-9/123301386_1162476810814387_6972418280920342942_o.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_eui2=AeFnLHN0j5W-PoCaQU8ZdNpTJhnqyHvugswmGerIe-6CzNyeOv5ohTj7IHCjo4qZYLWnpriSwPpfilSokaLBteB7&_nc_ohc=thIpILfPBeoAX_PcC3e&_nc_ht=scontent.fpnh11-1.fna&oh=88d6f0c7d2b8b9950b477411e6b0ce39&oe=5FEA63C9'}} />
          <Button small transparent block>
          <Icon style={{color:'gray',fontSize:28}} name="more"/>
          </Button>
          </CardItem>
        </Card>
        <ListItem icon>
          <Body>
            <Text note numberOfLines={1}>Name</Text>
            <Text>MET TOUMINH</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Body>
            <Text note numberOfLines={1}>Email</Text>
            <Text>mettoumenh.info@gmail.com</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Body>
            <Text note numberOfLines={1}>Phone</Text>
            <Text>096 876 9003</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Body>
            <Text note numberOfLines={1}>Country</Text>
            <Text>Cambodia</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Body>
            <Text note numberOfLines={1}>Address</Text>
            <Text>Chamkadong, Dangkor, Phnom penh</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      </Content>
    </Container>
  );
}
export default PersonalInfoScreen;