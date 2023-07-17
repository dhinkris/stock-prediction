import React, { useState } from 'react';
import { Layout, Menu, Row, Col, Typography } from 'antd';
import Trendline from '../components/trendline'
import Sentiment from '../components/sentiment'
import TopGainers from '../components/gainers'
import TopLosers from '../components/losers'

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    // <Layout style={{ minHeight: '100vh' }}>
    //   <Sider collapsible collapsed={collapsed} onCollapse={toggleSidebar}>
    //     {/* Sidebar Content */}
    //     <Menu theme="dark" mode="inline">
    //       {/* Add your sidebar menu items here */}
    //       <Menu.Item key="1">Menu Item 1</Menu.Item>
    //       <Menu.Item key="2">Menu Item 2</Menu.Item>
    //       {/* Add more menu items as needed */}
    //     </Menu>
    //   </Sider>
    //   <Layout>
    //     <Header style={{ background: '#fff', padding: 0 }}>
    //       {/* Navbar Content */}
    //       {/* Add your navbar content here */}
    //     </Header>
    //     <Content style={{ margin: '16px' }}>
    //       <Row>
    //         <Col span={12}>
    //           <Trendline/>
    //         </Col>
    //         <Col span={12}>
    //           <Sentiment/>
    //         </Col>
    //       </Row>
    //       <Row>
    //         <Col span={12}>
    //           {/* <Title level={2}>Sentiment Score Visualization</Title> */}
    //           <TopGainers/>
    //         </Col>
    //       </Row>
    //       {/* Dynamically Updating Content */}
    //       {/* Replace the following line with your dynamically updating content */}
         
    //       {/* <SentimentVisualization/> */}
    //     </Content>
    //   </Layout>
    // </Layout>
    <>
    {/* <Row>
      <Col span={24}>col</Col>
    </Row>
    <Row>
      <Col span={12}><Trendline/></Col>
      <Col span={12}><Sentiment/></Col>
    </Row> */}
    <Row>
      <Col span={12}><TopGainers/></Col>
      <Col span={12}><TopLosers/></Col>
    </Row>
    
  </>
  );
};

export default MainLayout;
