import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  
  constructor(){
    super();
    
    this.state = {
      myState: "hello world",
      count: 1,
      customStyle: {
        backgroundColor: 'blue'
      },

      currentColor: "#FFFFFF"

    }
  }

  randomHex = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6;i++){
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({
      count: color,
      customStyle: {
        backgroundColor: color
      }
    })
  }

  addition = () => {
    this.setState(
      {
        count: this.state.count+1
      }
    )
  }

  

  render() {

  
    

    return (
      <View style={[styles.container, this.state.customStyle]}>
        <Text style = {styles.text} onPress={this.addition}>{this.state.count}</Text>
        <Button style = {styles.text} onPress = {this.randomHex} title = "click me!" /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
});

