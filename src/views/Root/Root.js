// @ts-nocheck
import React from 'react';
import { Router } from 'react-router-dom';
import Routes from 'routes';
import { AuthProvider } from 'context/AuthContext';
import { VideosProvider } from 'context/VideosContext';
import MainTemplate from 'templates/MainTemplate';
import history from 'utils/history';

const Root = () => (
  <Router history={history}>
    <AuthProvider>
      <VideosProvider>
        <MainTemplate>
          <Routes />
        </MainTemplate>
      </VideosProvider>
    </AuthProvider>
  </Router>
);

export default Root;
