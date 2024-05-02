import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "../SeviceCard/ServiceCard";


const Services = () => {
    const [services, setServicees]= useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServicees(data))
    },[])
    return (
        <div className="mx-[100px] mt-[70px]">
            <h1 className="text-lg text-center text-[#FF3811] font-bold">Services</h1>
            <h1 className="py-6 font-bold text-center text-5xl">Our Service Area</h1>
            <p className='text-[#737373] text-center py-[6]'>The majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which do not look even slightly believable. </p>

            <div className="grid grid-cols-3 gap-[20px]">
               {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
               }
            </div>
            
        </div>
    );
};

export default Services;