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
        <div className="text-center">    
        <h1 className="btn btn-ghost text4xl font-bold ">Product Detail</h1>
        <button onClick={goBack} className="btn btn-primary mb-4">Go Back</button>
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