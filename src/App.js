import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';
import { ToastContainer, cssTransition } from 'react-toastify';
import MainPage from './pages/MainPage';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'animate.css/animate.min.css';
import 'react-toastify/dist/ReactToastify.css';

// lazy-loading pages:

const Cards = lazy(() => import('./pages/CardsPage' /* webpackChunkName: "cards-page" */));
const Team = lazy(() => import('./pages/TeamPage' /* webpackChunkName: "team-page" */));
const SignUpForm = lazy(() => import('./pages/FormPage' /* webpackChunkName: "form-page" */));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage' /* webpackChunkName: "404-page" */));

const bounce = cssTransition({
  enter: 'animate__animated animate__jackInTheBox',
  exit: 'animate__animated animate__hinge',
});

function App() {
  return (
    <>
      <Suspense
        fallback={<Triangle height="300" width="300" color="#b00b69" ariaLabel="loading" />}
      >
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="cards" element={<Cards />} />
          <Route path="team" element={<Team />} />
          <Route path="form" element={<SignUpForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer transition={bounce} autoClose={3000} />
    </>
  );
}

export default App;
