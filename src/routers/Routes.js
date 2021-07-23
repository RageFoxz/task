import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { CardPage } from '../components/CardPage/CardPage';
import { Cards } from '../components/Cards/Cards';
import { NotFoundPage } from '../components/NotFoundPage/NotFoundPage';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Cards} />
      <Route path="/404" component={NotFoundPage} />
      <Route path="/card-page/:id" component={CardPage} />
      <Redirect to="/404" />
    </Switch>
  );
};
