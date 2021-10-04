import React from 'react'


const TodoAppUI = ({dispatch}) => {
    return (
        <div className="container">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <button className="btn btn-secondary" onClick = {()=>{dispatch( {type :"Add" })} } > <span className="input-group-text" id="basic-addon2">@example.com</span> </button>
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
