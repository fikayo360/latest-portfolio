import { Link } from "react-router-dom"
import './articles.css'
const Articles = () => {

      const ismobile = () => window.innerWidth < 768

      const today = new Date()

      const formatDate = (date) => {
        const currentDate = date;
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const year = String(currentDate.getFullYear()).slice(-2); 
        
        const formattedDate = `${month}/${day}/${year}`;
        return formattedDate
      }

    return (
        <section id="articles">
            <div id='articlesWrap'>
                <h1 className="fs-500">Fikayo's engineering blog</h1>
                
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

                    <Link to='/article/singleton-design-pattern'>
                    <div className='articles'>
                        <div className="articlesUp">
                            <img src="https://refactoring.guru/images/patterns/content/singleton/singleton-3x.png" 
                            style={{ width: '100%',height:'100%' }} />
                        </div>
                        <div className="down">
                            <h1 className="fs-500">Singleton Design pattern </h1>
                            <p className="truncate">
                            The Singleton Design Pattern is one of the most commonly used patterns in software development. 
                            It ensures that a class has only one instance while providing a global point of access to that instance. 
                            This pattern is particularly useful when managing shared resources,
                            such as configuration settings or a logging mechanism, where multiple instances could lead to inconsistency or excessive resource usage.
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