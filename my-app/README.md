# Todo-application
==============================================================================

Make a Todo application with drag and drop functionality
In this project i used React js , Javascript , Typescript ,react-icons, react-beautiful-dnd(for drag and drop)
  
## intsallation

- Make sure you are in the correct directory, my-app
```sh
cd my-app
```
  - To install node modules and packeges run 
```sh
npm install
```

(After intsallation completed then follow Quick Start)
## Quick Start
### To run the application ( my-app )
- command for run the front-end
```sh
npm start
```


### If you face some error at the time of implementing drag and drop like below

Compiled with problems:

Invariant failed: Cannot find droppable entry with id [TodosList]
at http://localhost:3000/static/js/bundle.js:167406:58

### Just do one thing, remove <React.StrictMode> from index.js file


