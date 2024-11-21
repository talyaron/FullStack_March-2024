import {createBrowserRouter} from 'react-router-dom'
import Page1 from './view/page1/Page1';
import Page2 from './view/page2/Page2';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello World</div>,
    },
])