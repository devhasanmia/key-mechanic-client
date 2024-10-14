import { Table } from "antd";
import { useGetAllMessageQuery } from "../redux/features/contact/contactApi";

const MessageList = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
    },
  ];

  const { data, isLoading, isError } = useGetAllMessageQuery(undefined);

  if (isLoading) {
    return <p>Loading.......</p>;
  }
  if (isError || !data?.data) {
    return <p>Data Not Found</p>;
  }
  return <Table dataSource={data.data} columns={columns}  pagination={false}/>;
};

export default MessageList;
