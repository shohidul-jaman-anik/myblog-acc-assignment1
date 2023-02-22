import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';

const ReadHistory = () => {
    const state = useSelector(state => state?.readHis)
    console.log('readhis', state)

    return (
        <div className=''>
            {
                state.map(product => <ProductCard
                    props={product._id}
                    product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default ReadHistory;