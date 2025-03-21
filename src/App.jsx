import Landing from './pages/landingPage/landing'
import Articles from './pages/articles/articles';
import NotFound from './pages/404/404';
import FirstArticle from './pages/article/designPattern';
import { PriceMonitor } from './pages/article/pricemonitoringbot';
import RealEstateListings from './pages/article/realEstateListings';
import JobScrapping from './pages/article/jobScrapping';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="article/designPatterns" element={<FirstArticle />} />
        <Route path="article/Building a price monitoring bot" element={<PriceMonitor/>} />
        <Route path="article/Building a real estate listings scrapper" element={<RealEstateListings/>} />
        <Route path="article/job scrapping bot" element={<JobScrapping/>} />
        {/* Fallback route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
