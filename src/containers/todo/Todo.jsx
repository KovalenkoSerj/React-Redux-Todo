import React, { Component } from 'react';
import {TodoInput} from '../../components/todo-input/TodoInput';
import {TodoList} from '../../components/todo-list/TodoList';
import {Footer} from '../../components/footer/Footer'
import { connect } from 'react-redux';
import { addTask, removeTask, completeTask, changeFilter } from '../../actions/actionCreator'

const mapStateToProps = ({ task, filterTasks }) => ({
    task,
    filterTasks
})

// const mapDispatchToProps = dispatch => ({
//     addTask: (id, text, isCompleted) => dispatch(addTask(id, text, isCompleted))
//      remove: (id) => dispatch(removeTask(id))
// })

export default connect(mapStateToProps, null)(class Todo extends Component {
    state = {
        inputValue: ''
    }

    handleChange = ({ target: { value }}) => {
        this.setState({
            inputValue: value
        })
    }

    complete = id => {
        const { dispatch } = this.props;
        dispatch(completeTask(id))
    }

    remove = id => {
       const { dispatch } = this.props;
        dispatch(removeTask(id))
    }

    add = ({ key }) => {
        const { inputValue } = this.state;
        const { dispatch } = this.props;

        if(inputValue.length > 3 && key === 'Enter'){
            dispatch(addTask((new Date()).getTime(), inputValue, false))

            this.setState({
                inputValue: ''
            })
        }
    }

    filter = id => {
        const { dispatch } = this.props;
        dispatch(changeFilter(id))
    }

    filterTasks = (task, activeFilter) => {
        switch(activeFilter){
            case 'completed':
                return task.filter(task => task.isCompleted)
            case 'active':
                return task.filter(task => !task.isCompleted)
            default:
                return task;
        }
    }

    taskCounter = task => task.filter(task => !task.isCompleted).length

    render(){
        const { inputValue } = this.state;
        const { task, filterTasks } = this.props;
        const isTasksExist = task && task.length > 0;
        const filteredTask = this.filterTasks(task, filterTasks);
        const count = this.taskCounter(task)
        console.log(this.props)
        return(
            <div className="todo-wrapper">
                <TodoInput onKeyPress={this.add} onChange={this.handleChange} value={inputValue} />
                {isTasksExist && <TodoList tasksList={filteredTask} removeTask={this.remove} completeTask={this.complete}/>}
                {isTasksExist && <Footer amount={count} activeFilter={filterTasks} changeFilter={this.filter}/>}
            </div>
        )

    }
})

