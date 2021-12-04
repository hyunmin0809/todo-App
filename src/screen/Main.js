/*메인화면*/
import React from 'react';
import {View, Text, Button} from 'react-native';


class Main extends React.Component {
  render() {
    return (
      <View>
        <Text>Main!</Text>
        <Button
        title="+"
        onPress={()=>this.props.navigation.navigate('Addtodo')}
      />
      </View>
    );
  }
    
}


  
  export default Main;