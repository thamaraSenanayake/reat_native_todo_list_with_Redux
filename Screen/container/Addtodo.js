import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';

import {connect} from 'react-redux'

class AddToDo extends React.Component{
    
    constructor(){
        super();
        this.state={
            todoText:''
        }
        this.addToDoButttonPress = this.addToDoButttonPress.bind(this); 
    }

    addToDoButttonPress(){
        var text = this.state.todoText;
        this.props.dispatch({type:"ADD_TODO",text});
        this.setState({
            todoText:''
        });
    }
    
    render(){
        return(
            <View style={styles.conainer}>
                <TextInput
                    onChangeText={(text)=>{
                        this.setState({
                            todoText:text
                        })
                    }}
                    placeholder = "add to do"
                    underlineColorAndroid = 'black'
                    style ={styles.textInputWord}    
                /> 
                <TouchableOpacity style={styles.addButton} onPress={this.addToDoButttonPress}>
                    <Text>
                        ADD
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
    
}


export default connect()(AddToDo);


const styles = StyleSheet.create({
    conainer:{
        //flex:1,
        backgroundColor:'#696969',
        flexDirection:'row'
    },
    textInputWord:{
        fontWeight:"500",
        fontSize:20,
        backgroundColor:"#eaeaea",
        width:100,
        flex:1,
        padding:5,
        height:50,
        borderWidth:1,
        borderColor:'#f2f2f2',

    },
    addButton:{
        height:50,
        backgroundColor:"#eaeaea",
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal: 10,
    }
});