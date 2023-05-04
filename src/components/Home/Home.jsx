import React, { useContext, useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {
    const [chefs, setChefs] = useState([]);
    const { loading } = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])
    if (loading) {
        return <div className='text-center'>
            <progress className="progress w-56"></progress>
        </div>
    }
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
            <div className='grid md:grid-cols-3  gap-10'>
                {
                    chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                }
            </div>
            <div className='my-9'>
                <h2 className='text-amber-700 text-5xl text-center'>Happy Clients</h2>

                <div className=' grid md:grid-cols-3 mt-6 gap-10'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://images.unsplash.com/photo-1630344745900-b5385f94f26c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</h2>

                            <p className='text-3xl text-primary'>Regina Miles</p>
                            <p className='text-2xl'>Banker</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Full view</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://images.unsplash.com/photo-1630344745900-b5385f94f26c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</h2>

                            <p className='text-3xl text-primary'>Regina Miles</p>
                            <p className='text-2xl'>Banker</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Full view</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://images.unsplash.com/photo-1630344745900-b5385f94f26c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</h2>

                            <p className='text-3xl text-primary'>Regina Miles</p>
                            <p className='text-2xl'>Banker</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Full view</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' bg-base-200 p-3'>
                <h2 className='text-center text-accent text-5xl bg-slate-800 rounded p-3'>Contact us</h2>
                <div className="hero min-h-screen ">

                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Contact now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Number</span>
                                    </label>
                                    <input type="text" placeholder="number" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <textarea placeholder='Type message' name="" id="" cols="30" rows="5"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;