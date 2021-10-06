import React, { useState } from 'react'


const TodoAppUI = ({dispatch,list}) => {
    const [data, setData] = useState("")
    return (
        <div className="container">
            <div className="input-group mb-3">
                <input type="text" 
                className="form-control" 
                placeholder="Recipient's username" 
                value= {data}
                onChange = {(event)=>{ setData(event.target.value); dispatch({type : "change", value : event.target.value })} }
                 />
                <button className="btn btn-secondary" 
                onClick = {()=>{dispatch( {type :"Add" }); setData("")} } > <i className="fa fa-plus"></i> </button>
            </div>
            <ul className="list-group list-group-flush">
                {list.map((curr) => {
                    return <li className="list-group-item">{ curr }</li>
                })}
            </ul>
        </div>
    )
}

export default TodoAppUI
