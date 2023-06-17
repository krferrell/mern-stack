import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import HomePage from './pages/homePage';
import { BrowserRouter as Router } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import SignUp from './pages/sign-up';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route index element={<App />} />
          <Route path='login' element={<Login />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route
            path='home'
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
