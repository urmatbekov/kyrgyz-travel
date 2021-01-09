import React, {Fragment} from 'react';
import photo from "../img/back.jpeg";
import "./f-products-items.css"

const FProductsItem = ({item}) => {
    return (
        <Fragment>
            <img src={photo} alt=""/>
            <div className="text-f-product">
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </div>
            </div>
        </Fragment>
    );
};

export default FProductsItem;