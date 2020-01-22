import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import {connect} from 'react-redux'

class First extends React.Component{
    
    constructor(){
        super();
        this.state={
            count:0
        };
        this.plus = this.plus.bind(this);
        this.minaz = this.minaz.bind(this);
    }

    plus(){
        this.props.incress();
        // this.setState({
        //     count:this.state.count+1,
        // })
    }

    minaz(){
        this.props.derease();
        // this.setState({
        //     count:this.state.count-1,
        // })
    }
    
    render(){
        return(
            <View style={styles.conainer}>
               
               <View style={styles.row}>
                <TouchableOpacity onPress={this.plus}>
                        <Text>
                            incress
                        </Text>
                    </TouchableOpacity>

                    <Text>{this.props.count}</Text>

                    <TouchableOpacity onPress={this.minaz}>
                        <Text>
                            decress
                        </Text>
                    </TouchableOpacity> 
               </View>
                
            </View>
        );

    };

    
}

function mapStateToProps(state) {
    return{
        count:state.count
    }
}

function mapDispatchToProps(dispatch) {
    return{
        incress:()=>dispatch({type:'INCRESS'}),
        derease:()=>dispatch({type:'DEREASE'}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(First);


const styles = StyleSheet.create({
    conainer:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        // flexDirection:"row"
    },

    row:{
        justifyContent:'space-around',
        flexDirection:"row"
    }


});