# Skill Development Laboratory --- Execution README

This README explains how to execute **Simple Programs 4, 5, and 6** for
the Skill Development Laboratory.

## Software Used

-   **Simple Program 4:** Eclipse Enterprise Edition (Eclipse EE) ---
    XML, DTD, and XSD validation
-   **Simple Program 5:** Eclipse EE with Apache Tomcat 9 --- Java
    Servlet and HTTP session tracking
-   **Simple Program 6:** Visual Studio Code (VS Code) --- Node.js
    built-in modules

------------------------------------------------------------------------

# Simple Program 4: XML Validation Using DTD and XSD

## Aim

Create an XML file for a bookstore and validate it using both DTD and
XSD.

## Files Required

Create these three files in the **same folder** in Eclipse:

-   `bookstore.xml`
-   `bookstore.dtd`
-   `bookstore.xsd`

### 1. Create the project

1.  Open Eclipse EE.
2.  Select **File → New → Project → General → Project** (or create a
    suitable general project).
3.  Name it `XMLValidation` and click **Finish**.
4.  Right-click the project → **New → File** and create the three files
    listed above.

### 2. Add the file contents

Copy the corresponding XML, DTD, and XSD code into each file. Make sure
the XML document refers to the DTD:

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE bookstore SYSTEM "bookstore.dtd">
<bookstore>
    <book>
        <title>Introduction to XML</title>
        <author>John Doe</author>
        <price>29.99</price>
    </book>
    <book>
        <title>Web Development Basics</title>
        <author>Jane Smith</author>
        <price>39.95</price>
    </book>
</bookstore>
```

The DTD defines the required order of each book's elements: `title`,
`author`, and `price`.

### 3. Validate using DTD

1.  Save all files with **Ctrl + S**.
2.  In Project Explorer, right-click `bookstore.xml`.
3.  Select **Validate**, if available in your Eclipse XML tools.
4.  Check the **Problems** view for validation errors.

### 4. Validate using XSD

The XML must reference the XSD as well. Change the opening `<bookstore>`
tag to:

``` xml
<bookstore xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:noNamespaceSchemaLocation="bookstore.xsd">
```

Keep the existing `DOCTYPE` line if you also want the document to
reference the DTD. Save the file and run **Validate** again.

The XSD defines `price` as `xs:decimal`. To test it, temporarily change
a price such as `29.99` to `hello`, save, and validate. The XSD
validation should report an error. Change it back to a number afterward.

## Expected Result

The bookstore XML validates when its structure and values follow the
DTD/XSD rules. An invalid price such as `hello` should fail XSD
validation.

------------------------------------------------------------------------

# Simple Program 5: Session Tracking Using HTTP Session

## Aim

Track a user's session information, including session ID, creation time,
last access time, user ID, and visit count.

## Software

-   Eclipse EE
-   Apache Tomcat **9**
-   Java

**Compatibility note:** The supplied servlet uses `javax.servlet`
imports, so Tomcat 9 is suitable. Tomcat 10 and later use
`jakarta.servlet` and require updated imports.

## 1. Create a Dynamic Web Project

1.  Open Eclipse EE.
2.  Select **File → New → Dynamic Web Project**.
3.  Enter project name `SessionDemo`.
4.  Select the configured **Apache Tomcat v9.0** runtime.
5.  Click **Finish**.

If the Dynamic Web Project option is missing, open **File → New →
Other** and search for it.

## 2. Create the Servlet

1.  Expand `SessionDemo` in Project Explorer.
2.  Right-click the Java source folder (usually `Java Resources → src`
    or `src/main/java`, depending on the project).
3.  Select **New → Servlet**.
4.  Package name: `com.example`
5.  Class name: `SessionTrack`
6.  Set the URL mapping to `/SessionTrack`.
7.  Click **Finish**.

## 3. Paste and save the code

Replace the generated class content with the SessionTrack servlet code
used for this lab. Keep `package com.example;` as the first line if you
created the `com.example` package. The code should include:

-   `@WebServlet("/SessionTrack")`
-   `request.getSession()`
-   `session.getId()`
-   `session.getCreationTime()`
-   `session.getLastAccessedTime()`
-   `session.setAttribute()` and `session.getAttribute()`

Save with **Ctrl + S**.

## 4. Start Tomcat and run the servlet

1.  Open the **Servers** view in Eclipse.
2.  If Tomcat is already running, stop it before restarting.
3.  Right-click the Tomcat server and choose **Start**.
4.  Right-click `SessionTrack.java` → **Run As → Run on Server**.
5.  Select Tomcat 9 and finish the wizard.

### If port 8080 is already in use

A port-conflict check showed that port `8080` was occupied by
`TNSLSNR.EXE` (an Oracle listener), PID `5736`. Do not terminate that
process just to free the port.

Instead: 1. In Eclipse's **Servers** view, double-click the Tomcat
server. 2. In the **Ports** section, change the HTTP/1.1 port from
`8080` to `8081`. 3. Save with **Ctrl + S** and start Tomcat again. 4.
If the error names a different port, change only the port identified by
the error.

## 5. View the output

Open the browser at:

-   If using port 8080: `http://localhost:8080/SessionDemo/SessionTrack`
-   If using port 8081: `http://localhost:8081/SessionDemo/SessionTrack`

The page should show the welcome message, session ID, creation time,
last access time, user ID (`ABCD`), and visit count. Refresh the page to
test the session.

## Expected Result

The servlet displays session details in the browser and maintains visit
information using `HttpSession`.

------------------------------------------------------------------------

# Simple Program 6: Custom HTTP Server and Node.js Built-in Modules

## Aim

Create a custom server using Node.js `http` and explore the `os`,
`path`, and `events` modules.

## Software

-   Visual Studio Code
-   Node.js

## 1. Create the project

1.  Open VS Code.
2.  Select **File → Open Folder** and create/open a folder named
    `NodeModulesDemo`.
3.  In the Explorer panel, create a file named `server.js`.

## 2. Paste the program

Use the lab's Node.js code that imports `http`, `os`, `path`, and
`events`, creates an `EventEmitter`, creates an HTTP server, and
displays the required module information. Save with **Ctrl + S**.

A typical file begins with:

``` javascript
const http = require('http');
const os = require('os');
const path = require('path');
const EventEmitter = require('events');
```

Use the complete program supplied for your lab, not just these import
lines.

## 3. Run the program

1.  In VS Code, select **Terminal → New Terminal**.
2.  Make sure the terminal is in the folder containing `server.js`.
3.  Run:

``` bash
node server.js
```

4.  If the program reports that the server is listening on a port (for
    example, `3000`), keep the terminal open.
5.  Open a browser and visit the matching address, for example
    `http://localhost:3000`. Use the actual port shown in your
    code/terminal.

## 4. Check the output

-   The terminal may display operating-system information from `os`,
    path information from `path`, and event messages from `events`.
-   The browser displays the response written by the HTTP server.
-   To stop the server, return to the terminal and press **Ctrl + C**.

## Expected Result

The Node.js server runs successfully, the browser receives its HTTP
response, and the program demonstrates the built-in `os`, `path`, and
`events` modules.

------------------------------------------------------------------------

## Common Troubleshooting

-   **Eclipse cannot find "Validate":** The XML editor/validation
    features may not be installed or enabled in that Eclipse setup.
-   **Servlet imports show errors:** Confirm the project uses Tomcat 9
    for `javax.servlet` code.
-   **Tomcat port conflict:** Check the exact port in the Console and
    change that port in the server configuration rather than terminating
    an unrelated service.
-   **Node says "Cannot find module":** Check that the terminal is in
    the folder containing the file and that the filename is correct.
-   **Node says "EADDRINUSE":** The port used by the HTTP server is
    occupied. Stop the previous instance of your own server or use a
    different available port in the code.

## Summary

  -----------------------------------------------------------------------
  Program                 Tool                    Main task
  ----------------------- ----------------------- -----------------------
  Simple 4                Eclipse EE              Validate bookstore XML
                                                  using DTD and XSD

  Simple 5                Eclipse EE + Tomcat 9   Display HTTP session
                                                  information

  Simple 6                VS Code + Node.js       Run an HTTP server and
                                                  explore `os`, `path`,
                                                  and `events`
  -----------------------------------------------------------------------
