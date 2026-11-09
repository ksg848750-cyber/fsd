# Skill Development Laboratory --- Complex Programs Execution README

This guide explains how to execute the six **Complex Programs** shown in
the laboratory syllabus. Follow the section for the program you are
performing.

## Tools at a glance

  -----------------------------------------------------------------------
  Complex question        Required tools          Main task
  ----------------------- ----------------------- -----------------------
  1                       VS Code + browser       Shopping cart website
                                                  using HTML/CSS,
                                                  including Flexbox and
                                                  Grid

  2                       VS Code + browser       Fetch weather data from
                                                  OpenWeatherMap and
                                                  display a graph

  3                       Eclipse EE +            Java standalone CRUD
                          Oracle/MySQL            application connected
                                                  to a database

  4                       VS Code + Postman       Express REST API for
                                                  student CRUD operations

  5                       VS Code + Postman       Express API with
                                                  JWT-protected endpoints

  6                       VS Code + browser       React student
                                                  management app with
                                                  routing
  -----------------------------------------------------------------------

**Important:** The syllabus image specifies the tools only indirectly.
This README follows your requested setup: Question 3 in Eclipse EE;
Questions 4 and 5 in VS Code and Postman; Question 6 in VS Code.
Question 1 is included as a VS Code/browser workflow. Question 2's exact
API key, chart library, and code are not visible in the syllabus image,
so use the corresponding values already present in your lab code.

------------------------------------------------------------------------

# Complex Program 1: Shopping Cart Website Using CSS Flexbox and Grid

## Aim

Build a responsive shopping website with registration, login, catalog,
and cart pages using CSS3, Flexbox, and Grid.

## Software

-   Visual Studio Code
-   Web browser

## Steps

1.  Open VS Code.
2.  Select **File → Open Folder** and open the folder containing the
    shopping-cart program.
3.  Check that the folder contains the HTML, CSS, and JavaScript files
    used by your code.
4.  Open the main HTML file (often `index.html`).
5.  Save all files with **Ctrl + S**.
6.  If your project is plain HTML/CSS/JavaScript, open `index.html` in a
    browser. If you use the VS Code Live Server extension, right-click
    `index.html` and choose **Open with Live Server**.
7.  Test navigation between the registration, login, catalog, and cart
    pages.
8.  Resize the browser window to verify that the layout responds to
    smaller screens.

## Expected Result

The pages display correctly and adapt to different screen sizes. Flexbox
and Grid arrange the page content.

------------------------------------------------------------------------

# Complex Program 2: Weather Information and Graph Using OpenWeatherMap

## Aim

Read weather information from OpenWeatherMap and display the information
as a graph on a webpage.

## Software

-   VS Code
-   Node.js only if the supplied project uses a Node server; otherwise a
    browser is sufficient
-   Browser
-   OpenWeatherMap API key required by the supplied code

## Steps

1.  Open VS Code and open the folder containing the weather application.
2.  Inspect the supplied files to identify the entry HTML/JavaScript
    file and how the API key is configured.
3.  If the code uses a placeholder API key, obtain an API key from
    OpenWeatherMap and replace the placeholder. Do not publish your real
    API key in a public repository.
4.  Save the files with **Ctrl + S**.
5.  If this is a plain HTML/CSS/JavaScript app, open its main HTML file
    in the browser or use Live Server.
6.  If the project has `package.json`, open **Terminal → New Terminal**
    and run `npm install` once, if dependencies are listed and not
    installed.
7.  Run the start command defined in `package.json` (for example,
    `npm start` or `npm run dev`) if the supplied project requires it.
8.  Enter a city if the UI asks for one, then click its weather/search
    button.
9.  Check the browser page for the weather information and graph. If it
    fails, open browser developer tools (F12) and inspect
    Console/Network errors.

## Expected Result

The page retrieves weather information and displays it in a graph. The
exact graph fields depend on the provided lab code.

------------------------------------------------------------------------

# Complex Program 3: Java Standalone Database CRUD Application (Oracle/MySQL)

## Aim

Create a standalone Java application that connects to Oracle or MySQL
and performs CRUD operations on database tables.

## Software

-   Eclipse EE
-   JDK
-   Oracle Database or MySQL
-   JDBC driver matching the database

## A. Prepare the database

Use the database your lab code expects. For the MySQL example, open the
MySQL command-line client or MySQL Workbench and execute the
database/table SQL from your lab code. Example:

``` sql
CREATE DATABASE IF NOT EXISTS week5f;
USE week5f;

CREATE TABLE IF NOT EXISTS STUDENT (
    STUDENTID INT PRIMARY KEY,
    SNAME VARCHAR(50),
    ADDRESS VARCHAR(100)
);
```

If your Java code uses different table/column names, use those exact
names instead.

## B. Create/open the Java project

1.  Open Eclipse EE.
2.  Select **File → New → Java Project** (or open the existing project
    containing the CRUD code).
3.  Name it `StudentCRUD` if creating a new project.
4.  Add the JDBC driver to the project:
    -   Right-click the project → **Build Path → Configure Build Path**.
    -   Open **Libraries → Add External JARs**.
    -   Select the correct MySQL Connector/J JAR for MySQL, or the
        Oracle JDBC JAR for Oracle.
    -   Click **Apply and Close**.
5.  Under `src`, create a class matching the source code's public class
    name.
6.  Paste the lab code and update the connection URL, username, and
    password to match your local database configuration.
7.  Save with **Ctrl + S**.

## C. Run the program

1.  Ensure the database service is running.
2.  Confirm the database and table exist.
3.  Right-click the Java class containing `main()` → **Run As → Java
    Application**.
4.  Follow any menu prompts to insert, view, update, or delete student
    records.
5.  Check the terminal/Console output and, when necessary, query the
    table in MySQL/Oracle to confirm the changes.

## Example MySQL connection settings

Use only if they match your setup:

``` java
String url = "jdbc:mysql://localhost:3306/week5f";
String user = "root";
String password = "YOUR_MYSQL_PASSWORD";
```

Do not leave the placeholder password unchanged if your MySQL account
requires a password. Do not paste your real password into a public
README or repository.

## Expected Result

The Java program connects to the selected database and performs CRUD
operations on the student table.

------------------------------------------------------------------------

# Complex Program 4: Express REST API for Student CRUD (Use Postman)

## Aim

Create an Express web application that interacts with a REST API to
perform CRUD operations on student data.

## Software

-   VS Code
-   Node.js and npm
-   MongoDB or the database required by your supplied code
-   Postman

## A. Open the project

1.  Open VS Code.
2.  Select **File → Open Folder** and open the folder containing the
    Express API code.
3.  Open **Terminal → New Terminal**.
4.  Check Node.js and npm:

``` bash
node -v
npm -v
```

## B. Install dependencies

If `package.json` exists, run:

``` bash
npm install
```

If this is a new project and the code uses Express and MongoDB, install
the packages the code imports, for example:

``` bash
npm install express mongodb
```

Do not repeat installation if dependencies are already installed. Use
the package names shown in the supplied source code.

## C. Configure and start the API

1.  Check the database connection URL in the code. Start the database
    service or confirm the remote database is reachable.
2.  Save the server file.
3.  Run the file that starts the Express app, for example:

``` bash
node server.js
```

Use the actual entry filename in your project. Keep the terminal open
while testing. 4. Note the port printed by the server (often `3000` or
`5000`) and the API routes defined in your code.

## D. Test using Postman

1.  Open Postman and create a new HTTP request.
2.  For **GET** requests, choose `GET`, enter the route that lists
    students, and click **Send**.
3.  For **POST** requests, choose `POST`, enter the create-student
    route, then choose **Body → raw → JSON**. Send JSON fields that
    match the code, for example:

``` json
{
  "name": "Asha",
  "age": 20
}
```

4.  For **PUT** requests, use the update route and include the student
    ID where required. In **Body → raw → JSON**, provide the updated
    fields.
5.  For **DELETE** requests, use the delete route and include the
    student ID in the URL or request body exactly as required by the
    code.
6.  Click **Send** and check the status code and response body.

**Route warning:** The exact endpoints and JSON fields depend on your
supplied code. Use the route paths and field names from the code; do not
assume the examples above are identical to your implementation.

## Expected Result

Postman successfully sends GET, POST, PUT, and DELETE requests, and the
responses reflect the student records in the database.

------------------------------------------------------------------------

# Complex Program 5: JWT Authentication and Protected Endpoints

## Aim

Create a web application with authorized endpoints using JSON Web Tokens
(JWT).

## Software

-   VS Code
-   Node.js and npm
-   Express
-   MongoDB if required by the supplied code
-   Postman

## A. Install dependencies

1.  Open the folder containing the JWT project in VS Code.
2.  Open **Terminal → New Terminal**.
3.  Run `npm install` if `package.json` already lists the dependencies.
4.  If setting up from scratch and the supplied code imports these
    modules, install them:

``` bash
npm install express jsonwebtoken mongodb
```

Install only the packages the actual code requires.

## B. Start the server

1.  Check the database URL and credentials in the code if MongoDB is
    used.
2.  Save the files.
3.  Start the server using the actual entry filename, for example:

``` bash
node server.js
```

4.  Keep the terminal open and note the server port and routes.

## C. Test with Postman

1.  **Register or create a user** if the code provides a registration
    endpoint. Select `POST`, enter the route, choose **Body → raw →
    JSON**, and send the fields expected by the code.
2.  **Log in** using the login endpoint and the expected credentials.
3.  Copy the JWT token from the response.
4.  Open a protected endpoint in Postman.
5.  Select the **Authorization** tab.
6.  Choose **Bearer Token** and paste the token, or set the header
    manually:

``` text
Authorization: Bearer YOUR_TOKEN_HERE
```

7.  Click **Send**. A valid token should allow access according to the
    route's authorization logic.
8.  Test the same protected endpoint without a token. It should reject
    the request if the middleware protects that endpoint.

## Important

-   Use the route names, body fields, and token response property
    defined in your code.
-   For a lab-only demo, a hard-coded secret may appear in the sample
    code. Do not use a hard-coded secret in a real deployment.
-   Keep the terminal running while using Postman.

## Expected Result

A valid JWT permits access to protected endpoints; a missing or invalid
token is rejected by the authorization middleware.

------------------------------------------------------------------------

# Complex Program 6: React Student Management System with Routing

## Aim

Create a React application with Registration, Login, Contact, and About
pages and use routing to navigate between them.

## Software

-   VS Code
-   Node.js and npm
-   Web browser

## A. Create or open the project

If the lab project already exists, open its folder in VS Code and use
the existing setup. If creating it from scratch with Vite:

1.  Open VS Code.
2.  Select **Terminal → New Terminal**.
3.  Run:

``` bash
npm create vite@latest student-management -- --template react
cd student-management
npm install
npm install react-router-dom
```

4.  Open the created `student-management` folder in VS Code if it is not
    already open.

## B. Add the pages and routes

1.  In `src`, create or open the components used for Registration,
    Login, Contact, and About.
2.  Open `src/App.jsx` and add the routes using `react-router-dom`,
    following the code supplied for your lab.
3.  Confirm `src/main.jsx` renders the `App` component.
4.  Save all files with **Ctrl + S**.

Do not replace an existing, working lab structure with a new structure
unless you are intentionally creating the project from scratch.

## C. Run the React application

In the terminal, make sure you are inside the project folder and run:

``` bash
npm run dev
```

5.  Wait for Vite to print a local address, usually
    `http://localhost:5173/`.
6.  Hold **Ctrl** and click the displayed address, or copy it into your
    browser.
7.  Use the navigation links to open Registration, Login, Contact, and
    About.
8.  Test that selecting a page changes the URL/page without showing a
    blank screen.

## D. If the project uses Create React App instead

If the existing `package.json` uses Create React App rather than Vite,
use:

``` bash
npm start
```

Use the start command that matches the project configuration; do not run
both commands at once.

## Expected Result

The React student management application opens in a browser, and its
Registration, Login, Contact, and About pages can be accessed through
routing.

------------------------------------------------------------------------

# Common Errors and Quick Fixes

## Eclipse / JDBC

-   **`No suitable driver`:** The JDBC driver JAR is missing from the
    project build path or the URL/driver does not match the database.
-   **Connection refused:** Confirm the database service is running and
    the port/connection URL is correct.
-   **Access denied:** Verify the database username and password.
-   **Table not found:** Confirm the database and table names used by
    Java match the SQL setup.

## Express / Postman

-   **`Cannot find module`:** Run `npm install` and confirm the imported
    package is listed in `package.json`.
-   **Connection refused in Postman:** Make sure the Express server is
    running and the URL/port match the terminal.
-   **404 Not Found:** Check the HTTP method and route path against the
    Express code.
-   **400 or validation error:** Check the JSON format and required
    field names.
-   **MongoDB connection error:** Confirm the MongoDB service/URI and
    database configuration.

## JWT

-   **401 Unauthorized:** Confirm the token is present and valid.
-   **Token missing:** In Postman, choose **Authorization → Bearer
    Token** and paste the token.
-   **Invalid signature:** The server secret used to verify the token
    must match the secret used to sign it.

## React

-   **`Missing script: dev`:** Check `package.json`; the project may use
    `npm start` instead.
-   **`Failed to resolve import react-router-dom`:** Run
    `npm install react-router-dom` inside the React project folder.
-   **Blank page:** Check the browser console and terminal for import or
    JSX errors.
-   **Wrong directory:** Run npm commands in the folder containing the
    correct `package.json`.

------------------------------------------------------------------------

## Final checklist before the lab exam

-   [ ] Program 1: All shopping-cart pages open and respond to different
    screen sizes.
-   [ ] Program 2: Weather data and graph appear with a working API key.
-   [ ] Program 3: Java connects to Oracle/MySQL and CRUD operations
    work.
-   [ ] Program 4: Postman tests student CRUD routes.
-   [ ] Program 5: Postman tests both authorized and unauthorized
    requests.
-   [ ] Program 6: React pages open and navigation works.

**Note:** Exact filenames, API endpoints, JSON properties, database
credentials, and ports must match the actual lab code. Where the
syllabus image does not provide those details, this guide explains how
to use the values already present in your project.
