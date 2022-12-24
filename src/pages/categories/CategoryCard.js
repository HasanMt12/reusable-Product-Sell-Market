import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {name , logo} = category;
    return (
        <div className='mx-auto  '>
            <Link to={`categories/${name}`}>
                <div className="card w-80 h-3/5 bg-gray-200 shadow-xl">
                    <figure className=''><img className='h-56' src={logo} alt="brand" /></figure>
                    <div className="card-body flex justify-between ">
                        <h2 className="card-title text-gray-700" >{name}</h2>
                         <Link
                      to={`categories/${name}`}
                      className="inline-flex items-center px-3 py-2 text-sm justify-end text-gray-800 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300  hover:bg-slate-700 focus:ring-blue-800"
                    >
                      <svg
                        aria-hidden="true" className="w-4 font-3xl h-4 ml-2 -mr-1" fill="currentColor"viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill-rule="evenodd"  d="M10.293 3.293a1 1 0 011.414 0l6  6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                    </div>
                   
                </div>
            </Link>
            
        </div>
    );
};

export default CategoryCard;