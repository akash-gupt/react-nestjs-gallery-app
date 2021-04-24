import './index.scss';

import { Button, Flex, List, SearchBar } from 'antd-mobile';
import ListItem from 'antd-mobile/lib/list/ListItem';
import AppHeader from 'app/components/AppHeader';
import ReportRequestService from 'data/services/ReportRequestService';
import { ReportRequestType, ServerPaginationType } from 'data/types';
import { useArrayState } from 'hooks/useArrayState';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router';

import ReportRequestItem from './components/ReportRequestItem';
import { data } from './data.json';

export function ReportRequestListPage() {
  const [items, setItems, resetItems] = useArrayState<ReportRequestType>(
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
      const { data, pagination } = await ReportRequestService.getReportRequests(
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
    } finally {
      setLoading(false);
    }
  };

  const navigateToDetail = (orderNumber: string) => {
    history.push(`/card/${orderNumber}`);
  };

  const renderCard = (cardData: ReportRequestType, i: number) => {
    return <ReportRequestItem key={i} item={cardData} />;
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Target Plus App" />
      </Helmet>

      <AppHeader onRefreshClick={loadData} />

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
