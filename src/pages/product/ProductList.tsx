import { Space, Table, message } from "antd";
import { useDeleteProductMutation, useGetAllProductsQuery } from "../../redux/features/product/productApi";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const ProductList = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id).unwrap();
      console.log(id);
      message.success("Product deleted successfully!");
    } catch (error) {
      message.error("Failed to delete the product.");
    }
  };

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
      render: (_: any, record: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; _id: string; }) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a onClick={() => handleDelete(record._id)}>Delete</a>
        </Space>
      ),
    },
  ];

  if (isLoading) {
    return <p>Loading.......</p>;
  }
  if (isError || !data?.data) {
    return <p>Data Not Found</p>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Table
        dataSource={data.data}
        columns={columns}
        pagination={false}
        rowKey="_id"
      />
    </div>
  );
};

export default ProductList;
