TaskBoard Kanban App

This is my Kanban MERN Stack Web Application. I had set out to code an application from scratch, not following any project tutorials. I wanted to use little to no dependencies as a learning experience, but I soon realized that some things should not be reinvented, such as react-router (page routing for SPA with react) in the frontend, and mongoose (syntactic sugar for MongoDB) in the backend.

The backend RESTful API is made with Express and Node, with protected endpoints using JWT. It is very rudimentary, and definitely has room for improvement.

The frontend React application is powered by Vite and styled with TailwindCSS. Vite and its Hot Module Replacement definitely contributed to a nicer development experience. TailwindCSS and its utility-class library has made designing and styling the application painless. Using both Vite and TailwindCSS has to be a no brainer, and should go down in the books as a classic pairing, like a PB&J sandwich.

This MERN app still has a long way to go. The code is in desperate need of a refactoring, and would probably be a nightmare for someone to jump in. My workflow was just taking too long trying to figure it out on my own, and the code being produced was moving at a crawl.

In the future, I would like to add the ability to create new lists and lists sorted by projects. From there, making the different projects collaborative with friends from a friends list would take this to another level. The final touches would be to add "drag and drop" functionality, perhaps using Use-Gesture or DNDKit.

Thanks for reading all this. The frontend of the application is currently deployed with Vercel, and have yet to deploy the backend. The frontend should work fine, as long as you don't try to log in. I am looking into deploying both frontend and backend as a full stack application, as they are tied together with the use of a proxy. Otherwise I imagine I would have to go back in and mess around with cors or something.
