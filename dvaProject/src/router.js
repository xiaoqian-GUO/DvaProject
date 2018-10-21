import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Lists from './routes/Lists';
import Counter from './routes/Counter';
import DeleteList from './routes/DeleteList';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/lists" exact component={Lists} />
        <Route path="/counter" exact component={Counter} />
        <Route path="/deleteList" exact component={DeleteList} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
