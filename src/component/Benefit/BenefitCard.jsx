/* eslint-disable react/prop-types */import { BsBoxArrowRight } from 'react-icons/bs'


const BenefitCard = ({benefits}) => {
    const { benefit, details } = benefits
    return (
        <div className=" w-9/12 mx-auto">
            <div className="card w-96 h-[200px] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><BsBoxArrowRight></BsBoxArrowRight>{benefit}</h2>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default BenefitCard;