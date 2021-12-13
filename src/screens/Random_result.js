import React, { useState, useEffect, Component } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { viewStyles, textStyles, buttonStyles, imageStyles } from '../styles/RandomScreenStyles';
import q from '../data/Random_quotes.json';
import T from '../data/Random_todo.json';
import Checkbox from '../../assets/UnCheckbox.png';


export default class RoundButton extends Component{
    constructor(props) {
        super(props)
        this.state = {
           quote: '',
           author: '',
           todo: ''
        }
     }
  
     componentDidMount() {
        this.getQuote()
        this.getTodo()
     }
  
     getQuote() { 
              let data = q.quotes
              let quoteNum = Math.floor(Math.random() * data.length)
              let randomQuote = data[quoteNum]
  
              this.setState({
                 quote: randomQuote['quote'],
                 author: randomQuote['author']
              })
     }
     getTodo() { 
        let data = T.Todos
        let TodoNum = Math.floor(Math.random() * data.length)
        let randomTodo = data[TodoNum]

        this.setState({
            todo: randomTodo['Todo'],
        })
}
  
    getNew = () => {
        this.getQuote()
        this.getTodo()
    }

    render() {
        const { quote, author, todo } = this.state
        return (
            <View style={viewStyles.container2}>
                <Text style={textStyles.title2}> RECOMMANDATION </Text>
                <View style={viewStyles.item1}>
                    <Image style={imageStyles.image2} source={Checkbox} />
                    <View style={{justifyContent: 'center' }}>
                        <Text style={textStyles.todo}>{todo}</Text>
                        <Text style={textStyles.duedate}>Set your own due date!</Text>
                    </View>
                </View>
                <Text style={textStyles.title3}> MOTIVATING QUOTE </Text>
                <View style={viewStyles.item2} >
                    <Text style={textStyles.quote}>"{quote}"</Text>
                    <Text style={textStyles.author}>- {author}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', top: 30}}>
                    <TouchableOpacity style={buttonStyles.button} onPress={this.getNew}>
                        <Text style={buttonStyles.title}>ADD TO MY TO-DO LIST</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={buttonStyles.button2} onPress={this.getNew}>
                        <Text style={buttonStyles.title}>RETRY</Text>
                    </TouchableOpacity>
                </View>
            </View>
         );
    };
};