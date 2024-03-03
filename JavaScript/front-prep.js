// Sure, I'll provide detailed answers and coding solutions for each of these topics.

// ### JavaScript Fundamentals

// 1. **What is a closure in JavaScript?**
//    - **Answer**: A closure is a feature in JavaScript where an inner function has access to variables from an outer function's scope, even after the outer function has executed. This happens because the inner function retains a reference to the outer function's scope.
//    - **Example**:

function outerFunction() {
  let outerVariable = 100;
  function innerFunction() {
    console.log(outerVariable); // innerFunction has access to outerVariable
  }
  return innerFunction;
}
const myClosure = outerFunction();
myClosure(); // Outputs: 100

// 2. **How does JavaScript's event loop work?**
//    - **Answer**: The JavaScript event loop is a mechanism that allows JavaScript to execute asynchronous code in a non-blocking way. It works by executing code, collecting and processing events, and executing queued sub-tasks. The call stack is a LIFO structure (Last In, First Out) where the JavaScript engine tracks function execution. The task queue holds asynchronous tasks that are waiting to be executed. When the call stack is empty, the event loop moves tasks from the task queue to the call stack to be executed.

// ### Promises and Async Programming

// 1. **What are Promises in JavaScript?**
//    - **Answer**: Promises in JavaScript represent the eventual completion (or failure) of an asynchronous operation. They differ from callbacks by providing better handling of asynchronous operations and allowing for more manageable and readable code. Promises can be chained and have methods like `then`, `catch`, and `finally`.
//    - **Example**:

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolved!"), 1000);
});
promise.then((result) => console.log(result)); // Outputs: "Resolved!" after 1 second

// 2. **How does error handling work with Promises and async/await?**
//    - **Answer**: Error handling in Promises is done using the `catch` method, which catches any errors that occur in the promise chain. In async/await, errors are caught using `try-catch` blocks.
//    - **Example**:

async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
fetchData();

// ### Event Handling

// 1. **How does event propagation work in the DOM?**
//    - **Answer**: Event propagation in the DOM has two phases: capturing and bubbling. In the capturing phase, the event travels from the window to the target element. In the bubbling phase, it travels back up to the window. By default, events are handled in the bubbling phase.

// 2. **Add an event listener to a button and avoid memory leaks:**
//    - **Code**:

const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

const handleClick = () => console.log("Button clicked");
button.addEventListener("click", handleClick);

// To avoid memory leaks, especially in Single Page Applications:
window.addEventListener("unload", () => {
  button.removeEventListener("click", handleClick);
});

// ### The Document Object Model (DOM)

// 1. **How does the DOM work in a web browser?**
//    - **Answer**: The DOM (Document Object Model) is a programming interface for web documents. It represents the page structure as a tree of objects, allowing scripts to change the document structure, style, and content. JavaScript can be used to manipulate the DOM, providing dynamic changes to the HTML and CSS.

// 2. **When to manipulate the DOM directly over using a framework:**
//    - **Answer**: Direct DOM manipulation might be preferable for simple tasks, small applications, or when you need maximum performance and direct control. Frameworks add abstraction and overhead, which can be unnecessary for straightforward tasks.

// ### TypeScript Specifics

// 1. **How does TypeScript enhance JavaScript development?**
//    - **Answer**: TypeScript adds static typing to JavaScript, allowing for early detection of type-related errors, better tooling support, and improved code readability and maintainability. It helps in managing large codebases and makes refactoring easier and safer.

// 2. **TypeScript interface and class example:**
//    - **Code**:

interface User {
  name: string;
  age: number;
}

class Employee implements User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 3. **What are TypeScript generics?**
//    - **Answer**: Generics in TypeScript allow you to write reusable, type-safe components. They enable you to create components that can work with a variety of types rather than a single one.

// ### Advanced JavaScript

// 1. **Discuss hoisting in JavaScript:**
//    // - **Answer**: Hoisting in JavaScript is the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. `var` declarations are hoisted and initialized with `undefined`, while `let` and `const` are hoisted but not initialized.

// 2. **Explain the 'this' keyword in JavaScript:**
//    - **Answer**: The `this` keyword in JavaScript refers to the object it belongs to. It has different values depending on where it is used: in a method, it refers to the owner object; alone, it refers to the global object; in a function, it refers to the global object (in strict mode, `this` is `undefined`); in an event, it refers to the element that received the event.

// ### JavaScript Design Patterns

// 1. **Describe a design pattern used in JavaScript projects:**
//    - **Answer**: The Module pattern is commonly used for creating encapsulated code. It involves wrapping a set of variables and functions in a single unit of code, typically using a function. This pattern allows for private and public members, providing a way to protect variables and methods from the global scope.

// ### Practical Coding Problem

// 1. **Function that handles an array of promises:**
//    - **Code**:

function handlePromises(promises) {
  return Promise.all(promises)
    .then((results) => console.log("All promises resolved:", results))
    .catch((error) => console.error("A promise failed:", error));
}

// Example Usage:
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "rejected")
);
handlePromises([promise1, promise2]);

// These answers and code examples provide a comprehensive overview of your understanding of various JavaScript and TypeScript concepts, which is valuable for an Intermediate Frontend Developer position.


// Certainly! Let's break down CSS and responsive design, including the use of frameworks like Material UI or Styled-Components, and discuss the principles and techniques with explanations and code examples.

// ### CSS Fundamentals

// 1. **Selectors, Properties, and Values**: These are the building blocks of CSS. Selectors target HTML elements, properties specify the styles to be applied, and values define the style settings.

//    ```css
//    p {
//        color: blue;
//        font-size: 16px;
//    }
//    ```

// 2. **Box Model**: Understanding the box model is crucial. It consists of margins, borders, padding, and the content area.

//    ```css
//    .box {
//        margin: 10px;
//        border: 5px solid black;
//        padding: 20px;
//        width: 300px;
//    }
//    ```

// 3. **Positioning**: This involves controlling the layout using properties like `position`, `top`, `right`, `bottom`, `left`, and `z-index`.

//    ```css
//    .floating-element {
//        position: absolute;
//        top: 10px;
//        right: 10px;
//    }
//    ```

// ### Responsive Design

// 1. **Media Queries**: They are used to apply different styles for different devices or screen sizes.

//    ```css
//    @media (max-width: 600px) {
//        .container {
//            flex-direction: column;
//        }
//    }
//    ```

// 2. **Flexible Layouts**: Using relative units (like `%`, `em`, `rem`, `vw`, `vh`) and flexbox or grid layouts helps create flexible and responsive designs.

//    ```css
//    .container {
//        display: flex;
//        justify-content: space-between;
//    }
//    ```

// 3. **Images and Media**: Ensuring images and other media are responsive and scale correctly is key. This often involves setting `max-width` to `100%` and `height` to `auto`.

//    ```css
//    img {
//        max-width: 100%;
//        height: auto;
//    }
//    ```

// ### CSS Frameworks

// 1. **Material UI**: A popular React UI framework that follows Google's Material Design. It offers a set of pre-designed components like buttons, cards, and dialogs.

//    **Example Usage**:
//    ```jsx
//    import Button from '@material-ui/core/Button';

//    const MyApp = () => (
//        <Button color="primary">Hello World</Button>
//    );
//    ```

// 2. **Styled-Components**: A library for React and React Native that allows you to use component-level styles in your application using tagged template literals.

//    **Example Usage**:
//    ```jsx
//    import styled from 'styled-components';

//    const Wrapper = styled.div`
//        background: papayawhip;
//        width: 100%;
//    `;

//    const MyComponent = () => <Wrapper>Styled Component</Wrapper>;
//    ```

// ### Best Practices

// - **Mobile-First Design**: Start designing for smaller screens and then scale up for larger screens.
// - **Use of CSS Variables**: To create a consistent theme and make it easier to change styles globally.
// - **Accessibility**: Ensure your design is accessible, including color contrast, keyboard navigation, and screen reader support.

// ### Sample Responsive Design Code

// Here's an example of a simple responsive design using CSS:

// ```html
// <!DOCTYPE html>
// <html>
// <head>
//     <style>
//         body {
//             margin: 0;
//             font-family: Arial, sans-serif;
//         }
//         .header {
//             text-align: center;
//             padding: 20px;
//             background-color: #f1f1f1;
//         }
//         .nav-bar {
//             display: flex;
//             justify-content: space-around;
//             background-color: #333;
//             color: white;
//         }
//         .nav-bar div {
//             padding: 14px 16px;
//         }
//         @media (max-width: 600px) {
//             .nav-bar {
//                 flex-direction: column;
//             }
//         }
//     </style>
// </head>
// <body>

// <div class="header">
//     <h1>Responsive Web Design</h1>
// </div>

// <div class="nav-bar">
//     <div>Home</div>
//     <div>About</div>
//     <div>Services</div>
//     <div>Contact</div>
// </div>

// </body>
// </html>
// ```

// In this example, the navigation bar (`nav-bar`) changes from a horizontal layout to a vertical layout when the screen width is 600px or less, demonstrating a basic responsive design principle.


// Certainly! Let's dive into System Design, focusing on architectural understanding, scale, maintainability, and security. We'll also explore design principles in the context of Functional Programming (FP) and Object-Oriented Programming (OOP), providing explanations and code examples.

// ### System Design

// **1. Architectural Understanding**
//    - **Microservices Architecture**: Breaks down an application into small, modular services. Each service runs a unique process and communicates through a well-defined, lightweight mechanism to serve a business goal.
//      - *Example*: An e-commerce application split into individual services for user accounts, product catalog, order processing, and payment processing.

// **2. Handling Scale**
//    - **Load Balancing**: Distributes traffic across multiple servers to ensure no single server bears too much demand.
//      - *Example*: Using Nginx or Amazon ELB (Elastic Load Balancer) to distribute incoming user requests for a web application.

// **3. Maintainability**
//    - **Continuous Integration/Continuous Deployment (CI/CD)**: Automates the testing and deployment process, making the application easier to update and maintain.
//      - *Example*: Using Jenkins or GitHub Actions to automate testing and deployment pipelines.

// **4. Security**
//    - **Authentication and Authorization**: Ensures that only authenticated and authorized users can access certain parts of the system.
//      - *Example*: Implementing OAuth for user authentication and JSON Web Tokens (JWT) for authorization.

// ### Design Principles

// **1. Functional Programming (FP)**
//    - **Immutability**: Avoiding changing the state of objects once they've been created.
//      - *Example in JavaScript*:
//        ```javascript
//        const numbers = [1, 2, 3];
//        const squaredNumbers = numbers.map(number => number * number); // [1, 4, 9]
//        ```
//    - **Pure Functions**: Functions where the return value is only determined by its input values, without observable side effects.
//      - *Example in JavaScript*:
//        ```javascript
//        const add = (x, y) => x + y;
//        console.log(add(2, 3)); // Always returns 5
//        ```

// **2. Object-Oriented Programming (OOP)**
//    - **Encapsulation**: Bundling the data and the methods that operate on that data within one unit.
//      - *Example in Java*:
//        ```java
//        public class BankAccount {
//            private double balance;

//            public BankAccount(double balance) {
//                this.balance = balance;
//            }

//            public void deposit(double amount) {
//                balance += amount;
//            }

//            public double getBalance() {
//                return balance;
//            }
//        }
//        ```
//    - **Inheritance**: A mechanism where a new class is derived from an existing class.
//      - *Example in Java*:
//        ```java
//        public class SavingsAccount extends BankAccount {
//            private double interestRate;

//            public SavingsAccount(double balance, double interestRate) {
//                super(balance);
//                this.interestRate = interestRate;
//            }

//            public void addInterest() {
//                deposit(getBalance() * interestRate);
//            }
//        }
//        ```

// **3. Combining FP and OOP**
//    - In languages like JavaScript, you can mix FP and OOP. For instance, you can have classes with methods that use functional programming concepts.

// ### Practical System Design Scenario: E-Commerce Website

// - **Requirements**: An online store where users can browse products, add them to their cart, and make purchases.
// - **Architecture**: Microservices for scalability and maintainability. 
//    - Services: User Service, Product Service, Cart Service, Order Service, Payment Service.
// - **Database**: Distributed databases for each service for scalability. For example, MongoDB for the Product Service, PostgreSQL for the User Service.
// - **Security**: JWT for secure and stateless authentication and authorization.
// - **Frontend**: React for a dynamic and responsive user interface.
// - **Backend**: Node.js with Express.js, utilizing RESTful API design.
// - **CI/CD**: Automated testing and deployment using Jenkins.
// - **Load Balancer**: Use of Nginx to distribute incoming traffic and ensure high availability.

// ### Code Example: Implementing a Cart Service

// **Node.js / Express.js Backend Example:**

// ```javascript
// const express = require('express');
// const app = express();
// app.use(express.json());

// let cart = [];

// app.post('/add-to-cart', (req, res) => {
//     const { productId, quantity } = req.body;
//     cart.push({ productId, quantity });
//     res.json({ message: 'Product added to cart', cart });
// });

// app.get('/cart', (req, res) => {
//     res.json(cart);
// });

// app.listen(3000, () => {
//     console.log('Cart service running on port 3000');
// });
// ```

// In this simplified example, a basic cart service is created using Node.js and Express.js, demonstrating RESTful principles and basic FP concepts like using immutable data structures (no direct modification of the `cart`, instead, new items are `push`ed).

// Remember, in a real-world scenario, you would also need to consider database interactions, authentication, and more complex business logic.


Absolutely! Here are six React-specific questions suitable for an Intermediate Frontend Developer interview, along with explanations and code examples:

// ### Question 1: Component Lifecycle
// **Problem**: Explain the React component lifecycle. Give an example of a scenario where you would use `componentDidMount`.

// **Answer**:
// React components have several lifecycle methods that you can override to run code at particular times in the process. Key lifecycle methods include `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
// - `componentDidMount` is used for initializing the component, such as fetching data, adding event listeners, etc.

// **Example**:
// ```jsx
// class MyComponent extends React.Component {
//     componentDidMount() {
//         // Fetch data when the component mounts
//         fetchData().then(data => this.setState({ data }));
//     }
// }

// function fetchData() {
//     return Promise.resolve({ message: 'Data fetched' });
// }
// ```

// ### Question 2: Hooks
// **Problem**: What are React Hooks? Can you show how to convert a class component to a functional component using hooks?

// **Answer**:
// React Hooks are functions that let you use state and other React features in functional components. The most commonly used hooks are `useState` and `useEffect`.

// **Example**:
// ```jsx
// // Class Component
// class Counter extends React.Component {
//     state = { count: 0 };

//     increment = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     render() {
//         return <button onClick={this.increment}>{this.state.count}</button>;
//     }
// }

// // Converted to Functional Component with Hooks
// function Counter() {
//     const [count, setCount] = React.useState(0);

//     const increment = () => {
//         setCount(count + 1);
//     };

//     return <button onClick={increment}>{count}</button>;
// }
// ```

// ### Question 3: State vs Props
// **Problem**: What is the difference between state and props in React?

// **Answer**:
// - **Props** (short for properties) are read-only and are used to pass data from a parent component to a child component.
// - **State** is local and mutable data that is specific to a component and can change over time.

// **Example**:
// ```jsx
// function ParentComponent() {
//     return <ChildComponent title="Hello World" />;
// }

// function ChildComponent(props) {
//     return <h1>{props.title}</h1>;
// }
// ```

// ### Question 4: Higher-Order Components (HOC)
// **Problem**: What is a Higher-Order Component in React? Provide an example.

// **Answer**:
// A Higher-Order Component (HOC) is a function that takes a component and returns a new component. It's used for reusing component logic.

// **Example**:
// ```jsx
// function withLogging(WrappedComponent) {
//     return class extends React.Component {
//         componentDidMount() {
//             console.log(`Component ${WrappedComponent.name} mounted`);
//         }

//         render() {
//             return <WrappedComponent {...this.props} />;
//         }
//     };
// }

// function MyComponent() {
//     return <div>My Component</div>;
// }

// const MyComponentWithLogging = withLogging(MyComponent);
// ```

// ### Question 5: Handling Events
// **Problem**: How do you handle events in React?

// **Answer**:
// Events in React are handled by using event handlers. React events are named using camelCase, rather than lowercase.

// **Example**:
// ```jsx
// class MyComponent extends React.Component {
//     handleClick = () => {
//         console.log('Button clicked');
//     };

//     render() {
//         return <button onClick={this.handleClick}>Click me</button>;
//     }
// }
// ```

// ### Question 6: Conditional Rendering
// **Problem**: What is conditional rendering in React? Show an example.

// **Answer**:
// Conditional rendering in React is a way to render different elements or components based on a certain condition.

// **Example**:
// ```jsx
// function WelcomeMessage({ isLoggedIn }) {
//     return <div>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}</div>;
// }
// ```

// These questions cover a broad range of topics within React, including lifecycle methods, hooks, state and props, higher-order components, event handling, and conditional rendering, which are fundamental concepts for an intermediate-level React developer.
//


Sure, let's focus on Redux and `useContext` in React, both of which are critical for state management in React applications. I'll provide three questions for each, along with code examples.

// ### Redux Questions

// 1. **Question**: What is Redux and how does it help in state management in React applications?

//    **Answer**: Redux is a predictable state container for JavaScript applications, often used with React. It helps manage the state of an application in a single global object called the store. Actions dispatch state changes to the store, and reducers specify how the state changes in response to these actions. Redux makes the state predictable, making it easier to trace which action causes any change.

//    **Code Example**:
//    ```javascript
//    import { createStore } from 'redux';

//    // Reducer function
//    function counter(state = 0, action) {
//      switch (action.type) {
//        case 'INCREMENT':
//          return state + 1;
//        case 'DECREMENT':
//          return state - 1;
//        default:
//          return state;
//      }
//    }

//    let store = createStore(counter);
//    ```

// 2. **Question**: How do you handle asynchronous actions in Redux?

//    **Answer**: Asynchronous actions in Redux are handled using middleware like Redux Thunk or Redux Saga. Redux Thunk allows action creators to return a function instead of an action object. This function can perform asynchronous tasks and dispatch actions based on the outcome of those tasks.

//    **Code Example with Redux Thunk**:
//    ```javascript
//    function fetchData() {
//      return (dispatch) => {
//        fetch('https://api.example.com/data')
//          .then(response => response.json())
//          .then(data => dispatch({ type: 'FETCH_DATA_SUCCESS', data }))
//          .catch(error => dispatch({ type: 'FETCH_DATA_ERROR', error }));
//      };
//    }
//    ```

// 3. **Question**: Can you explain how Redux's `connect` function works and how it's used?

//    **Answer**: The `connect` function from React Redux is used to connect a React component to the Redux store. It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store. It's a higher-order function that returns a new, connected component class.

//    **Code Example**:
//    ```javascript
//    import { connect } from 'react-redux';

//    const mapStateToProps = state => ({
//      items: state.items
//    });

//    const mapDispatchToProps = dispatch => ({
//      addItem: item => dispatch({type: 'ADD_ITEM', item})
//    });

//    export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
//    ```

// ### useContext Questions

// 1. **Question**: What is `useContext` in React and when would you use it?

//    **Answer**: `useContext` is a hook in React that lets you subscribe to React context without introducing nesting. It is used for passing data deeply throughout the component tree without having to manually pass props down at every level. This is particularly useful for sharing global data like themes, user information, etc.

//    **Code Example**:
//    ```javascript
//    const ThemeContext = React.createContext('light');

//    const ThemedButton = () => {
//      const theme = useContext(ThemeContext);
//      return <button className={theme}>I am styled by theme context!</button>;
//    };
//    ```

// 2. **Question**: How does `useContext` compare to Redux? In what scenarios would you use one over the other?

//    **Answer**: `useContext` is simpler and ideal for passing down props and state in small to medium-sized applications. Redux, on the other hand, offers more powerful capabilities for managing global state, especially in larger applications, with features like middleware support and time-travel debugging. `useContext` is generally used when the state management needs are simple, while Redux is preferred when there's a need for more complex state logic, handling asynchronous actions, or when the state needs to be accessed by many components at different nesting levels.

//    **Code Example with useContext**:
//    ```javascript
//    // ThemeContext.js
//    export const ThemeContext = React.createContext();

//    // App.js
//    import { ThemeContext } from './ThemeContext';

//    const App = () => {
//      return (
//        <ThemeContext.Provider value="dark">
//          <ThemedButton />
//        </ThemeContext.Provider>
//      );
//    };
//    ```

// 3. **Question**: Can you show an example of combining `useContext` with `useReducer` for state management?

//    **Answer**: Combining `useContext` with `useReducer` can provide a more robust solution for state management in React, akin to what Redux offers. `useReducer` will handle the state logic, and `useContext` will pass the state and dispatch function down the component tree.

//    **Code Example**:
//    ```javascript
//    const StateContext = createContext();

//    const stateReducer = (state, action) => {
//      // state management logic here
//    };

//    const StateProvider = ({ children }) => {
//      const [state, dispatch] = useReducer(stateReducer, initialState);

//      return (
//        <StateContext.Provider value={{ state, dispatch }}>
//          {children}
//        </StateContext.Provider>
//      );
//    };

//    const ConsumerComponent = () => {
//      const { state, dispatch } = useContext(StateContext);
//      // use state and dispatch in your component
//    };
//    ```

// These examples and explanations should provide a comprehensive understanding of Redux and `useContext` in React, highlighting their usage, differences, and when to apply each in a project.

### Docker

// **Explanation**:
// Docker is a platform for developing, shipping, and running applications in isolated environments called containers. Containers package up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.

// - **Key Concepts**:
//   - **Image**: A lightweight, stand-alone, executable package that includes everything needed to run a piece of software, including the code, runtime, libraries, environment variables, and config files.
//   - **Container**: A runtime instance of a Docker image.
//   - **Dockerfile**: A script containing a series of instructions and commands used to build a Docker image.

// **Example**:
// ```Dockerfile
// # Dockerfile
// FROM node:14
// WORKDIR /app
// COPY package.json /app
// RUN npm install
// COPY . /app
// CMD ["node", "server.js"]
// EXPOSE 8080
// ```
// This Dockerfile creates a Docker image for a Node.js application. It starts from a base image (`node:14`), sets a working directory, copies files, installs dependencies, and specifies how to run the app.

// ### Kubernetes

// **Explanation**:
// Kubernetes (K8s) is an open-source platform for automating deployment, scaling, and operations of application containers across clusters of hosts. It provides a framework to run distributed systems resiliently, scaling and failover for your application, and provides deployment patterns.

// - **Key Concepts**:
//   - **Pod**: The smallest deployable units of computing that can be created and managed in Kubernetes.
//   - **Service**: An abstraction that defines a logical set of Pods and a policy by which to access them.
//   - **Deployment**: Describes the desired state for your application, managed by Kubernetes.

// **Example**:
// ```yaml
// # Kubernetes Deployment
// apiVersion: apps/v1
// kind: Deployment
// metadata:
//   name: node-app-deployment
// spec:
//   replicas: 2
//   selector:
//     matchLabels:
//       app: node-app
//   template:
//     metadata:
//       labels:
//         app: node-app
//     spec:
//       containers:
//       - name: node-app
//         image: node-app:1.0
//         ports:
//         - containerPort: 8080
// ```
// This example defines a Kubernetes deployment for the `node-app`. It specifies that there should be 2 replicas of the pod running, each containing the `node-app` container built from the `node-app:1.0` image.

// ### Combining Docker and Kubernetes

// 1. **Build and Containerize the Application**:
//    - Write a Dockerfile for your application.
//    - Build a Docker image from the Dockerfile.
//    - Push the Docker image to a registry (like Docker Hub).

// 2. **Deploy the Application on Kubernetes**:
//    - Write a Kubernetes deployment YAML file that specifies your Docker image.
//    - Use `kubectl` to apply the deployment to your Kubernetes cluster.

// **Example Workflow**:

// 1. Build the Docker image:
//    ```bash
//    docker build -t node-app:1.0 .
//    ```

// 2. Push the image to a registry:
//    ```bash
//    docker push node-app:1.0
//    ```

// 3. Deploy to Kubernetes:
//    ```bash
//    kubectl apply -f deployment.yaml
//    ```

// This process demonstrates how Docker and Kubernetes work together: Docker builds and packages the application in a container, and Kubernetes handles the deployment and management of the containerized application in a cluster environment.

// Certainly! Let's delve into each of these areas, providing definitions, key concepts, and code examples, particularly focusing on their relevance in front-end development.

// ### Design Systems / Design Patterns

// **Design Systems**:
// - **Definition**: A design system is a comprehensive guide for project design – a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.
// - **Key Concepts**:
//   - **Reusable Components**: Building blocks like buttons, inputs, and modals that are used consistently across different parts of an application.
//   - **Standardized Design Tokens**: These are the visual design atoms of the design system — e.g., color palettes, fonts, spacings.
//   - **Consistent UX/UI Guidelines**: A set of standards and best practices that ensure a consistent user experience and interface across all applications.
// - **Front-End Example**: Creating a component library in React with Storybook to document and showcase components.

// **Design Patterns**:
// - **Definition**: In software engineering, a design pattern is a general repeatable solution to a commonly occurring problem in software design.
// - **Key Concepts**:
//   - **Singleton Pattern**: Ensures a class has only one instance and provides a global point of access to it.
//   - **Observer Pattern**: A design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes.
//   - **Factory Pattern**: A creational pattern that uses factory methods to deal with the problem of creating objects without specifying the exact class of the object that will be created.
// - **Front-End Example**: Using the Singleton pattern for a global state management service in a JavaScript application.

// ### DRY Principle

// **Definition**: DRY stands for "Don't Repeat Yourself". It's a principle of software development aimed at reducing the repetition of software patterns, replacing it with abstractions or using data normalization to avoid redundancy.

// **Key Concepts**:
// - **Code Reuse**: Avoiding duplication in code which saves time and effort in the long-term.
// - **Functions and Components**: Creating reusable functions and components in front-end development.

// **Front-End Example**:
// - Creating a custom hook in React for fetching data, ensuring that the logic for fetching data isn’t repeated across components.

// ### Functional Programming (FP)

// **Definition**: Functional programming is a programming paradigm where processes are constructed around the evaluation of expressions rather than execution of commands.

// **Key Concepts**:
// - **Immutability**: Data objects should not be modified after they are created.
// - **Pure Functions**: Functions that always produce the same output for the same set of inputs and do not cause any side effects.
// - **Higher-Order Functions**: Functions that take other functions as arguments or return them as results.

// **Front-End Example**:
// - Using array methods like `.map()`, `.filter()`, and `.reduce()` in JavaScript.
// - React hooks such as `useEffect` and `useState` following the FP principles.

// ### Object-Oriented Programming (OOP)

// **Definition**: Object-oriented programming is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes), and code, in the form of procedures (often known as methods).

// **Key Concepts**:
// - **Classes and Objects**: Basic units of OOP, where classes are blueprints and objects are instances of the classes.
// - **Encapsulation**: Hiding internal state and requiring all interaction to be performed through an object's methods.
// - **Inheritance**: Mechanism for creating a new class using features of an existing class.
// - **Polymorphism**: Ability to treat objects of different classes in a similar way, typically via a common interface.

// **Front-End Example**:
// - Using ES6 classes in JavaScript to encapsulate and structure code for components.
// - Extending React components to create specialized versions.

// ### Code Examples

// **DRY Principle with React Hooks**:
// ```javascript
// import { useState, useEffect } from 'react';

// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(url);
//       const data = await response.json();
//       setData(data);
//       setLoading(false);
//     }
//     fetchData();
//   }, [url]);

//   return { data, loading };
// }

// export default useFetch;
// ```

// **Functional Programming with JavaScript**:
// ```javascript
// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map(number => number * number); // [1, 4, 9, 16, 25]
// ```

// **OOP with ES6 Classes**:
// ```javascript
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     return `Hello, my name is ${this.name}`;
//   }
// }

// const john = new Person('John');
// console.log(john.greet()); // "Hello, my name is John"
// ```

// These examples and concepts provide a foundational understanding of design systems and patterns, DRY principles, and the paradigms of functional and object-oriented programming in the context of front-end development.

