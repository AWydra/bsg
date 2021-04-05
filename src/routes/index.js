import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLoader from 'components/molecules/PageLoader/PageLoader';

const Home = lazy(() => import('views/Home/Home'));
const Login = lazy(() => import('views/Login/Login'));
const Play = lazy(() => import('views/Play/Play'));
const NotFound = lazy(() => import('views/NotFound/NotFound'));

const Routes = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/play/:id" component={Play} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
