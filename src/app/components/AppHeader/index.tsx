import { Button, NavBar } from 'antd-mobile';
import React from 'react';

type AppHeaderProps = {
  onRefreshClick: () => void;
};

const AppHeader = (props: AppHeaderProps) => {
  const { onRefreshClick } = props;

  return (
    <div>
      <NavBar
        mode="light"
        rightContent={[
          <Button
            type="primary"
            size="small"
            onClick={onRefreshClick}
            key={'refreshButton'}
          >
            Refresh
          </Button>,
        ]}
      >
        <h3>Target App</h3>
      </NavBar>
    </div>
  );
};

export default AppHeader;
