import { SubmitHandler, useForm } from "react-hook-form";
import InputWihtLabel from "../../components/ui/InputWithLabel";
import Button from "../../components/ui/Button";
import { useAddProductMutation } from "../../redux/features/product/productApi";

type Inputs = {
  image: string;
  name: string;
  brand: string;
  stock: number;
  price: number;
  rating: number;
  description: string;
};

const AddProduct = () => {
  const [addProduct] = useAddProductMutation();
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    addProduct(formData);
    reset();
  };
  return (
    <div className="min-h-screen flex flex-col justify-between  items-center p-6  bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl"
      >
        {/* Form Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Product Name */}
          <InputWihtLabel
            register={register("name")}
            label="Product Name"
            type="text"
            placeholder="Enter product name"
          />
          {/* Brand */}
          <InputWihtLabel
            label="Brand"
            type="text"
            placeholder="Enter brand name"
            register={register("brand")}
          />
          {/* Stock */}
          <InputWihtLabel
            label="Stock"
            type="number"
            placeholder="Enter stock quantity"
            register={register("stock")}
          />

          {/* Price */}
          <InputWihtLabel
            label="Price ($)"
            type="number"
            placeholder="Enter price"
            register={register("price")}
          />
          {/* Rating */}
          <InputWihtLabel
            label="Rating"
            type="number"
            placeholder="Enter rating"
            register={register("rating")}
          />
          {/* Image URL */}
          <InputWihtLabel
            label="Image URL"
            type="text"
            placeholder="Enter image Url"
            register={register("image")}
          />

          <div className="col-span-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              {...register("description")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter product description"
              rows={3}
            />
          </div>
        </div>
        <Button text="Add Product" type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
