import React from 'react';
import {View,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { 
    Container, Content, Card, CardItem, Text, Body,Thumbnail,
    Button, ListItem, Left, Right
} from "native-base";
const ActivityLog=(props)=>{
    return(
        <Container>
            
            <Content>
            <Card>
                    <CardItem header bordered>
                        <Left>
                            <Text>Where you're logged in</Text>
                        </Left>
                        <Right>
                            <Button transparent>
                                <Text style={{color:'#007AFF'}}>See All</Text>
                            </Button>
                            
                        </Right>
                    </CardItem>
                    
                </Card>
          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon style={{color:'#007AFF',fontSize:28}} active name="devices" />
              </Button>
            </Left>
            <Body>
              <Text>LG V20 | Phnom Penh, Cambodia</Text>
              <Text note numberOfLines={1}>Life Toolbox App | <Text style={{color:'blue'}}>Active</Text></Text>
            </Body>
            <Right>
            <Button transparent>
                  <Icon style={{color:'#007AFF',fontSize:28}} name="more"/>
                </Button>
            </Right>
          </ListItem>
          <ListItem icon>
          <Left>
              <Button transparent>
                <Icon style={{color:'#007AFF',fontSize:28}} active name="devices" />
              </Button>
            </Left>
            <Body>
              <Text>LG V20 | Phnom Penh, Cambodia</Text>
              <Text note numberOfLines={1}>Life Toolbox App </Text>
            </Body>
            <Right>
            <Button transparent>
                  <Icon style={{color:'#007AFF',fontSize:28}} name="more"/>
                </Button>
            </Right>
          </ListItem>
          <ListItem icon>
          <Left>
              <Button transparent>
                <Icon style={{color:'#007AFF',fontSize:28}} active name="devices" />
              </Button>
            </Left>
            <Body>
              <Text>LG V20 | Phnom Penh, Cambodia</Text>
              <Text note numberOfLines={1}>Life Toolbox App </Text>
            </Body>
            <Right>
            <Button transparent>
                  <Icon style={{color:'#007AFF',fontSize:28}} name="more"/>
                </Button>
            </Right>
          </ListItem>
        </Content>
        </Container>
    );
}
export default ActivityLog;