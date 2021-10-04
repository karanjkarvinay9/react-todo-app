import React, {useReducer} from 'react'
import TodoAppUI from './todoAppUI'


const reducer = (state,action) =>{
    if(action.type === "Add"){
        state = [...state , 1];
        console.log(state);
    }
    return state;

};

const TodoApp = () => {
    const [state,dispatch] = useReducer(reducer,[]);
    return (
        <div>
            <TodoAppUI dispatch = {dispatch} />
            
        </div>
    )
}

export default TodoApp
