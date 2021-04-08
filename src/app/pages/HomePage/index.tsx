import { Card, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router';

import { data } from './data.json';

const { Search } = Input;

type DataType = typeof data[0];

export function HomePage() {
  const [orders, setOrders] = useState<Array<DataType>>([]);
  const history = useHistory();

  useEffect(() => {
    setOrders(data);
  }, []);

  const onSearch = (value: string) => {
    console.log(value);
    if (value === '') {
      setOrders(data);
    } else {
      var search = new RegExp(value, 'i');
      const filtered = orders.filter(p =>
        search.test(p['Partner Name'].toLowerCase()),
      );
      setOrders(filtered);
    }
  };

  const navigateToDetail = (orderNumber: string) => {
    history.push(`/card/${orderNumber}`);
  };

  const renderCard = (cardData: typeof data[0], i: number) => {
    return (
      <Card
        key={i.toString()}
        onClick={() => {
          navigateToDetail(cardData['Original Order ID']);
        }}
      >
        <p>
          <b>{cardData['Partner Name']}</b>
        </p>
        <p>{cardData['Original Order ID']}</p>
        <p>{cardData['Location Name']}</p>
        <p>Shippable - {cardData['Shippable']}</p>
      </Card>
    );
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Target Tracking App" />
      </Helmet>

      <div className="search-container">
        <Search
          size="large"
          placeholder="Search by Partner Name"
          allowClear
          onSearch={onSearch}
          style={{ width: '300px' }}
          onChange={e => {
            onSearch(e.target.value);
          }}
        />
      </div>
      <div>{orders.map((cardData, i) => renderCard(cardData, i))}</div>
    </>
  );
}
