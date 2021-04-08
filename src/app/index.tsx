/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import './index.scss';

import Layout, { Content, Header } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CardDetailPage from './pages/CardDetailPage';
import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Target Tracking App"
        defaultTitle="Target Tracking App"
      >
        <meta name="description" content="Target Tracking App" />
      </Helmet>

      <Layout>
        <Header>Target Return App</Header>
        <Content className="site-layout">
          <Switch>
            <Route
              exact
              path={process.env.PUBLIC_URL + '/'}
              component={HomePage}
            />
            <Route exact path={'/card/:id'} component={CardDetailPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}
