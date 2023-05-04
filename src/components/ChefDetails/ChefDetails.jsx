import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const ChefDetails = () => {
    // const { id } = useParams();
    const chefDetails = useLoaderData();
    const { chef_name, description, likes, years_of_experience, number_of_recipes } = chefDetails;
    return (
        <div className=' rounded px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://th.bing.com/th/id/R.11e615426ae5e806ffb8ac962c51e062?rik=PAHGspPYa507fg&pid=ImgRaw&r=0")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Name:{chef_name}</h1>
                        <p className="mb-5">Description : {description}</p>
                        <p className="mb-5">Likes: {likes}</p>
                        <p className="mb-5">number_of_recipes:{number_of_recipes}</p>
                        <p className="mb-5">years_of_experience:{years_of_experience}</p>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-3 mt-40 '>
                {
                    chefDetails.recipes.map((recipe, index) => <Recipe key={index} recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;