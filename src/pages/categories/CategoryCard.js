import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {name , logo} = category;
    return (
        <div>
            <Link to="">
                <div className="card w-96  shadow-xl">
                    <figure><img className='w-full h-full' src={logo} alt="brand" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;