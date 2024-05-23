import React from 'react';
import ReactDOM from 'react-dom/client';

// Style
import './styles/index.css';
import './styles/components.css';
import './styles/responsive.css';

// Report Web Vitals
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Page Components
import App from './App';
import Write from "./components/page/Write";
import PostDetail from "./components/page/PostDetail";
import Home from "./components/page/Home";

// 라우팅(페이지) 설정
const router = createBrowserRouter([
    {
        path: '/', element: <App/>,
        children: [
            {index: true, element: <Home/>},
            {path: '/writing', element: <Write/>},
            {path: '/posts/:id/:title', element: <PostDetail/>},
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('blog'));
root.render(<RouterProvider router={router}/>);
reportWebVitals();