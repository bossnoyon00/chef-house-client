import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        <div>
            <div className='text-center mt-10'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className='btn btn-primary' onClick={toPdf}>Generate Blog Pdf</button>}
                </Pdf>
            </div>
            <div className='rounded px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8' ref={ref}>
                <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-orange-400 rounded-box ">
                    <div className="collapse-title text-xl font-medium">  1. Tell us the differences between uncontrolled and controlled components.</div>
                    <div className="collapse-content bg-rose-300  font-bold">
                        <p>In React, there are two ways to manage form inputs and components that have state: controlled components and uncontrolled components.

                            Controlled components are components that have their state managed by the parent component through props. The parent component passes a value to the child component as a prop, and the child component updates its state when the value changes. When the user interacts with the component, it triggers an event that updates the value in the parent component, which is then passed down to the child component as a prop. The child component never manages its own state.
                        </p>
                    </div>
                </div>

                <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-orange-400 rounded-box ">
                    <div className="collapse-title text-xl font-medium">2. How to validate React props using PropTypes</div>
                    <div className="collapse-content bg-rose-300  font-bold">
                        <p>React provides a way to validate props passed to a component using a library called PropTypes. PropTypes allows you to specify the type and shape of props expected by a component, and it will generate warnings in the console if any of the props passed to the component do not match the specified type or shape.</p>
                    </div>
                </div>
                <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-orange-400 rounded-box ">
                    <div className="collapse-title text-xl font-medium"> 3. Tell us the difference between nodejs and express js.
                    </div>
                    <div className="collapse-content bg-rose-300  font-bold">
                        <p>Node.js and Express.js are two related technologies that are often used together in web development. Node.js is a JavaScript runtime environment that allows developers to run JavaScript code on the server-side. Express.js is a web application framework that runs on top of Node.js and provides a number of tools and features for building web applications and APIs.

                            The main difference between Node.js and Express.js is that Node.js is a runtime environment, while Express.js is a framework. Node.js provides a JavaScript runtime environment that allows developers to execute JavaScript code on the server-side. It also provides a number of built-in modules and APIs for working with files, networks, databases, and more.

                            Express.js, on the other hand, is a web application framework built on top of Node.js that simplifies the process of building web applications and APIs. Express.js provides a number of features and tools for routing, middleware, and handling requests and responses. It also integrates with a variety of view engines, such as EJS and Handlebars, for generating HTML pages.
                        </p>
                    </div>
                </div>
                <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-orange-400 rounded-box ">
                    <div className="collapse-title text-xl font-medium"> 4. What is a custom hook, and why will you create a custom hook?</div>
                    <div className="collapse-content bg-rose-300  font-bold">
                        <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Blog;


{/* <h3>   1. Tell us the differences between uncontrolled and controlled components.

                    2. How to validate React props using PropTypes

                    3. Tell us the difference between nodejs and express js.

                    4. What is a custom hook, and why will you create a custom hook?</h3> */}