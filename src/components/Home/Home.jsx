import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';

const Home = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className='rounded px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='md:flex justify-around items-center font-bold my-14 bg-lime-500 p-10 rounded'>
                <div>
                    <h2 className='text-4xl text-orange-600'>Yummyy chef!! <br /> <span className='text-fuchsia-700'>Look This</span> <br /> is Crispy Chef</h2>
                    <p className='text-white'>Crispy chef import form dubai.. <br />New all chef are traditional.okay this site always to be new</p>
                </div>
                <div className=''>
                    <img className='w-96' src="https://images.unsplash.com/photo-1630344745900-b5385f94f26c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-3  gap-10'>
                {
                    chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                }
            </div>
        </div>
    );
};

export default Home;