import './index.scss';

import { Flex } from 'antd-mobile';
import ListItem from 'antd-mobile/lib/list/ListItem';
import { ReportRequestType } from 'data/types';
import React from 'react';
import styled from 'styled-components';

type Props = {
  item: ReportRequestType;
};

const ReportRequestItem = (props: Props) => {
  const { item } = props;

  return (
    <div>
      <ListItem
        onClick={() => {
          //
        }}
        arrow="horizontal"
      >
        <Flex>
          <Flex.Item>
            <Title>Type:</Title>
          </Flex.Item>
          <Flex.Item>
            <Description> {item.type}</Description>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>
            <Title>Status:</Title>
          </Flex.Item>
          <Flex.Item>
            <Description> {item.status}</Description>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>
            <Title>Start Date:</Title>
          </Flex.Item>
          <Flex.Item>
            <Description> {item.start_date}</Description>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>
            <Title> Last Modified Date:</Title>
          </Flex.Item>
          <Flex.Item>
            <Description> {item.last_modified}</Description>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>
            <Title> Last Modified By:</Title>
          </Flex.Item>
          <Flex.Item>
            <Description> {item.last_modified_by}</Description>
          </Flex.Item>
        </Flex>
      </ListItem>
    </div>
  );
};

export default ReportRequestItem;

const Title = styled.div`
  font-size: 14px;
  font-weight: 800;
`;

const Description = styled.div`
  font-size: 13px;
`;
