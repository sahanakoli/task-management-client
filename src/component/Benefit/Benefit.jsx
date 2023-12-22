import { useEffect, useState } from "react";
import BenefitCard from "./BenefitCard";

const Benefit = () => {
    const [benefit, setBenefit] = useState([]); 

    useEffect(() =>{
        fetch('benefit.json')
        .then(res => res.json())
        .then(data => setBenefit(data))
    },[])
    return (
        <div className="mt-14 mb-10">
            <h2 className=" text-4xl font-bold text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    benefit.map(benefits => <BenefitCard key={benefits.id} benefits={benefits}></BenefitCard>)
                }
            </div>
        </div>
    );
};

export default Benefit;