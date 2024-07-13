import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import { useNavigate } from "react-router-dom";

const Dashboard = ()=>{
    const navigate = useNavigate()
    const [products, setProducts]= useState([])


    useEffect(()=>{
        axios('https://fakestoreapi.com/products')
        .then((res)=>{
            setProducts(res.data)
            console.log(res.data)
        })
    },[])

    const gotoDetail = (item)=>{
        navigate(`/detail/${item.id}`)
    }
    return (
            <>
            <div className="text-center">
            <h1 className="btn btn-ghost text-4xl font-bold ">DashBoard</h1>
            </div>
                <div  className="flex justify-center gap-6 flex-wrap mt-6">
                {products.map(item => {
                    return <div  onClick={() => gotoDetail(item)}>
                        < Card key={item.id} title = {item.title} 
                        img = {item.image} price ={item.price} />
                    </div>
                })}
                </div>
            </>
    )
}

export default Dashboard