# Software_Engineering

### This folder is going to be based on my journey to explore more about Software Engieering.

#### my web tree journey
  * Breaking down the tree.
   ```
   -> we have CSS, HTML5 and JavaScript:
              -> we html5
              -> CSS3
              -> JavaScript

              HTML is a markup language that gives the side some structure.
              we have void tags like <img>

                      closing tag           closing tag
                          |                    |
              <p class="label">read me please</p>
                     |                 |
                   an attribute    enclosing text

              React.js -JSX
                       -Props/State
                       -useState
                       -useEffect
                       -Componets/Lifecyle Methods
                       -Condational Rendering
                       -List & Keys
                       -Basic Form Handling
                       -React Project Structure
                       -Routing Reacting Router
                       -Programmatic Navigation
                       -Set-up JSON Server
                       -API Calls(Axios)
                       -React CRUD Operations
                       -React Search Filter
                       -React Hooks
   ``` 
### The HTML Document
- In the html document the html element represents the root element an example will be.
    ~~~
    <html>
        
        This element is also known as the document metadata which contains
        machine readable information.
        <head>
        </head>

        <body>
        </body>
    </html>
    ~~~
### we can look at JSX for react and the representation of how it looks.
   ```
   const name = 'Josh Perez';
   const element = <h1>Hello, {name}</h1>; // this is the JSX wrapper 
   
   ReactDOM.render(
     element,
     document.getElementById('root')
     
  );
   ```
### Specifying attributes with JSX
  * this is an example ```const element = <img src={user.avatarUrl}></img>;```
  * JSX prevents injection attacks to the source code. 

    ```
    we use props when we try to acess
    ```
  * We look at how we can add properties to our objects, basic stuff.
    ```
     var myObject = {
            "Name: "sly",
            "Email": "sly@gmail.com"
         }

     myObject.passward = "shwrw2435%#$";
     This properties will be added to myObject
    ```
