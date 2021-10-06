import React, { useState } from 'react'



const TodoAppUI = ({dispatch,list}) => {
    const [data, setData] = useState({});
    const [toggle, setToggle] = useState(false);
    const updateData = (param) =>{
        setData({id: param.id, value : param.value})
        dispatch({type : "change", value : param.value })
        setToggle(true)
    };
    return (
        <div className="container">
            <div className="input-group mb-3">
                <input type="text" 
                className="form-control" 
                placeholder="Recipient's username" 
                value= {data.value}
                onChange = {(event)=>{ setData({id : data.id , value: event.target.value}); dispatch({type : "change", value : event.target.value })} }
                 />
                    {!toggle ? 
                    <button className="btn btn-secondary" 
                    onClick = {()=>{dispatch( {type :"Add" , data: data.value  }); setData({id : data.id , value: ""}); setToggle(false)} } > <i className="fa fa-plus"></i> </button> : 
                    <button className="btn btn-secondary" 
                    onClick = {()=>{dispatch( {type :"Edit", id: data.id }); setData({id : data.id , value: ""}); setToggle(false)  } } > <i className="far fa-edit"></i> </button> } 
            </div>
            <ol className="list-group list-group">
                {list.map((curr) => {
                    return <li className="list-group-item d-flex justify-content-between align-items-start" key= {curr.id}>
                    <div className="ms-2 me-auto">
                      <div className="fw">{ curr.value }</div>
                    </div>
                    <button className="btn">  <span className="far fa-edit" onClick = {()=>{ updateData(curr) } } ></span> </button>
                    <button className="btn">  <span className="far fa-trash-alt" onClick = {()=>{dispatch( {type :"Delete", id: curr.id })} }  ></span> </button>
                  </li>
                    
                })}
            </ol>
        </div>
    )
}

export default TodoAppUI
