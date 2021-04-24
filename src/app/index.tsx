/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import './index.scss';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CardDetailPage from './pages/CardDetailPage';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { ReportRequestListPage } from './pages/ReportRequestListPage/Loadable';

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Target Tracking App"
        defaultTitle="Target Tracking App"
      >
        <meta name="description" content="Target Tracking App" />
      </Helmet>

      <section className="site-layout">
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + '/'}
            component={ReportRequestListPage}
          />
          <Route exact path={'/card/:id'} component={CardDetailPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </section>
    </BrowserRouter>
  );
}
