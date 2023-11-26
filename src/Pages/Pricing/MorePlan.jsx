

const MorePlan = () => {
    return (
        <div>
            
            <div>
                <h3 className="text-3xl md:text-4xl font-bold text-center my-10 ">More about plans and pricing</h3>
            </div>
            <div className="md:flex  mx-12 gap-12 space-y-4 md:space-y-0">
                <div className="flex-1">
                    <h3 className="text-xl font-semibold">Do you offer plans for corporate needs?</h3>
                    <p className="">Our Enterprise plans offer HIPAA compliance, advanced security, and admin features for increased governance and control.</p>
                    
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-semibold">Do you offer discounts for teams?</h3>
                    <p>We offer discounts when you sign up for team plans that include 3 or more people. With Team Advantage and Team Premier plans, you will save 20% or more over individual plans and get access to additional collaboration features.</p>
                </div>
            </div>
        </div>
    );
};

export default MorePlan;