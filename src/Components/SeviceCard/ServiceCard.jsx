
import { GoArrowRight } from "react-icons/go";
const ServiceCard = ({service}) => {
    const{img, title, price}= service;
    return (
        <div>
            <div className="card h-[340px] bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>

    <div className="flex justify-between">
    <p className="text-[#FF3811] font-bold">Price : $ {price}</p> 
    <button><GoArrowRight className="text-2xl text-[#FF3811]" /></button>
    </div>
    
    
  </div>
</div>
        </div>
    );
};

export default ServiceCard;