import React from 'react';
import {BrowserRouter,Route,Routes,Link,Outlet} from "react-router-dom";
import Home from './Home';


const App=()=>{
  const BlogPosts = {
    '1': {
      page: "/",
      title: '第一頁',
      description: '練習中...'
    },
    '2': {
      page: "/",
      title: '第二頁',
      description: '實踐中...'
    },
  };
  return(
    <BrowserRouter>
      <nav style={{ margin: 10 }}>
        <ul>
          {Object.entries(BlogPosts).map(([slug, {page, title }]) => (
            <li key={slug}>
              <Link to={`/${slug}`} style={{ padding: 5 }}>
                {title}
                <Outlet />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":slug" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;