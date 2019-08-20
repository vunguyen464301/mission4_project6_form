import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  addtoCart = (text) => {
    alert(text);
  }
  render() {
    return (
      <div className="card" style={{ width: '18em' }}>

        {/* <img src="..." className="card-img-top" alt="..."> */}
        <div className="card-body">
          <h5 className="card-title">{this.props.id}.{this.props.name}</h5>
          <p className="card-text">price:{this.props.price}</p>
          status:{this.props.status}<br/>
          <button className="btn btn-primary" onClick={()=>{this.addtoCart(this.props.name)}}>Buy</button>
        </div>
      </div>
    )
  }
}
export default Product;