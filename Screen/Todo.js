import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import {connect} from 'react-redux';
import AddToDo from './container/Addtodo';
import VisibleTodo from './container/VisibleTodo';

class TodoApp extends React.Component{
    
    constructor(){
        super();
    }
    
    render(){
        return(
            <View style={styles.conainer}>
              <AddToDo/>
              
              <View>
                <VisibleTodo/>
              </View>
                
            </View>
        );

    };
    
}

function mapStateToProps(state) {
    return{
        
    }
}

function mapDispatchToProps(dispatch) {
    return{
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoApp);


const styles = StyleSheet.create({
    conainer:{
        flex:1,
        // flexDirection:'row'
    },
});