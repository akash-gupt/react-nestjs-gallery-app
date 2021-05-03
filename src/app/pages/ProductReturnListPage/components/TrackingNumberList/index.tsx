import { Button } from 'antd-mobile';
import ProductReturnService from 'data/services/ProductReturnService';
import { ServerPaginationType, TrackingNumberType } from 'data/types';
import { useArrayState } from 'hooks/useArrayState';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import TrackingNumberItem from '../TrackingNumberItem';

type Props = {
  onSelect: (tracking_number: string) => void;
  selectedValue?: string;
};

const TrackingNumberList = (props: Props) => {
  const { onSelect, selectedValue } = props;
  const [items, setItems, resetItems] = useArrayState<TrackingNumberType>(
    'tracking_number',
    [],
  );
  const [pagination, setPagination] = useState<ServerPaginationType>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async (page = 0) => {
    try {
      setLoading(true);
      const {
        data,
        pagination,
      } = await ProductReturnService.getTrackingNumbers({
        page,
      });

      if (page === 1) {
        resetItems(data);
      } else {
        setItems(data);

        // call first item
        if (data.length > 0) {
          onSelect(data[0].tracking_number);
        }
      }

      setPagination(pagination);
    } catch (error) {
      ///
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      {items.map(p => (
        <TrackingNumberItem
          onClick={() => {
            onSelect(p.tracking_number);
          }}
          selected={
            !!selectedValue && p.tracking_number.includes(selectedValue ?? '')
          }
        >
          {p.tracking_number}
        </TrackingNumberItem>
      ))}

      {pagination?.hasNextPage && (
        <TrackingNumberItem>
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
        </TrackingNumberItem>
      )}
    </Container>
  );
};

export default TrackingNumberList;

const Container = styled.div`
  overflow: auto;
  white-space: nowrap;
`;
