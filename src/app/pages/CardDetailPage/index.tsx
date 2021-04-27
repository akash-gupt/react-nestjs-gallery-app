import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CardDetailPage = () => {
  const [order, setOrder] = useState<any>();
  const params = useParams<any>();
  const orderId = params?.id;

  useEffect(() => {
    if (orderId) {
      loadData();
    }
  }, [orderId]);

  const loadData = () => {
    // const found = data.find(p => p['Original Order ID'] === orderId);
    // setOrder(found);
  };

  return (
    <Fragment />

    // <Descriptions title="Order Info">
    //   <Descriptions.Item label="Partner Name">
    //     {order?.['Partner Name']}
    //   </Descriptions.Item>
    //   <Descriptions.Item label="Original Order ID">
    //     {order?.['Original Order ID']}
    //   </Descriptions.Item>
    //   <Descriptions.Item label="Original Order Date">
    //     {order?.['Original Order Date']}
    //   </Descriptions.Item>
    //   <Descriptions.Item label="Qty">
    //     {order?.['Individual Qty']}
    //   </Descriptions.Item>
    //   <Descriptions.Item label="Location Name">
    //     {order?.['Location Name']}
    //   </Descriptions.Item>
    //   <Descriptions.Item label="Tracking/Pro">
    //     {order?.['Tracking/Pro #']}
    //   </Descriptions.Item>
    // </Descriptions>
  );
};

export default CardDetailPage;
