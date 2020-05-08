import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,ImageBackground, TouchableOpacity} from 'react-native';


export default class App extends Component {
  
  temp=0;
  temp1=0;
  image= { uri: "https://wallpaperaccess.com/full/57166.jpg" } 
  state={

    colors:['#6400fa','#0032fa','#1100fa','#0dff00','#f6ff00','#ff6f00','#ff1900'],
    buttonColor:'black',
    pageColor:'black',
    op:0
    
  };

  changeColor(){
    const colorArray= this.state.colors;
    var currentColor = colorArray[this.temp];
    this.setState({buttonColor:currentColor});
    this.setState({op:0});
    if(this.temp >=6)
    {
      this.temp=0;
    }
    else
    {
      this.temp=this.temp+1;
    }

  }

  pagechangeColor(){
    const colorArray= this.state.colors;
    var currentColor = colorArray[this.temp1];
    this.setState({pageColor:currentColor});
    this.setState({op:0});
    if(this.temp1 >=6)
    {
      this.temp1=0;
    }
    else
    {
      this.temp1=this.temp1+1;
    }

  }
  rest(){
    this.setState({op:1});
    
  }
  render(){
    return (
        
      <TouchableOpacity style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: this.state.pageColor}}
        onPress={()=>this.pagechangeColor()}>
      
          <ImageBackground style={styles.image} source={this.image}
          imageStyle={{opacity:this.state.op}}>
      
          <TouchableOpacity
              style={{backgroundColor:this.state.buttonColor, padding: 15, margin: 15}}
              onPress={()=>this.changeColor()}
                >
            <Text style={styles.text}>Change Color!</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={{backgroundColor:this.state.buttonColor, padding: 15, margin: 15}}
              onPress={()=>this.pagechangeColor()}
                >
            <Text style={styles.text}>Change Color!</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          
              style={{backgroundColor:this.state.buttonColor, padding: 15, margin: 15}}
              onPress={()=>this.rest()}
                >
            <Text style={styles.text}>Change Bimage!</Text>
          </TouchableOpacity>
          </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  image: {
        width: '100%',
        height: '100%',
        flex:1,
        backgroundColor:'transparent',
        overlayColor:'blue',
        backfaceVisibility:'hidden'
        
      },
  text:{
    color:'white'
    },
  
});