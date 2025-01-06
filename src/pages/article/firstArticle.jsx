import './article.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';


const FirstArticle = () => {

    return (
        <section id="article">
            <div id='articleWrap'>
                <h1 className='headerTxt'>Tao of Node - Design, Architecture & Best Practices</h1>
                <h1>48 minute read</h1>
                <img src="https://res.cloudinary.com/papaio-live/image/upload/v1645436160/pexels-simon-hurry-8909877_abdkbb.jpg" alt="Slide 2" className='.articleImg articleContentMargin' />

                <h1 className='fs-500'>What is tao node</h1>
                <p className="">One of the main benefits of JavaScript is that it runs both in the browser and the server. 
                As an engineer you need to master a single language and your skills will have a variety of applications.
                This is what drew me to Node in 2015 - I didn’t have to switch between languages and tech stacks.
                </p>

                <p>Node allows you to reuse libraries, logic, and types across front-end and back-end applications. It gave rise to the full-stack developer
                 archetype - an engineer skillful enough 
                to work on any part of the application they are needed</p>

                <p>
                It grew from a questionable technology to one used for critical infrastructure in many large enterprises. It performs incredibly well for 
                high-volume IO operations with a much lower code complexity than 
                languages that rely on multi-threading.
                Node’s ecosystem is focused on freedom and flexibility, breaking away from the heavy frameworks established at the time of its inception.
                 It doesn’t impose strict coding standards or application structures. But there’s a price to pay for flexibility.
                </p>

                <p className='articleContentMargin'>
                A newcomer to JavaScript, even if they are an engineer experienced in a different language, will have a hard time finding rules and principles 
                for writing Node applications. Developers with an OOP background quickly adopted practices from their previous languages.
                To this day, it’s hard to find two Node applications that are structured similarly. In this post, I will summarize the set of principles 
                that I’ve established about building Node applications.
                </p>

                <h1 className='fs-500'>Structure the application in modules</h1>

                <p>The most popular structural design pattern in back-end development is MVC. It’s applicable in most situations and you won’t
                 go wrong if you pick it. It revolves around structuring your application around the technical responsibilities in it. You have controllers 
                 that handle the HTTP requests and responses, 
                models that fetch data from a database, and views that visualize the response.</p>

                <p >
                But the benefits of this approach are not strong enough. Nowadays, most Node applications are REST services that communicate via JSON so the view layer 
                is not needed. Using models and ORMs is not always desired since a microservice that owns a fraction of the data doesn’t need complex tooling to access it.
                 And the controllers often become a central point of complexity, inviting developers to dump all kinds of logic into them.
                </p>

                <p>
                Separation of concerns is a different thing than separation of technical responsibilities.
                </p>

                 <p>A plus of the MVC structure is that each application that uses it will be structured in the same way. But I see this as a flaw. An application’s structure should tell you what it does and provide information about its domain. Opening a folder full of controllers doesn’t provide any context about the logical separation in your service.
                 A long list of models tells nothing about the relationships between them.
                </p>

                <p className='articleContentMargin'>A better way to structure a node application is in modules representing a part of the domain. Each is a separate folder containing all handlers, models, tests, and business logic for a part of the business. This structure gives an idea of what the service is doing at a glance and you have confidence that everything related to the users, for example,
                 is in the user module. No need to dig through the codebase to make sure that you haven’t missed anything.
                 </p>
 
                 <SyntaxHighlighter language="javascript" >
                {`
        // 👎 Don't validate requests explicitly
        const createUserHandler = (req, res) => {
        const { name, email, phone } = req.body
        if (name && isValidName(name) && email && isValidEmail(email)) {
            userService.create({
            userName,
            email,
            phone,
            status,
            })
        }

        // Handle error...
        }

        // 👍 Use a library to validate and generate more descriptive messages
        const schema = Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string()
            .regex(/^\\d{3}-\\d{3}-\\d{4}$/)
            .required(),
        })

        const createUserHandler = (req, res) => {
        const { error, value } = schema.validate(req.body)
        // Handle error...
        }
                    `}
                </SyntaxHighlighter>


                <h1 className='fs-500'>Start with a modular monolith</h1>

                <p >Perhaps the most important question you need to answer before you start working on a new application is whether it will be a monolith or based on 
                microservices. In recent years most developers and architects go for the latter option because it provides better scalability,
                independence and solves the organizational challenges of working on a large-scale project.</p>
                
            </div>
        </section>
    )
}

export default FirstArticle