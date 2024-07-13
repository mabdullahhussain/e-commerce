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
                    </div>
                    <a className="btn btn-ghost text-xl">E-Commerce Website</a>
                </div>
                <div className="text-center">
                <h1 className="text-5xl  font-bold text-center text">DashBoard</h1>
                </div>
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