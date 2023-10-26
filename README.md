 This is a project to demostrate the state management in ReactJS. This is done using Redux Toolkit

Redux is a predictable container that holds JavaScript application state information. It assists when writing applications that behave reliably in client, server, and native environments and are easy to test. In addition, it provides a superior experience for developers, such as live code editing and a time-traveling debugger. Redux is one of the most commonly used libraries in front-end development, but developers are often confused about what it is and its benefits. Redux assists in writing applications that act persistently, run in different client, server, and native environments, and are easy to test. The Redux Toolkit enables you to focus on the core logic your app needs so that you can do more work with less code. As the documentation states, "Redux is a predictable state container for JavaScript apps." ReactJS developers usually work with Redux, although it can be used with other Javascript languages such as Angular, AngularJS, Vue.js, Polymer, Ember, Backbone.js, and Meteor.

Redux is a JavaScript library to manage applications' states. Redux keeps the state of our application in a store. Each component can access any form from this store. However, configuring the Redux store is complicated and makes us write a lot of boilerplate. Fortunately, we don't need to worry about it anymore. We can now simplify the complexity of Redux by using Redux Toolkit.

Redux Toolkit is the officially recommended approach for writing Redux logic. Redux Toolkit will help us to simplify Redux development. Redux Toolkit also includes a robust data fetching and caching capability called RTK Query.

The main components of the Redux Toolkit are - 
1. Store - Global Managed State
2. Reducer - Actions to be performed with state
3. Slice - Particular functions in the application which holds state and reducers/actions
4. useSelector - Used to fetch state from the store  [Provided by React-Redux]
5. useDispatch - Used to update state in Store using the reducers defind in slice  [Provided by React-Redux]
6. Provider - This is used to bind the main app with the store. [Provided by React-Redux]

![image](https://github.com/sanjeeb-das-lti/react-redux/assets/63063354/944762d0-7abc-4c17-aa74-6c4e60700782)

Steps to implement the toolkit:
Installation--
> npm install @reduxjs/toolkit
> npm install react-redux

1. Create app> store.js
2. Create a store using configureStore and export it.
3. Create slices> login> loginSlice.js
4. Crate a slice using createSlice and export it
5. Add name, initialState and reducer
6. Add the reducer in the store
7. useDispatch
8. useSelector
9. Wrap main.jsx with Provider of Store
 


