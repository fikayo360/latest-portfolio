import './article.css'

const RealEstateListings = () => {
    return (
        <section className='article'>
        <div className='articleWrap'>
            <h1 className='headerTxt'>Building a Real Estate Listings Scraper: A Step-by-Step Guide</h1>
            <h1 className='fs-200'>15 minutes read</h1>
            
            <img src="/estate1.png"
            alt="price monitoring bot" className='.articleImg articleContentMargin'/>

            <p className='mb2'>In the competitive real estate market, having access to the latest property listings can give businesses and individuals a significant edge. Whether you're a real estate investor, a market researcher, or a developer building a property comparison tool, a real estate listings scraper can automate the process of collecting property data from websites. 
            Here's how we built a real estate scraper, the steps we followed, and the benefits it offers.</p>

            <h1>The purpose of the Scrapper </h1>
            <h1>The scraper was designed to collect property details such as:</h1>
            <ul className='mb2'>
                <li>Property title</li>
                <li>Location</li>
                <li>Price</li>
                <li>Number of bedrooms and bathrooms</li>
                <li>Listing url's</li>
            </ul>

            <h1>The target website </h1>
            <img src="/estate2.png" />
            <p className='mb2'>the target website we would be scraping from is realtor.com. We would be scrapping listings from various cities on the website.</p>

            <h1> Set Up the Development Environment </h1>
            <h1>Technologies used</h1>
            <ul className='mb2'>
                <li>Programming Language: Node.js</li>
                <li>Web Scraping Library: Puppeteer</li>
                <li>Data Storage: JSON and CSV for small-scale data; a database like PostgreSQL for larger datasets</li>
            </ul>


            <h1>The Website's Structure </h1>
            <img src='/estate3.png' />
            <p className='mb2'>Using browser developer tools, we inspected the HTML structure of the target websites to locate key elements like property titles, prices, and locations.
            We noted the classes, IDs, and tags of the elements we needed to extract.
            </p>

            <h1>The Scraping Script</h1>
            <img src='/real2.png'/>
            <h1>The script would do the following</h1>
            <ul className='mb2'>
                <li>Launch a browser instance</li>
                <li>Navigate to the target website.</li>
                <li>Extract property data using DOM selectors.</li>
                <li>Handle pagination to scrape multiple pages of listings.</li>
            </ul>

            <h1>Handling dynamic content</h1>
            <p className='mb2'>Since many real estate websites load data dynamically, we used Puppeteer to wait for specific elements to load before extracting data.We incorporated delays and retries to ensure the scraper could handle varying load times.</p>

            <h1> Storing the Scraped Data</h1>
            <img src='/realestate.png' />
            <p className='mb2'> For storage the collected data was stored in a structured format, including CSV For simple, shareable data outputs.</p>

            <h1>Deploying the Scraper </h1>
            <p>The scraper was deployed on a server to run periodically, ensuring up-to-date property listings. Scheduled jobs (e.g., using cron) to run the scraper at specific intervals.</p>
        </div>
        </section>
    )
}

export default RealEstateListings