import {connect} from 'react-redux';
import ToDoList from '../components/ToDoList';

const mapStatsToProps = state => ({
    todos:state.todos
});

const mapDispatchToProps = dispatch => ({
    toggleTodo:id=> dispatch({
        type:'TOGGLE_TODO',id
    })
});

export default connect(mapStatsToProps,mapDispatchToProps)(ToDoList);