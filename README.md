<p align="center">
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="80" alt="GitHub Logo">
</p>

<h1 align="center">GitHub Profile Explorer</h1>

<p align="center">
  A clean and minimal web application to search and explore GitHub profiles using the GitHub REST API.
</p>

---
Website: https://github-profile-explorer-vm-dev-studio.netlify.app
Topics: javascript, frontend, github-api, web-project, portfolio
---
## 📌 Description

GitHub Profile Explorer is built to practice real-world frontend development concepts using vanilla technologies.  
It focuses on API integration, asynchronous JavaScript, dynamic DOM manipulation, and clean UI design without relying on any frameworks.

---

## ✨ Features

- 🔍 Search any GitHub user by username  
- 👤 View public profile information:
  - Profile avatar  
  - Name and bio  
  - Followers, following, and repository count  
- ⭐ Display top repositories sorted by stars  
- ⚠️ Handles invalid usernames and API errors gracefully  
- 🌙 Responsive and dark-themed user interface  

---

## 🛠 Tech Stack

- 🧱 HTML5  
- 🎨 CSS3  
- ⚙️ JavaScript (ES6+)  
- 🔗 GitHub REST API  

---

## 🔗 API Endpoints Used

- 👤 User Profile  
  `https://api.github.com/users/{username}`

- 📦 User Repositories  
  `https://api.github.com/users/{username}/repos`

---

## 🔄 Application Flow

1. ⌨️ User enters a GitHub username in the search input  
2. 🌐 The application sends a request to the GitHub API  
3. 📄 Profile data is fetched and rendered dynamically  
4. 📊 Repository data is fetched, sorted by stars, and displayed  

---

## 📂 Project Structure

```

├── index.html
├── style.css
├── script.js
└── README.md

```

---

## 🧪 Sample Usernames for Testing

```

octocat
torvalds
gaearon

```

---

## 🎯 Learning Outcomes

- 🔗 Consuming REST APIs using `fetch`
- ⏳ Working with asynchronous JavaScript using `async/await`
- 🚦 Managing UI states such as loading and errors
- 🧩 Dynamic rendering using DOM manipulation
- 🧼 Writing clean and maintainable frontend code

---

## 🚀 Future Improvements

- 🏷 Repository language filtering  
- 📄 Pagination for repositories  
- ⏳ Loading skeletons  
- 🎨 Theme toggle  
- ⚛️ React-based implementation  

---

## 👨‍💻 Author

**Vinay Mishra**  
Frontend JavaScript Project

---

## 📄 License

This project is licensed under the **MIT License**.
