import React from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Form from './components/Form';
import ItemProduct from './components/ItemProduct';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      products:[
        {
          id:1,
          name:"Iphone XS MAX 512GB",
          price:2000,
          status:true
        },
        {
          id:2,
          name:"Iphone XS MAX 256GB",
          price:1800,
          status:true
        },
        {
          id:3,
          name:"Iphone XS MAX 128GB",
          price:1600,
          status:true  
        },
        {
          id:4,
          name:"Iphone XS MAX 64GB",
          price:1400,
          status:true
        },
      ],
      isActive:true
    }
    // this.btn_setstate=this.btn_setstate.bind(this)
  }
  
  btn_setstate=()=>{
    this.setState({isActive:!this.state.isActive})
  }
   render(){
     if(this.state.isActive===true){
      var listProduct= this.state.products.map((product,index)=>{
        let result='';
        if(product.status){
          result=   
        <ItemProduct 
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        status={product.status}
        />
        }
        return result;
      });
     }
   

  return (
    <div >
      <Header/>
      <div className="container">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
  {listProduct}
  </tbody>
</table>
<button type="button" class="btn btn-success" onClick={()=>{this.btn_setstate()}}>Active : {this.state.isActive===true?"TRUE":"FALSE"}</button>
      </div>
    </div>
  );
   }
}

export default App;
