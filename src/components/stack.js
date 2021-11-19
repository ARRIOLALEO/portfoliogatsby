import React from "react";

const Stack = () => {
    return (
        <>
            <section className="p-6 bg-coolGray-100 text-coolGray-800">
                <div className="container p-4 mx-auto text-center">
                    <h2 className="text-4xl font-bold">
                        что мы используем, чтобы предложить вам лучшие решения
                    </h2>
                </div>
                <div className="container flex flex-wrap justify-center mx-auto text-coolGray-600">
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img
                            src="https://www.svgrepo.com/show/354259/react.svg"
                            className="fillCurrent w-14 h-14"
                        />
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img
                            src="https://www.svgrepo.com/show/373929/node.svg"
                            className="fillCurrent w-14 h-14"
                        />
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img
                            src="https://www.svgrepo.com/show/354110/netlify.svg"
                            className="fillCurrent w-14 h-14"
                        />
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img
                            src="https://www.svgrepo.com/show/353735/firebase.svg"
                            className="fillCurrent w-14 h-14"
                        />
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img
                            src="https://www.svgrepo.com/show/373845/mongo.svg"
                            className="fillCurrent w-14 h14"
                        />
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img
                            src="https://www.svgrepo.com/show/349568/wordpress.svg"
                            className="fillCurrent h-14 w-14"
                        />
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img
                            src="https://www.svgrepo.com/show/373554/django.svg"
                            className="fillCurrent h-14 w-14"
                        />
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img
                            src="https://www.svgrepo.com/show/353630/cypress.svg"
                            className="fillCurrent w-14 h-14"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Stack;
