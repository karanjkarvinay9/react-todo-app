import React, {useReducer} from 'react'
import TodoAppUI from './todoAppUI'


var tempVar = "";

const reducer = (state,action) =>{
    if(action.type === "change"){
        tempVar = action.value;
        console.log(tempVar);
    }
    if(action.type === "Add" && tempVar.trim() !== "" ){
        state = [...state , tempVar];
        tempVar = "";
    }
    if(action.type === "show"){
        state = [...state , 1];
        console.log(state);
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
