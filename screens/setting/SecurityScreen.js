import React from 'react';
import { View, StyleSheet} from 'react-native';
import { 
    Container, Content, Card, CardItem, Text, Body,
    Button, ListItem, Icon, Left, Right, Switch
} from "native-base";

const SecuritySetting = (props) => {
    return (
        <Container>
            
            <Content>
            <Card>
                    <CardItem header bordered>
                        <Text>Security Settings</Text>
                    </CardItem>
                    
                </Card>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="key" />
              </Button>
            </Left>
            <Body>
              <Text>Save My Activity Log</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="lock" />
              </Button>
            </Left>
            <Body>
              <Text>Change Password</Text>
            </Body>
            <Right>
              <Button small style={{backgroundColor: "#007AFF"}}>
                  <Text>Change</Text>
              </Button>
              
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="person" />
              </Button>
            </Left>
            <Body>
              <Text>2 Factor Auth</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
        </Content>
        </Container>

    );
}
export default SecuritySetting;