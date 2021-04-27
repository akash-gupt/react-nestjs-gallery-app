import './index.scss';

import { Flex } from 'antd-mobile';
import ListItem from 'antd-mobile/lib/list/ListItem';
import { ProductReturnType } from 'data/types';
import React from 'react';
import styled from 'styled-components';

type Props = {
  item: ProductReturnType;
};

const ProductReturnItem = (props: Props) => {
  const { item } = props;

  return (
    <div>
      <ListItem
        onClick={() => {
          //
        }}
        arrow="horizontal"
      >
        <div>
          <Flex>
            <Flex.Item>
              <Title> Tracking Data:</Title>
            </Flex.Item>
            <Flex.Item>
              {item.tracking_data && item.tracking_data.length > 0 ? (
                item.tracking_data.map((tracking, index) => (
                  <Description> {tracking.tracking_number}</Description>
                ))
              ) : (
                <Description>NA</Description>
              )}
            </Flex.Item>
          </Flex>
        </div>

        <Flex>
          <Flex.Item>
            <Title>Order Number:</Title>
          </Flex.Item>
          <Flex.Item>
            <Description> {item.order_number}</Description>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>
            <Title> Order Id:</Title>
          </Flex.Item>
          <Flex.Item>
            <Description> {item.order_id}</Description>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>
            <Title> Quantity:</Title>
          </Flex.Item>
          <Flex.Item>
            <Description> {item.quantity}</Description>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>
            <Title>Return order number:</Title>
          </Flex.Item>
          <Flex.Item>
            <Description> {item.return_order_number}</Description>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>
            <Title>Tcin:</Title>
          </Flex.Item>
          <Flex.Item>
            <Description> {item.tcin}</Description>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>
            <Title> Return Reason:</Title>
          </Flex.Item>
          <Flex.Item>
            <Description> {item.return_reason}</Description>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>
            <Title> Return Date:</Title>
          </Flex.Item>
          <Flex.Item>
            <Description> {item.return_date}</Description>
          </Flex.Item>
        </Flex>
      </ListItem>
    </div>
  );
};

export default ProductReturnItem;

const Title = styled.div`
  font-size: 14px;
  font-weight: 800;
`;

const Description = styled.div`
  font-size: 13px;
`;
