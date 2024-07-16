<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
 -->


# STEPS TO FOLLOW WHEN WORKING WITH REACT 

<div align="center">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
</div>

1. ` npm create vite@latest `

2. Choose options such as:
    - project name, 
    - react (as library), 
    - js + swc (as language) 
    and finally run  
    ` cd new directory `
    ` npm install `
    ` npm run dev `

3. We can now open the provided port as in our browser 
` localhost:5173 `

## START AMENDING FILES

4. In App.css and index.css remove everyhing and leave root only

5. Only work in App.jsx

6. New code should go in function App()

7. To declare variables we use the hook useState()
ex:

` const [name, function] = useState(value of the variable)`

name - the name of our variable
function - the function which will be executed for this variable
value - the value of the variable

## CREATING COMPONENTS

8. into SRC folder + folder Components

9. into Components + folder with the name of the component

ex. Title

10. Inside component folder + new file Name.jsx

ex. Title.jsx

11. + new file Name.css
ex. Title.css

Inside we start including the following code:

```
rafc (react arrol functional component)

import React from 'react'

export const Title = ({ name }) => {    //the name comes from props as it was created in App.jsx
  return (
    <>
    <h1>{ name }</h1>
    </>
  )
}
```
* The prop class can have different keys such as in our case name

12. We can now import this component in our App.jsx (parent component)

--- TO create component from already done function ---
(same steps as creating component but with importing all from App into the new component jsx)
