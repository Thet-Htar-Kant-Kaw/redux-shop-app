import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/ProductsActions";

const ProductDetails= ()=> {
    const { productId }= useParams();
    let product= useSelector((state)=> state.product);
    const { image, title, price, category, description }= product;
    const dispatch=useDispatch();

    const fetchProductDetail= async (id)=> {
        const response= await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err)=> {
                console.log("Error: ", err)
            });
        dispatch(selectedProduct(response.data));
    }

    useEffect(()=> {
        if(productId && productId !== "") fetchProductDetail(productId)
        return () => {
            dispatch(removeSelectedProduct())
        }
    },[productId])

    return (
        <div className="details">
          {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
          ) : (
            // <div className="">
            //   <div className="">
            //     <div className="">AND</div>
            //     <div className="">
            //       <div className="">
            //         <img className="" src={image} />
            //       </div>
            //       <div className="">
            //         <h1>{title}</h1>
            //         <h2>
            //           <a className="">${price}</a>
            //         </h2>
            //         <h3 className="">{category}</h3>
            //         <p>{description}</p>
            //         <div className="">
            //           <div className="">
            //             <i className=""></i>
            //           </div>
            //           <div className="">Add to Cart</div>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </div>

            <div className="card">
              <div className="image">
                <img src={image} />
              </div>
              <div className="desc">
                <h1>{title}</h1>
                <h2>
                  <a className="">${price}</a>
                </h2>
                <h3 className="">{category}</h3>
                <p>{description}</p>
              </div>
            </div>
          )}
        </div>
      );
}

export default ProductDetails;