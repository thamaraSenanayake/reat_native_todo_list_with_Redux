import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';


const ToDoList = ({todos, toggleTodo })=>(    
    <View style={styles.conainer}>
        {todos.map(todo=>
            <TouchableOpacity key={todo.id} onPress={()=> toggleTodo(todo.id)}>
                <Text
                    style={{
                        fontSize: 24,
                        textDecorationLine:todo.completed?'line-through':'none'
                    }}
                >
                    {todo.text}
                </Text>
            </TouchableOpacity>    
        )}
    </View>
)


export default ToDoList;


const styles = StyleSheet.create({
    conainer:{
        padding:20 ,
    },
    
});