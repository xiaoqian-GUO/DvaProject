import React from "react";
import {connect} from 'dva';
import ProductList from "../components/ProductList";

const Products = ({dispatch,products})=>{
    console.log(products);
    function handlerDelete(id){
        dispatch({
            type:"products/delete",
            payload:id,
        });
    }
    return(
        <div>
            <h3>List of Products</h3>
            <ProductList onDelete={handlerDelete} products={products} ></ProductList>
        </div>
    );
}

//export default Products;
// 实现state和props的
export default connect(({products})=>({products,
}))(Products);