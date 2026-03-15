# Developer Productivity Toolkit

A lightweight web-based collection of small utilities that developers frequently need when working with data, debugging code, or manipulating text.

This project provides a clean, minimal **developer-console inspired interface** and runs entirely in the browser using **HTML, CSS, and JavaScript**, making it fast, simple, and easy to deploy.

---

## Live Demo

You can view the live site here:

```
https://c-m1nusm1nus.github.io/developer-productivity-toolkit/
```

---

## Overview

Developers often rely on small utilities to perform common tasks such as converting data formats, testing regular expressions, encoding strings, or converting timestamps.

The **Developer Productivity Toolkit** consolidates several of these tools into a single lightweight web application.

The site is designed to:

* Provide quick utilities for everyday developer tasks
* Demonstrate frontend development skills
* Showcase clean UI and practical web tools in a portfolio project

---

## Features

### JSON → CSV Converter

Converts JSON arrays into CSV format for easier use in spreadsheets or data analysis tools.

**Example input**

```json
[
  {"name":"Alice","age":25},
  {"name":"Bob","age":30}
]
```

**Output**

```
name,age
"Alice",25
"Bob",30
```

---

### Base64 Encoder / Decoder

Encodes plain text into Base64 or decodes Base64 strings back into readable text.

Useful for:

* API debugging
* Authentication headers
* Binary-to-text conversions

---

### Regex Tester

Allows developers to quickly test regular expressions against sample text.

Features:

* Real-time pattern matching
* Displays all matches found in the text
* Handles invalid patterns gracefully

---

### Timestamp → Human Date Converter

Converts Unix timestamps into readable date formats.

Useful for:

* Debugging logs
* API timestamps
* Database time values

---

## Technologies Used

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**
* **GitHub Pages** for deployment

No external libraries or frameworks are required.

---

## Installation

Clone the repository:

```
git clone https://github.com/C-M1nusM1nus/developer-productivity-toolkit
```

Open the project folder:

```
cd developer-productivity-toolkit
```

Then open the application:

```
index.html
```

The project runs entirely in the browser and requires **no server setup**.

---

## Deployment (GitHub Pages)

To deploy the site:

1. Push the project to a GitHub repository
2. Navigate to **Repository Settings**
3. Select **Pages**
4. Set:

```
Deploy from branch
Branch: main
```

The site will become available at:

```
https://yourusername.github.io/developer-productivity-toolkit
```

---

## Purpose

This project was built as a **portfolio piece** to demonstrate skills in:

* Frontend web development
* JavaScript DOM manipulation
* UI design
* Creating practical developer tools

---

## Future Improvements

Potential features that could be added:

* JSON formatter / validator
* JWT decoder
* URL encoder / decoder
* UUID generator
* Hash generator (SHA256 / MD5)
* Dark/light theme toggle
* File upload support for JSON conversion

---

## License

This project is open-source and available under the **MIT License**.

---

## Author

Developed as part of a developer portfolio to demonstrate practical web tooling and frontend engineering skills.
