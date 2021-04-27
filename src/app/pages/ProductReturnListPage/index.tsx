import './index.scss';

import { Button, Flex, List, SearchBar } from 'antd-mobile';
import ListItem from 'antd-mobile/lib/list/ListItem';
import AppHeader from 'app/components/AppHeader';
import ProductReturnService from 'data/services/ProductReturnService';
import { ProductReturnType, ServerPaginationType } from 'data/types';
import { useArrayState } from 'hooks/useArrayState';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router';

import ProductReturnItem from './components/ProductReturnItem';

export function ProductReturnListPage() {
  const [items, setItems, resetItems] = useArrayState<ProductReturnType>(
    'id',
    [],
  );
  const [pagination, setPagination] = useState<ServerPaginationType>();
  const history = useHistory();
  const [searchText, setSearchText] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, [searchText]);

  const loadData = async (page = 1) => {
    try {
      setLoading(true);
      const { data, pagination } = await ProductReturnService.getProductReturns(
        {
          page,
          q: searchText,
        },
      );

      if (page === 1) {
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

      <SearchBar
        placeholder="Search by Item Name"
        onChange={setSearchText}
        cancelText="Cancel"
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
