import { Badge, Button, Layout, Menu } from "antd";

import { Link, NavLink, Outlet } from "react-router-dom";


const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "dashboard",
    label: <NavLink to={"/dashboard"}>Dashboard</NavLink>,
  },
  {
    key: "Product Manager",
    label: "Product Manager",
    children: [
      {
        key: "Product List",
        label: <NavLink to={"/dashboard/product-list"}>Product List</NavLink>
      },
      {
        key: "add-product",
        label: <NavLink to={"/dashboard/add-product"}>Add Product</NavLink>
      },
    ]
  },
  {
    key: "order-manager",
    label: "Order Manager"
  },
];

const DashboardLayout = () => {
  return (
    <Layout >
      <Sider
        style={{ background: "#001529", minWidth: "230px" }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Link to={"/"}><div
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
        </div></Link>
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
        <Header>
          <div style={{ textAlign: "right" }}> <Badge count={5}>
            <Link to={"/dashboard/messages"}><Button type="primary">Message</Button></Link>
          </Badge></div>
        </Header>
        <Content style={{ margin: "24px 16px 0", background: "#f0f2f5" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center", background: "#f0f2f5" }}>
          &copy; {new Date().getFullYear()} Key Mechanic All rights reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
