import Landing from './pages/landingPage/landing'
import Articles from './pages/articles/articles';
import NotFound from './pages/404/404';
import FirstArticle from './pages/article/designPattern';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="article/designPatterns" element={<FirstArticle />} />
        {/* Fallback route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
