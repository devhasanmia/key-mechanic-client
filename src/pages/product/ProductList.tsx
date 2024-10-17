import { Space, Table, message } from "antd";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useUpdateProductMutation,
} from "../../redux/features/product/productApi";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  brand: string;
  stock: number;
  price: number;
}

const ProductList = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [updateData, setUpdateData] = useState<Product | null>(null);
  const { register, handleSubmit, setValue, reset } = useForm<Product>();

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id).unwrap();
      message.success("Product deleted successfully!");
    } catch (error) {
      message.error("Failed to delete the product.");
    }
  };

  const handleEdit = (product: Product) => {
    setUpdateData(product);
  };

  useEffect(() => {
    if (updateData) {
      // Set form fields with the product's current data
      setValue("name", updateData.name);
      setValue("brand", updateData.brand);
      setValue("stock", updateData.stock);
      setValue("price", updateData.price);
    } else {
      // Reset form when no product is selected
      reset();
    }
  }, [updateData, setValue, reset]);

  const onSubmit = async (updatedProduct: Product) => {
    try {
      await updateProduct({
        id: updateData._id, // Correctly pass the product id
        updateData: updatedProduct, // Correctly pass the updated product data
      }).unwrap();
      message.success("Product updated successfully!");
    } catch (error) {
      message.error("Failed to update the product.");
    }
  };

  if (isLoading) {
    return <p>Loading.......</p>;
  }
  if (isError || !data?.data) {
    return <p>Data Not Found</p>;
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: Product) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record)}>Edit</a>
          <a onClick={() => handleDelete(record._id)}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-between">
        <Table
          dataSource={data.data}
          columns={columns}
          pagination={false}
          rowKey="_id"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <input
          {...register("name")}
          placeholder="Name"
          className="mb-2 border p-1"
        />
        <input
          {...register("brand")}
          placeholder="Brand"
          className="mb-2 border p-1"
        />
        <input
          {...register("stock")}
          placeholder="Stock"
          type="number"
          className="mb-2 border p-1"
        />
        <input
          {...register("price")}
          placeholder="Price"
          type="number"
          className="mb-2 border p-1"
        />
        <button type="submit" className="btn-primary">
          {updateData ? "Update Product" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ProductList;
