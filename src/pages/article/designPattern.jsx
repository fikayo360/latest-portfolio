import './article.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';


const DesignPatterns = () => {

    return (
        <section className="article">
            <div className='articleWrap'>
                <h1 className='headerTxt'>Design Patterns: An Overview</h1>
                <h1 className='fs-200'>15 minutes read</h1>
                <img 
                src="https://media.licdn.com/dms/image/D4D12AQFGap_FMpW-Cg/article-cover_image-shrink_720_1280/0/1703158015720?e=2147483647&v=beta&t=3DJzRcLt08G2Qu8TPqgKlmPLsm4AIcbjODWNyq8kaoo"
                 alt="design patterns" className='.articleImg articleContentMargin' />

                <h1 className='fs-500'>What are design patterns</h1>
                <p className>
                Design patterns are a vital part of software engineering, they offer battle tested solutions to common problems in software engineering. 
                They act as templates for solving recurring issues, helping developers build more scalable, maintainable, 
                and efficient software systems. This article will explore the history of design patterns, their importance, and the different categories they fall into.
                </p>

                <img src="https://se-radio.net/wp-content/uploads/2014/11/GangOfFourAtOOPSLA1994-300.png"
                alt="Gang of four" className='.articleImg articleContentMargin' />
                <h1 className='fs-500'>The History of Design Patterns</h1>
                <p>The concept of design patterns originated from architecture. Christopher Alexander, an architect, introduced the idea in his 1977 book, A Pattern Language: Towns, Buildings, Construction.
                 He described patterns as recurring solutions to problems in urban planning and architecture. This inspired software engineers to apply similar principles to programming.</p>

                <p>
                In 1994, the "Gang of Four" (GoF) — Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides — formalized design patterns for software development in their seminal book,
                 Design Patterns: Elements of Reusable Object-Oriented Software. The GoF cataloged 23 foundational patterns, 
                categorized into three primary types: Creational, Structural, and Behavioral patterns. Their work revolutionized how developers approach software design.
                </p>

                <p>
                It grew from a questionable technology to one used for critical infrastructure in many large enterprises. It performs incredibly well for 
                high-volume IO operations with a much lower code complexity than 
                languages that rely on multi-threading.
                Node’s ecosystem is focused on freedom and flexibility, breaking away from the heavy frameworks established at the time of its inception.
                 It doesn’t impose strict coding standards or application structures. But there’s a price to pay for flexibility.
                </p>

                <h1 className='fs-500'>Why we use design patterns in software engineering</h1>
                <h1>
                    They offer the following benefits
                </h1>
                <ol>
                    <li>
                    Reusability: Patterns provide generalized solutions that can be adapted across multiple projects, reducing redundancy.
                    </li>
                    <li>
                    Efficiency: By using established solutions, developers can save time and avoid reinventing the wheel.
                    </li>
                    <li>
                    Scalability: Patterns help in designing systems that can grow and adapt to future requirements without extensive rewrites.
                    </li>
                    <li>
                    Readability: Patterns create a common language among developers, making codebases easier to understand and collaborate on.
                    </li>
                    <li>
                    Best Practices: They encapsulate industry-proven techniques, guiding developers toward robust and effective solutions.
                    </li>
                </ol>

                <h1 className='fs-500'>Categories of design patterns</h1>
                <img src='https://www.syncfusion.com/blogs/wp-content/uploads/2022/03/Types-of-design-patterns-in-JavaScript.png' alt="design patterns categories"
                 className='.articleImg articleContentMargin'/>
                <p>
                The 23 design patterns identified by the GoF are grouped into three broad categories based on their purpose:
                </p>

                <h1 className='fs-400'> Creational patterns</h1>
                <p>
                 Creational patterns deal with object creation mechanisms, optimizing how objects are instantiated and ensuring proper usage.
                 These patterns abstract the instantiation process, allowing for more flexibility.
                 They are made up of the following.
                </p>

                <ol>
                    <li>
                    Singleton: Ensures a class has only one instance and provides a global access point.
                    </li>
                    <li>
                    Factory Method: Defines an interface for creating objects but lets subclasses alter the type of objects that will be created.
                    </li>
                    <li>
                    Abstract Factory: Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
                    </li>
                    <li>
                    Prototype: Creates new objects by copying an existing object (a prototype).
                    </li>
                    <li>
                    Builder: Separates the construction of a complex object from its representation.
                    </li>
                </ol>


                <h1 className='fs-400'> Structural patterns</h1>
                <p>
                Structural patterns focus on the composition of classes and objects, 
                ensuring that the structure is both flexible and efficient. They deal with relationships between entities to make them work together.
                </p>

                <ol>
                    <li>
                    Adapter: Allows incompatible interfaces to work together by converting one interface into another.
                    </li>
                    <li>
                    Bridge: Separates an object’s abstraction from its implementation, enabling them to vary independently.
                    </li>
                    <li>
                    Composite: Composes objects into tree structures to represent part-whole hierarchies.
                    </li>
                    <li>
                    Decorator: Adds responsibilities to objects dynamically without altering their structure.
                    </li>
                    <li>
                    Facade: Provides a simplified interface to a larger subsystem.
                    </li>
                    <li>
                    Flyweight: Reduces memory usage by sharing common parts of object state.
                    </li>
                    <li>
                    Proxy: Provides a surrogate or placeholder for another object to control access to it.
                    </li>
                </ol>

                <h1 className='fs-400'> Behavioural patterns</h1>
                <p>
                Behavioral patterns address object interactions and responsibilities. They focus on how objects communicate and work together to achieve specific tasks.
                </p>

                <ol>
                    <li>
                    Chain of Responsibility/Middleware: Passes a request along a chain of handlers until it is processed.
                    </li>
                    <li>
                    Command: Encapsulates a request as an object, allowing for parameterization and queuing.
                    </li>
                    <li>
                    Interpreter: Defines a grammar for a language and an interpreter to interpret sentences in the language
                    </li>
                    <li>
                    Iterator: Provides a way to sequentially access elements in a collection without exposing its underlying structure.
                    </li>
                    <li>
                    Mediator: Centralizes communication between multiple objects to reduce dependencies.
                    </li>
                    <li>
                    Memento: Captures and restores an object’s internal state without violating encapsulation.
                    </li>
                    <li>
                    Observer: Defines a one-to-many dependency between objects, so when one object changes state, all its dependents are notified.
                    </li>
                    <li>
                    State: Allows an object to change its behavior when its internal state changes.
                    </li>
                    <li>
                    Strategy: Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
                    </li>
                    <li>
                    Template Method: Defines the skeleton of an algorithm, deferring some steps to subclasses.
                    </li>
                    <li>
                    Visitor: Allows adding new operations to existing object structures without modifying them.
                    </li>
                </ol>
            </div>
        </section>
    )
}

export default DesignPatterns

