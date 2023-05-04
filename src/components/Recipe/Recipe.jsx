import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Recipe = ({ recipe }) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const notify = () => {
        toast('successful add')
    }
    const handleDisabled = () => {
        notify()
        setIsDisabled(true);
    };

    return (
        <div className=''>
            <ToastContainer></ToastContainer>
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
                        <button onClick={handleDisabled} disabled={isDisabled} className="btn btn-primary">Add Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;