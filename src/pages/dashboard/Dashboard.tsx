import { FaMoneyBillWave,FaCartPlus } from "react-icons/fa"
import { CiKeyboard } from "react-icons/ci";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6">
      <div className="bg-green-500 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-lg mb-2">Total Product</h1>
          <CiKeyboard className="text-3xl text-white" />
        </div>
        <p className="text-3xl font-semibold">500</p>
      </div>
      <div className="bg-red-500 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-lg mb-2">Total Orders</h1>
          <FaCartPlus className="text-3xl text-white" />
        </div>
        <p className="text-3xl font-semibold">50</p>
      </div>
      <div className="bg-indigo-500 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-lg mb-2">Total Earn</h1>
          <FaMoneyBillWave className="text-3xl text-white" />
        </div>
        <p className="text-3xl font-semibold">500 $</p>
      </div>
    </div>
  </div>
  )
}

export default Dashboard