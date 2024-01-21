import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        const { id, image, title, price, category }= product;
        return (
            <div className="" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="">
                        <div className="">
                            <div className="">
                                <img src={image} alt={title} />
                            </div>
                            <div className="">
                                <div className="">{title}</div>
                                <div className="">$ {price}</div>
                                <div className="">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
      );
    });
    
    return <>{renderList}</>;
  };

  export default ProductComponent;