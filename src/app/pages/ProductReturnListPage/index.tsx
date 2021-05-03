import './index.scss';

import { Button, Flex, List } from 'antd-mobile';
import ListItem from 'antd-mobile/lib/list/ListItem';
import AppHeader from 'app/components/AppHeader';
import ProductReturnService from 'data/services/ProductReturnService';
import { ProductReturnType, ServerPaginationType } from 'data/types';
import { useArrayState } from 'hooks/useArrayState';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import ProductReturnItem from './components/ProductReturnItem';
import TrackingNumberList from './components/TrackingNumberList';

export function ProductReturnListPage() {
  const [items, setItems, resetItems] = useArrayState<ProductReturnType>(
    'id',
    [],
  );
  const [pagination, setPagination] = useState<ServerPaginationType>();
  // const [searchText, setSearchText] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState<string>();

  useEffect(() => {
    trackingNumber && loadData();
  }, [trackingNumber]);

  const loadData = async (page = 0) => {
    try {
      setLoading(true);
      const { data, pagination } = await ProductReturnService.getProductReturns(
        {
          page,
          tracking_number: trackingNumber,
        },
      );

      if (page === 0) {
        resetItems(data);
      } else {
        setItems(data);
      }

      setPagination(pagination);
    } catch (error) {
      ///
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderCard = (cardData: ProductReturnType, i: number) => {
    return <ProductReturnItem key={i} item={cardData} />;
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Target Plus App" />
      </Helmet>

      <AppHeader
        onRefreshClick={() => {
          loadData();
        }}
      />

      <TrackingNumberList
        onSelect={setTrackingNumber}
        selectedValue={trackingNumber}
      />

      <List className="my-list">
        {items.map((item, i) => renderCard(item, i))}
        {pagination?.hasNextPage && (
          <ListItem>
            <Flex justify="center">
              <Button
                size="small"
                type="warning"
                style={{ width: 100 }}
                loading={loading}
                onClick={() => {
                  loadData(pagination.nextPage);
                }}
              >
                Load More
              </Button>
            </Flex>
          </ListItem>
        )}
      </List>
    </>
  );
}
