import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/ProductsActions";
import ProductComponent from "./ProductComponent";

const ProductListing= () => {
    const products= useSelector((state)=> state.allProducts.products);
    const dispatch= useDispatch();

    const fetchProducts= async () => {
        const response= await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=> {
            console.log("Error: ", err)
        })
        dispatch(setProducts(response.data))
    }

    useEffect(()=> {
        fetchProducts();
    },[])

    console.log("Products :", products);
    return (
        <div>
            <ProductComponent />
        </div>
    );
}

export default ProductListing;