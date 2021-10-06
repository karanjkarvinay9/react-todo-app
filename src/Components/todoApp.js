import React, {useReducer} from 'react'
import TodoAppUI from './todoAppUI';
import { v4 } from 'uuid';



const reducer = (state,action) =>{
    
    if(action.type === "Delete"){
        state = state.filter((curr)=> {
            return curr.id !== action.id
        })
    }
    if(action.type === "Add" && action.value.trim() !== "" ){
        var obj = {id: v4(), value : action.value}
        state = [...state , obj];
    }
    if(action.type === "Edit" && action.value.trim() !== "" ){
        state = state.map((curr) =>{
            if(curr.id ===action.id){
                curr.value = action.value;
            }
            return curr;
        })
    }
    
    return state;

};

const TodoApp = () => {
    const [state,dispatch] = useReducer(reducer,[]);
    
    return (
        <div>
            <TodoAppUI dispatch = {dispatch} list = {state} />
            
        </div>
    )
}

export default TodoApp
