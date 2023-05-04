import React, { useState } from 'react';
import { FaMarker } from 'react-icons/fa';

const Recipe = ({ recipe }) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const handleDisabled = () => {
        setIsDisabled(true);
    };

    return (
        <div className=''>
            <div className="card hover:bg-zinc-800 card-compact w-96 bg-base-100 shadow-xl text-white bg-red-400">
                <figure><img src="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe.name}</h2>
                    <p>Ratings : {recipe.rating}</p>
                    <p>Method : {recipe.method}</p>
                    <p>
                        Ingradients :
                        {
                            recipe.ingredients.map((gradient, index) => <li key={index}> {gradient}</li>)
                        }
                    </p>
                    <div className="card-actions justify-end">
                        <button onClick={handleDisabled} disabled={isDisabled} className="btn btn-primary">Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;