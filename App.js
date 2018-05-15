import React, {Component} from 'react';
import {View, Text, TextInput, Button } from 'react-native';


class App extends Component {
  state={
    text: '',
    todo: []
  }


  addTodo = () =>{
    let newTodo = this.state.text
    let arr = this.state.todo
    arr.push(newTodo)
    this.setState({todo: arr, text:""})
  }

  renderTodos=()=>{
    return this.state.todo.map(item=> {
      return (
        <Text key={item}>{item}</Text>
      )
    })

  }
  render(){
    return(
      <View style={styles.viewStyle}>
        <Text>Hello World</Text>
        <TextInput style={styles.inputStyle}
          onChangeText={(text)=>this.setState({text})}
          value= {this.state.text}
        />
        <Button
          title="Add Todo"
          color='green'
          onPress={this.addTodo}
        />
        {this.renderTodos()}
      </View>
    )
  }
}

const styles = {
  viewStyle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyle:{
    height:40,
    width: 200,
    borderColor: 'green',
    borderWidth: 1
  }
}

export default App
