const PricingCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Pro Plan</h2>
        <p className="text-xl  text-gray-600 ">Access to exclusive Pro features</p>
        <p className="text-xl  text-gray-600 ">Unlimited post comments</p>
        <p className="text-xl  text-gray-600 ">Unlimited post likes</p>
        {/* Add more Pro features as needed */}
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="text-xl text-gray-700">$100 per month</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          
        >
          Subscribe to Pro
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
