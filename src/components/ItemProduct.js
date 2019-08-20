import React from 'react';

class ItemProduct extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <tr>
                <th>{this.props.id}</th>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.status?'TRUE':'FALSE'}</td>
            </tr>
        )
    }
}
export default ItemProduct;