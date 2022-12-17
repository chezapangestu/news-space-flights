import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
// import Navbar from './component/Navbar';
import { 
  createBrowserRouter, 
  RouterProvider, 
  Route, 
  createRoutesFromElements
} from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:id" element={<BlogDetail />}></Route>
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
