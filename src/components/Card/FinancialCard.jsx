import React from 'react';
import { useSelector } from 'react-redux';
const FinancialCard = () => {
   const orders = useSelector((state) => state.ordersData.orders);
   const products = useSelector((state) => state.productsData.products);
   
   const totalAssetValue = () => {
    return products.reduce((result, product) => result + product.price * product.total, 0);
};

  return (
    <div className="w-full h-full mx-auto">
      {/* Single Financial Card */}
      <div className="h-full bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 backdrop-blur-lg bg-opacity-50 border border-indigo-600">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-300">Net Value</h3>
            <div className="mt-2 flex items-baseline">
              <span className="text-3xl font-semibold text-white">₹{orders ? (orders.totalRevenue + totalAssetValue())?.toLocaleString('en-IN') : 0}</span>
              <span className="ml-2 text-sm text-green-400">+{(products.length > 0 && (orders.totalRevenue + totalAssetValue()) > 0) ? "15.3" : "0"}%</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-300">Revenue</h4>
              <p className="mt-2 text-lg font-semibold text-white">₹{orders ? orders.totalRevenue?.toLocaleString('en-IN') : 0}</p>
              <div className="mt-1 text-sm text-green-400">+{(products.length > 0 && orders.totalRevenue > 0) ? "12.5" : "0"}%</div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-300">Profit</h4>
              <p className="mt-2 text-lg font-semibold text-white">₹{orders ? orders.totalProfits?.toLocaleString('en-IN') :  0}</p>
              <div className="mt-1 text-sm text-green-400">+{(products.length > 0 && orders.totalProfits > 0) ? "8.2" : "0"}%</div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-300">Assets</h4>
              <p className="mt-2 text-lg font-semibold text-white">₹{orders ? totalAssetValue()?.toLocaleString('en-IN') :  0}</p>
              <div className="mt-1 text-sm text-green-400">+{(products.length > 0 && totalAssetValue() > 0) ? "5.8" : "0"}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialCard;
