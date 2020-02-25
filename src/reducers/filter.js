import { CHANGE_FILTER } from '../constants'

const BASE_FILTER = 'all';

export const filterTasks = (state = BASE_FILTER, {type, activeFilter }) => {
    switch(type) {
        case CHANGE_FILTER:
            return activeFilter;
        default:
            return state;
    }
}