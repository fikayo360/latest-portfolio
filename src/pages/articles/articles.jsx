import { Link } from "react-router-dom"
import './articles.css'
const Articles = () => {

    return (
        <section id="articles">
            <div id='articlesWrap'>
                <h1 className="fs-500">Engineering blog</h1>
                
                    <Link to='/article/designPatterns'>
                    <div className='articles'>
                        <div className="articlesUp">
                            <img src="https://media.licdn.com/dms/image/D4D12AQFGap_FMpW-Cg/article-cover_image-shrink_720_1280/0/1703158015720?e=2147483647&v=beta&t=3DJzRcLt08G2Qu8TPqgKlmPLsm4AIcbjODWNyq8kaoo" 
                            style={{ width: '100%',height:'100%' }} />
                        </div>
                        <div className="down">
                            <h1 className="fs-500">Design patterns </h1>
                            <p className="truncate">
                            Design patterns are a vital part of software engineering, they offer battle tested solutions to common problems in software engineering. 
                            They act as templates for solving recurring issues, helping developers build more scalable, maintainable, 
                            and efficient software systems.
                            </p>
                            <div className="downBio"> <img src='fikayo.png'/><h1 className="fs-200">fikayo Adele</h1></div>
                        </div>
                    </div>
                    </Link>  
                    
                    <Link to='/article/Building a price monitoring bot'>
                    <div className='articles'>
                        <div className="articlesUp">
                            <img src="https://lh3.googleusercontent.com/1gF3wlTOwZbSXXoFbMg0b5EHNtLnQgxWCorZ29qIZFxNvSvxjYoCn1S5SewVVSh0US_quNnAv9VMmZ-hzcJZ3Ep1XA=s1280-w1280-h800" 
                            style={{ width: '100%',height:'100%' }} />
                        </div>
                        <div className="down">
                            <h1 className="fs-500">Builing an ecommerce price monitoring Bot</h1>
                            <p className="truncate">
                             In an era of dynamic pricing, staying updated on price changes is crucial for businesses and consumers alike.
                             Whether it’s for tracking competitor prices, monitoring product deals, or alerting users about price drops, a price monitoring bot can be a game-changer. 
                             This article walks you through building an efficient price monitoring bot using Node.js and Puppeteer, along with practical tips and use cases.
                            </p>
                            <div className="downBio"> <img src='fikayo.png'/><h1 className="fs-200">fikayo Adele</h1></div>
                        </div>
                    </div>
                    </Link>  

                    <Link to='/article/Building a real estate listings scrapper'>
                    <div className='articles'>
                        <div className="articlesUp">
                            <img src="/estate1.png" 
                            style={{ width: '100%',height:'100%' }} />
                        </div>
                        <div className="down">
                            <h1 className="fs-500">Builing a Real estate listings scrapper</h1>
                            <p className="truncate">
                            In the competitive real estate market, having access to the latest property listings can give businesses and individuals a significant edge.
                            Whether you're a real estate investor, a market researcher, or a developer building a property comparison tool, a real estate listings scraper can 
                            automate the process of collecting property data from websites. 
                            Here's how we built a real estate scraper, the steps we followed, and the benefits it offers.
                            </p>
                            <div className="downBio"> <img src='fikayo.png'/><h1 className="fs-200">fikayo Adele</h1></div>
                        </div>
                    </div>
                    </Link>  

                    <Link to='/article/job scrapping bot'>
                    <div className='articles'>
                        <div className="articlesUp">
                            <img src="/jp1.png" 
                            style={{ width: '100%',height:'100%' }} />
                        </div>
                        <div className="down">
                            <h1 className="fs-500">Builing a job scrapping bot</h1>
                            <p className="truncate">
                            Web scraping is a powerful tool for automating data collection, and in this project, we built a bot using Puppeteer to periodically scrape job listings from Glassdoor.com.
                            The bot extracts key job attributes such as titles, companies, salaries, and descriptions, then saves them in a structured spreadsheet file.
                            </p>
                            <div className="downBio"> <img src='fikayo.png'/><h1 className="fs-200">fikayo Adele</h1></div>
                        </div>
                    </div>
                    </Link>  

                </div>
        </section>
    )
}

export default Articles