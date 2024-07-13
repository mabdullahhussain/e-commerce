import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../Components/Card";

const Detail = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [productId]);

    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">E-Commerce Website</a>
            </div>
            <div className="navbar-center hidden lg:flex">
            <h1 className=" mt-4 mb-4 text-center text-5xl font-bold">Product Detail</h1>
            </div>
            <div className="navbar-end card-actions justify-center">
                <button onClick={goBack} className="btn btn-primary mb-4">Go Back</button>
            </div>
            </div>
                <div  className="flex justify-center">
                {product ? (
                    <div>
                         < Card key={product.id} title = {product.title}
                        img = {product.image} price ={product.price} description = {product.description}/>
                    </div>
                ) : (
                    <h1 className="text-center"><span className="loading loading-ball loading-lg"></span></h1>
                )}
                </div>
        </>
    );
};

export default Detail;