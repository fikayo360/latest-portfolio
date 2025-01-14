import Carousel from "../carousel/carousel"
import './projects.css'
import projectImages from "../../images"

const Projects = () => {
    return (
        <section id="projects">
            <div id="projectsWrap">
                <h1>My Projects</h1>
                <div className='project'>
                    <div className='projectUp'>
                        <h1>Job scrapper</h1>
                        <div><a href="https://github.com/fikayo360/web-scrapping-projects/blob/main/glassdoor.js">github</a><img /></div>
                   </div>
                   <div className="projectDown">
                        <div className="pdWrap">
                            <div className="pdWrapLeft">
                                <h1>#Web scrapping #browser automation</h1>
                                <p className="fs-400">
                                Description: Built a bot using Puppeteer to peridoically scrape job listings, from Glassdoor.com 
                                it ascrapes attributes including job titles, companies, salaries, and descriptions. and saves it in a spreadsheet file.
                                </p>
                            </div>
                            <Carousel images={projectImages[0].images}/>
                        </div>
                   </div>
                </div>

                <div className='project'>
                    <div className='projectUp'>
                        <h1>wallet api</h1>
                        <div><a href="https://github.com/fikayo360/fintechAppServer">github</a><img /></div>
                   </div>
                   <div className="projectDown">
                        <div className="pdWrap">
                            <div className="pdWrapLeft">
                                <h1>#Api's #node js #express js #postgres #database transactions</h1>
                                <p className="fs-400">
                                Description: Designed and implemented a robust API to handle digital wallet functionalities, 
                                including user authentication, wallet balance management, transaction tracking, and fund transfers.
                                </p>
                               
                            </div>
                            <Carousel images={projectImages[1].images} />
                        </div>
                   </div>
                </div>

            

                <div className='project'>
                    <div className='projectUp'>
                        <h1>real estate scrapper</h1>
                        <div><a href="https://github.com/fikayo360/web-scrapping-projects/blob/main/realEstateListings.js">github</a><img /></div>
                   </div>
                   <div className="projectDown">
                        <div className="pdWrap">
                            <div className="pdWrapLeft">
                            <h1>#Web scrapping #browser automation</h1>
                                <p className="fs-400">
                                Description: peridoically extract data from real estate sites like Realtor.com, capturing property details such as price, location, and features.
                                and tabulates the results in a spreadsheet.
                                </p>
                               
                            </div>
                            <Carousel images={projectImages[2].images}/>
                        </div>
                   </div>
                </div> 

                <div className='project'>
                    <div className='projectUp'>
                        <h1>Price monitoring bot</h1>
                        <div><a href="https://github.com/fikayo360/web-scrapping-projects/blob/main/priceMonitor.js">github</a><img /></div>
                   </div>
                   <div className="projectDown">
                        <div className="pdWrap">
                            <div className="pdWrapLeft">
                                <h1>#Web scrapping #browser automation</h1>
                                <p className="fs-400">
                                Description: Created a bot to track and monitor prices of products across e-commerce platforms. the bot periodically checks for the prices of competing products 
                                it then compares the prices with the existing prices in the db to see if there is a change in the price.it also identifies other useful trends in the data.
                                </p>
                               
                            </div>
                            <Carousel images={projectImages[3].images}/>
                        </div>
                   </div>
                </div> 

                <div className='project'>
                    <div className='projectUp'>
                        <h1>NLP sentiment reviews </h1>
                        <div><a href="https://github.com/fikayo360/web-scrapping-projects/blob/main/trackingCustomerReviews.js">github</a><img /></div>
                   </div>
                   <div className="projectDown">
                        <div className="pdWrap">
                            <div className="pdWrapLeft">
                            <h1>#Web scrapping #browser automation #natural language processing(N.L.P)</h1>
                                <p className="fs-400">
                                Description: uses machine learning ( natural language processing) to anlayze Scraped customer product reviews to gauge customer sentiment whether 
                                its positive, negative or neutral.
                                </p>
                               
                            </div>
                            <Carousel images={projectImages[4].images}/>
                        </div>
                   </div>
                </div> 

                <div className='project'>
                    <div className='projectUp'>
                        <h1>chat messaging cli </h1>
                        <div><a href="https://github.com/fikayo360/commandLineChat">github</a><img /></div>
                   </div>
                   <div className="projectDown">
                        <div className="pdWrap">
                            <div className="pdWrapLeft">
                            <h1>#Web sockets #nodejs #command line interfaces #encryption </h1>
                                <p className="fs-400">
                                Description: An encrypted messaging command line interface application
                                </p>
                               
                            </div>
                            <Carousel images={projectImages[5].images}/>
                        </div>
                   </div>
                </div> 
            </div>
        </section>
    )
}

export default Projects