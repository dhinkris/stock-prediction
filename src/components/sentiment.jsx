import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from '@antv/g2plot';
import { Row, Col, Typography } from 'antd';

const { Title } = Typography;

const AlphaVantageLineChart = () => {
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!dataFetched) {
        // const api_key = 'RQPSPW558N6I2L92';
        const api_key = 'DCN121VZHX8G8AZ9';
        const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${api_key}`;

        try {
          const response = await axios.get(url);
          const data = response.data['feed'];
          if (!data) {
            console.error('Error fetching data: No data available');
            return;
          }
          // Convert the fetched data to an array of objects with "Date" and "scales" properties
          const chartData = data.map((_data) => {
            return {
              Date: _data['time_published'],
              scales: parseFloat(_data['overall_sentiment_score']), // Assuming '4. close' contains the desired scale value
            };
          });
          const minValue = Math.min(...chartData.map((entry) => entry.scales));
          const line = new Line('container', {
            data: chartData,
            padding: 'auto',
            xField: 'Date',
            yField: 'scales',
            yAxis: {
              min: minValue,
            },
            smooth: true,
          });

          line.render();
          setDataFetched(true); // Set the state to indicate that data has been fetched
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      const container = document.getElementById('container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [dataFetched]); // Effect will only run when dataFetched changes

  return <div id="container" style={{ height: 300 }} />;
};

export default AlphaVantageLineChart;
