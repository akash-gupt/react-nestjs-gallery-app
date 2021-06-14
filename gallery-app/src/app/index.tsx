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
import { GalleryPage } from './pages/GalleryPage';

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - Gallery App" defaultTitle="Gallery App">
        <meta name="description" content="Gallery App" />
      </Helmet>

      <section className="site-layout">
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + '/'}
            component={GalleryPage}
          />

          <Route component={GalleryPage} />
        </Switch>
      </section>
    </BrowserRouter>
  );
}
