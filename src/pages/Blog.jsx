import React from 'react';

const Blog = () => {
    return (
        <div>
           
            <p>1. What is the access token and refress token? How do they work and where ahould we store them on the client side?</p>
              <p>answer: Access Token: Access tokens are typically short-lived (e.g., they may have an expiration time of a few minutes or hours). Storing the access token on the client side is necessary for subsequent requests to authorized resources. It is commonly stored in memory or a secure storage mechanism provided by the operating system or development framework (e.g., Keychain on iOS, KeyStore on Android, or
                 sessionStorage in web browsers). Storing it in a secure manner helps prevent unauthorized access to the token</p>
            <p>Access Token: Access tokens are typically short-lived (e.g., they may have an expiration time of a few minutes or hours). Storing the access token on the client side is necessary for subsequent requests to authorized resources. It is commonly stored in memory or a secure storage mechanism provided by the operating system or development framework (e.g., Keychain on iOS, KeyStore on Android, or
                 sessionStorage in web browsers). Storing it in a secure manner helps prevent unauthorized access to the token</p>
        <br />
        <br />
         <p>2.  Compare SQL and NoSQL database.</p>
         <p>Answer: SQL: SQL databases follow a rigid, predefined schema with structured 
            tables, columns, and relationships. They use a fixed schema to enforce data integrity and consistency.</p>
            <p>NoSQL: NoSQL databases provide a flexible schema or schema-less design. They allow for dynamic and
                 unstructured data, making them suitable for handling varying and evolving data structures.</p>
<br /><br />

                 <p>3.  What is express js? What is next js ?</p>
                 <p>Answer: Express.js is a minimalist and flexible web application framework for Node.js. It provides a set of features and tools to build web applications and APIs using Node.js on the server side. Express.js simplifies
                     the process of handling HTTP requests, routing, middleware management, and serving static files.</p>
                     <p>Next.js is a popular React framework for building server-rendered React applications. It provides a higher-level abstraction over React and simplifies the setup and configuration
                         required for server-side rendering, static site generation, and other advanced React features.</p>
        </div>
    );
};

export default Blog;