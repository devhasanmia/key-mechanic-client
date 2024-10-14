import { Layout, Menu } from "antd";
import MessageList from '../../pages/MassageList';


const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "dashboard",
    label: "Dashboard",
  },
  {
    key: "Product Manager",
    label: "Product Manager",
  },
  {
    key: "order-manager",
    label: "Order Manager"
  },
  {
    key: "Contact Us",
    label: "Contact Us"
  }
];

const Dashboard = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        style={{ background: "#001529" , minWidth: "230px"}}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            padding: "16px",
            fontSize: "24px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ margin: 0 }}>
            Key <span style={{ color: "#1677ff" }}>Mechanic</span>
          </p>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          items={items}
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            background: "#001529",
          }}
        />
      </Sider>
      <Layout>
        <Header></Header>
        <Content style={{ margin: "24px 16px 0", background: "#f0f2f5" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
        <MessageList/>
          </div>
        </Content>
        <Footer style={{ textAlign: "center", background: "#f0f2f5" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
