import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    //history.push can move your resource from productDetail to Product, and you also can press backbuttom back to productDetail.
    //history.replace can also move your resource from productDetail to Product, but you cannot use backbuttom to back to productDetail.
    this.props.history.replace('/products');
  };

  render() {
    return (
      <div>
        {/* If you want to render the id of product in the head, here need input a expression like below: */}
        <h1>Product Details - {this.props.match.params.id } </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
