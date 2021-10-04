import React from 'react'


const TodoAppUI = ({dispatch,tempVar}) => {
    return (
        <div className="container">
            <div className="input-group mb-3">
                <input type="text" 
                className="form-control" 
                placeholder="Recipient's username" 
                aria-label="Recipient's username" aria-describedby="basic-addon2"
                onChange = {(event)=>{ dispatch({type : "change", value : event.target.value })} }
                 />
                <button className="btn btn-secondary" 
                onClick = {()=>{dispatch( {type :"Add" })} } > <i className="fa fa-plus"></i> </button>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </div>
    )
}

export default TodoAppUI
