import React, {useReducer} from 'react'
import TodoAppUI from './todoAppUI';
import { v4 } from 'uuid';


var tempVar = "";

const reducer = (state,action) =>{
    if(action.type === "change"){
        tempVar = action.value;
    }
    if(action.type === "Delete"){
        state = state.filter((curr)=> {
            return curr.id !== action.id
        })
    }
    if(action.type === "Add" && tempVar.trim() !== "" ){
        var obj = {id: v4(), value : tempVar}
        state = [...state , obj];
        tempVar = "";
    }
    if(action.type === "Edit" && tempVar.trim() !== "" ){
        state = state.map((curr) =>{
            if(curr.id ===action.id){
                curr.value = tempVar;
            }
            return curr;
        })
        tempVar = "";
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
