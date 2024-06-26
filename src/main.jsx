import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';
import Install from './pages/Install';
import About from './pages/About';

const theme = createTheme({
  typography: {
    fontFamily: "Optima"
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h4' },
          style: {
            fontSize: '20px',
          },
        },
        {
          props: { variant: 'h1' },
          style: {
            fontSize: '64px',
            color: "#d0312d",
            fontWeight: 500
          },
        },
        {
          props: { variant: 'h2' },
          style: {
            fontSize: '28px',
            color: "white",
            fontWeight: 500
          },
        },
      ],
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1e211e",
          color: "white"
        }
      }
    }
  }
});

const router = createBrowserRouter([
  {
    path: "/ryukooni",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "install",
        element: <Install />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
