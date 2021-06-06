import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import ImagePickerCom from '../../components/PickImage';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Picker,
  Left,
  Right,
  Text,
  Icon,
  Button,
  Body,
  Title,
  Label,
  Input,
  Root
} from 'native-base';

const ManualPayment = ({navigation}) => {
  return (
    <Container>
      <Content contentContainerStyle={{ margin: 20 }}>
        <Form>
          <Item last picker style={{ borderBottomColor: '#6576ff' }}>
            <Left>
              <Text style={{ color: '#6576ff' }}>Payment Methods</Text>
            </Left>
            <Right>
              <Picker
                renderHeader={backAction =>
                  <Header style={{ backgroundColor: "#6576ff" }}>
                    <Left>
                      <Button transparent onPress={backAction}>
                        <Icon name="arrow-back" style={{ color: "#fff" }} />
                      </Button>
                    </Left>
                    <Body style={{ flex: 3 }}>
                      <Title style={{ color: "#fff" }}>Select Payment Method</Title>
                    </Body>
                    <Right />
                  </Header>}
                textStyle={{ color: "#6576ff" }}
                itemStyle={{
                  Color: "#6576ff",

                  paddingHorizontal: 10
                }}
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select Method"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#6576ff"
                selectedValue={() => {

                }}
                onValueChange={() => {

                }}
              >
                <Picker.Item label="Wing Pay" value="wing" />
                <Picker.Item label="ABA Pay" value="aba" />
                <Picker.Item label="Acleda" value="acleda" />

              </Picker>
            </Right>

          </Item>

          <View style={styles.inputGroup}>
            <Item floatingLabel style={{ flex: 1, borderBottomColor: '#6576ff' }}>
              <Label style={{ color: '#6576ff' }}>First Name</Label>
              <Input style={{ color: '#6576ff' }} />
            </Item>
            <Item floatingLabel style={{ flex: 1, borderBottomColor: '#6576ff' }}>
              <Label style={{ color: '#6576ff' }}>Last Name</Label>
              <Input style={{ color: '#6576ff' }} />
            </Item>
          </View>
          <Item floatingLabel style={{ borderBottomColor: '#6576ff' }}>
            <Label style={{ color: '#6576ff' }}>City</Label>
            <Input style={{ color: '#6576ff' }} />
          </Item>
          <Item floatingLabel style={{ borderBottomColor: '#6576ff' }}>
            <Label style={{ color: '#6576ff' }}>Country</Label>
            <Input style={{ color: '#6576ff' }} />
          </Item>
          <Item floatingLabel style={{ borderBottomColor: '#6576ff' }}>
            <Label style={{ color: '#6576ff' }}>Email</Label>
            <Input style={{ color: '#6576ff' }} />
          </Item>
          <Item floatingLabel style={{ borderBottomColor: '#6576ff' }}>
            <Label style={{ color: '#6576ff' }}>Phone</Label>
            <Input style={{ color: '#6576ff' }} />
          </Item>
          <ImagePickerCom />
          <Button block style={styles.btnNext} onPress={
            () => { console.log(navigation) }
          }>
            <Text>Submit</Text>
          </Button>
        </Form>
      </Content>
    </Container>

  );
}
const styles = StyleSheet.create({
  inputGroup: {
    flex: 1,
    flexDirection: 'row'
  },
  btnNext: {
    backgroundColor: '#6576ff',
    marginVertical: 10
  }
});
export default ManualPayment;