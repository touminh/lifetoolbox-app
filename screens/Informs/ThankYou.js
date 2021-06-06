import * as React from 'react';
import {} from 'react-native';
import {Container,Content,Title,Button,Text} from 'native-base';
const ThankYou=()=>{
    return(
        <Container>
            <Content>
                <Title h2>Thanks You for Purchase This Course</Title>
                <Button bordered>
                    <Text>Home</Text>
                </Button>
            </Content>
        </Container>
    )
}
export default ThankYou;