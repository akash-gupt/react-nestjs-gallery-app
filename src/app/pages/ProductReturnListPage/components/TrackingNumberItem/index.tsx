import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export type TrackingNumberItemProps = {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
};

const TrackingNumberItem = (props: TrackingNumberItemProps) => {
  const { children, selected, onClick } = props;

  return (
    <Container onClick={onClick} selected={selected}>
      {children}
    </Container>
  );
};

export default TrackingNumberItem;

const Container = styled.div`
  padding: 1em;
  background: ${(props: { selected?: boolean }) =>
    props?.selected ? 'red' : 'papayawhip'};
  width: 200px;
  font-weight: bold;
  font-size: 15px;
  display: inline-block;
  border-right: 1px solid;
  text-align: center;
  cursor: pointer;
`;
