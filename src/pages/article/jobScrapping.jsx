const JobScrapping = () => {
    return (
        <section className='article'>
        <div className='articleWrap'>
            <h1 className='headerTxt'>Building a Job Listings Scraper with Puppeteer</h1>
            <h1 className='fs-200'>15 minutes read</h1>
            
            <img src="/jp1.png" 
            alt="price monitoring bot" className='.articleImg articleContentMargin'/>

            <p className='mb2'>
             Web scraping is a powerful tool for automating data collection, and in this project, 
             we built a bot using Puppeteer to periodically scrape job listings from Glassdoor.com.
             The bot extracts key job attributes such as titles,
             companies, salaries, and descriptions, then saves them in a structured spreadsheet file.
             Here’s a brief overview of the steps we took to complete this project:
            </p>

            <h1 >Step 1: Setting Up Puppeteer</h1>
            <img src="/jobss.png" 
            alt="price monitoring bot" className='.articleImg articleContentMargin'/>
            <p className="mb2">We began by installing Puppeteer, a Node.js library that provides a headless browser for web automation.
                Setting up Puppeteer involved configuring a browser instance and ensuring smooth navigation to Glassdoor’s job listings page.
            </p>

            <h1 >Step 2: Automating the Login Process</h1>
            <img src="/jp3.png" alt="price monitoring bot" className='.articleImg articleContentMargin'/>
            <p className="mb2">
            Since Glassdoor requires authentication to access detailed job information, we automated the login process using Puppeteer.
            This involved filling out the login form with stored credentials and handling any security challenges like CAPTCHAs.
            </p>

            <h1 >Step 3: Navigating and Extracting Data</h1>
            <img src="/jp.png" alt="price monitoring bot" className='.articleImg articleContentMargin'/>
            <p className="mb2">
            Once logged in, the bot navigates to job listing pages, iterating through multiple job postings. 
            Using Puppeteer’s DOM manipulation methods, we extracted relevant details, including job title, company name, salary (if available), and job description.
            </p>

            <h1 >Step 4: Handling Pagination</h1>
            <p className="mb2">
            To ensure comprehensive data collection, we implemented pagination logic. 
            The bot automatically detects and clicks the “Next” button to scrape multiple pages of job listings.
            </p>

            <h1 >Step 5: Data Storage in a Spreadsheet</h1>
            <img src="/jobs1.png" alt="price monitoring bot" className='.articleImg articleContentMargin'/>
            <p className="mb2">
            After gathering the required job details, we formatted the data into a structured format and saved it in a spreadsheet (CSV file) 
            using the fs module and xlsx package in Node.js. This allows for easy data analysis and sharing.
            </p>

            <h1 >Step 6: Scheduling Periodic Scraping</h1>
            <p className="mb2">
            To keep the job listings up-to-date, we scheduled the bot to run at regular intervals 
            using Node.js’s built-in cron jobs or external task schedulers. This ensures fresh data is always available.
            </p>

            <h1 >Conclusion</h1>
            <p className="mb2">
            With Puppeteer, we successfully automated job data extraction from Glassdoor, storing valuable information in a structured format.
            This bot can be further enhanced by integrating filters, 
            notifications, or even database storage for advanced use cases. Web scraping remains a game-changer for automating market research and data-driven decision-making.
            </p>

        </div>
        </section>
    )
}

export default JobScrapping