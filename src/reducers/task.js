import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from '../constants';
import { load } from 'redux-localstorage-simple'


let TASKS = load({ namespace: 'todo-list'});
if(!TASKS || !TASKS.task || !TASKS.task.length){
    TASKS = {
        task: []
    }
}
// const initialState = [
//     {
//         id: 1,
//         text: "Learn ReactJS",
//         isCompleted: true,
//     },
//     {
//         id: 2,
//         text: "Learn Redux",
//         isCompleted: false
//     },
//     {
//         id: 3,
//         text: "Learn React Router",
//         isCompleted: false
//     }
// ];

export const task = (state = TASKS.task, { type, id, text, isCompleted }) => {
    switch (type) {
        case ADD_TASK:
            return [
                ...state, {
                    id,
                    text,
                    isCompleted
                }
            ];
        case REMOVE_TASK:
            return [...state].filter(task => task.id !== id)
        default:
            return state
        case COMPLETE_TASK:
            return [...state].map(task => {
                if (task.id === id) {
                    task.isCompleted = !task.isCompleted
                }
                return task
            })
    }
}