import InputWihtLabel from "../../components/ui/InputWithLabel";

const AddProduct = () => {
    return (
        <div className="flex justify-center items-center bg-gray-100">
            <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
                {/* Form Grid */}
                <div className="grid grid-cols-2 gap-6">
                    {/* Product Name */}
                    <InputWihtLabel label="Product Name" type="text" placeholder="Enter product name" />
                    {/* Brand */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Brand</label>
                        <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter brand name"
                        />
                    </div>

                    {/* Stock */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Stock</label>
                        <input
                            type="number"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter stock quantity"
                        />
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Price ($)</label>
                        <input
                            type="number"
                            step="0.01"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter price"
                        />
                    </div>

                    {/* Rating */}
                    <InputWihtLabel label="Rating" type="number" placeholder="Enter rating" />
                    {/* <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
                        <input
                            type="number"
                            className=" border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter rating (max 5)"
                        />
                    </div> */}

                    {/* Image URL */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
                        <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter image URL"
                        />
                    </div>

                    <div className="col-span-2 mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter product description"
                            rows={3}
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex ">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
