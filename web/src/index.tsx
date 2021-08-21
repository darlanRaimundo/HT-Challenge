import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './components/AppWrapper';
import Home from './pages/Home';
import NewCut from './pages/NewCut';
import ListVideos from './pages/ListVideos';
import { routes } from './routes';

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper>
      <Home path={routes.home} />
      <NewCut path={routes.newCut} />
      <ListVideos path={routes.list} />
      <></>
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
