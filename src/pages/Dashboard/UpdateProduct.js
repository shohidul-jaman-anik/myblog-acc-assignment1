import React from 'react';
import { useParams } from 'react-router-dom';
import AddProduct from './AddProduct';

const UpdateProduct = () => {
    const { id } = useParams()
    return (
        <div>
            <AddProduct
            id={id}
            ></AddProduct>
        </div>
    );
};

export default UpdateProduct;
