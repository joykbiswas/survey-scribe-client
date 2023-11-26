import { useLoaderData } from "react-router-dom";
import MorePlan from "./MorePlan";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const priceOption = useLoaderData();
  console.log(priceOption);
  return (
    <div>
        <h3 className="text-3xl md:text-5xl  font-semibold text-center mt-12">Choose a plan that works for you</h3>
      <div className="grid md:grid-cols-2 gap-6  m-16 ">
        {priceOption.map((option) => (
          <PricingCard key={option.ID} option={option}></PricingCard>
        ))}
      </div>
      
      <MorePlan></MorePlan>
    </div>
  );
};

export default Pricing;
