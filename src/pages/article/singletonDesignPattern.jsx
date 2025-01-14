import './article.css'
import Code from '../../components/code/code'

const Singleton = () => {
    return (
<section className='article'>
    <div className='articleWrap'>
        <h1 className='headerTxt'>The Singleton Design Pattern: A Comprehensive Guide</h1>
        <h1 className='fs-200'>15 minutes read</h1>
        <img src='https://refactoring.guru/images/patterns/content/singleton/singleton-3x.png'  alt="design patterns" className='.articleImg articleContentMargin' />
        <p className='articleContentMargin'>
        The Singleton Design Pattern is one of the most commonly used patterns in software development. 
        It ensures that a class has only one instance while providing a global point of access to that instance. 
        This pattern is particularly useful when managing shared resources,
        such as configuration settings or a logging mechanism, where multiple instances could lead to inconsistency or excessive resource usage.
        </p>

        <h1>
        Key Characteristics of Singleton
        </h1>
        <ul className='articleContentMargin'>
            <li>
            Single Instance: Ensures that only one instance of the class is created throughout the application's lifecycle.
            </li>
            <li>
            Global Access Point: Provides a controlled and centralized access point to the instance.
            </li>
            <li>
                Lazy Initialization (Optional): The instance is created only when it is needed, optimizing resource usage.
            </li>
        </ul>

        <h1>Implementation of the singleton pattern in javascript</h1>
                <Code 
                codestring='
    class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
        this.state = "I am the only instance!";
    }

    getState() {
        return this.state;
    }

    setState(newState) {
        this.state = newState;
    }
    }

    // Usage
    const instance1 = new Singleton();
    console.log(instance1.getState()); // Output: I am the only instance!

    const instance2 = new Singleton();
    instance2.setState("State has changed.");

    console.log(instance1.getState()); // Output: State has changed.
    console.log(instance1 === instance2); // Output: true'
                />
    <p className='articleContentMargin'>In this implementation, the Singleton class ensures that any attempt to create a new 
    instance returns the existing instance. The Singleton.instance static property holds the reference to the single instance.
    </p>

    <h1>Real world applications of the singleton pattern</h1>
    <ul className='articleContentMargin'>
        <li>Logging: A logging service often requires a single instance to ensure that all parts of the application write to the same log.</li>
        <li>Database Connections: Managing a single connection pool prevents resource exhaustion.</li>
        <li>Configuration Management: Ensures consistency by providing a centralized configuration resource.</li>
        <li>Caching: A single instance of a caching mechanism ensures consistent data access.</li>
    </ul>

    <h1>Pros and Cons of Singleton</h1>
    <h1>advantages</h1>
    <ul>
        <li>Controlled Access: The Singleton pattern provides a single point of access to shared resources.</li>
        <li>Global State Management: Useful for managing global application state, such as configuration.</li>
        <li>Optimized Resource Usage: Avoids creating multiple instances of resource-heavy objects.</li>
    </ul>

    <h1>disavantages</h1>
    <ul className='articleContentMargin'>
        <li>Hidden Dependencies: Singleton usage can make dependencies less obvious, reducing code transparency.</li>
        <li>Testing Challenges: It can complicate unit testing due to its global state and shared instance.</li>
        <li>Potential for Misuse: Overusing Singletons can lead to tightly coupled code, making it harder to maintain.</li>
    </ul>

    <h1>Best practices for the singleton design pattern</h1>
    <ul>
        <li>Limit Its Scope: Use Singletons only when necessary, such as for managing resources or state that must be shared.</li>
        <li>Lazy Initialization: Only initialize the instance when it is first needed to optimize resource usage.</li>
        <li>Thread Safety: Ensure thread safety in multi-threaded environments by using appropriate synchronization mechanisms.</li>
        <li>Dependency Injection: Consider alternatives like dependency injection to reduce tight coupling and improve testability.</li>
    </ul>
</div>
</section>
    )
}

export default Singleton