import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Typography } from 'antd';

const { Title } = Typography;

const TopGainersLosersTable = () => {
  const [data, setData] = useState({ topGainers: [], topLosers: [] });

  // Function to fetch the data
  const fetchData = async () => {
    const api_key = 'RQPSPW558N6I2L92';
    const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo`;

    try {
      const response = await axios.get(url);
      const { top_gainers: topGainers, top_losers: topLosers } = response.data;
      setData({ topGainers, topLosers });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []); // Empty dependency array means it runs only once

  // Define columns for the table
  const columns = [
    {
      title: 'Symbol',
      dataIndex: 'ticker',
      key: 'ticker',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Changes',
      dataIndex: 'change_amount',
      key: 'change_amount',
    },
    {
      title: 'Changes Percentage',
      dataIndex: 'change_percentage',
      key: 'change_percentage',
    },
  ];

  return (
    <div>
      <Title level={2}>Top Gainers and Losers</Title>
      <h3>Top Gainers</h3>
      <Table dataSource={data.topGainers} columns={columns} pagination={false} rowKey="ticker" />

      {/* <h3>Top Losers</h3>
      <Table dataSource={data.topLosers} columns={columns} pagination={false} rowKey="ticker" /> */}
    </div>
  );
};

export default TopGainersLosersTable;
