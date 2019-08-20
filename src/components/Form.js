import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);
    }

    addtoCart=()=>{
        console.log(this.refs.name.value);
    } 
    render(){
  
        return(
            <div>
    

    <label>Phone name</label>
    <input type="text" className="form-control" placeholder="Enter email" ref="name"/>
    <button className="btn btn-primary" onClick={()=>{this.addtoCart()}}>Submit</button>
  </div>


        )
    }
}

export default Form;