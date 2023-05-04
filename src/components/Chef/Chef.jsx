import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    return (
        <div className='w-full'>
            <div className="card w-96 bg-base-100 shadow-xl image-full font-bold">
                <figure>
                    {/* <img src={chef.chef_picture} alt="Shoes" /> */}
                    <LazyLoad threshold={0.95} offset={300}>
                        <img src={chef.chef_picture} />
                    </LazyLoad>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-orange-700">Chef name : {chef.chef_name}</h2>
                    <p>Experience:{chef.years_of_experience
                    }</p>
                    <p>Likes : {chef.likes}</p>
                    <p>number_of_recipes : {chef.number_of_recipes}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/chef/${chef.id}`}> <button className="btn btn-primary">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;