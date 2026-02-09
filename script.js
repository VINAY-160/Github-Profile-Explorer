const GITHUB_API_BASE = "https://api.github.com/users"

const searchInput = document.querySelector("#searchInput")
const searchBtn = document.querySelector("#searchBtn")
const statusEl = document.querySelector(".status")
const profileCard = document.querySelector(".profile-card")
const profileAvatar = document.querySelector(".profile-avatar")
const profileInfo = document.querySelector(".profile-info")
const reposSection = document.querySelector(".repos-section")
const reposContainer = document.querySelector(".repos-container")


// DOM loaded hote hi searching start
searchBtn.addEventListener("click", () => {
  const username = searchInput.value.trim()
  if (!username) return
  searchBtn.disabled = true
  searchBtn.textContent = "Searching..."
  statusEl.textContent = ""
  fetchUser(username)
})


//user details fetch
async function fetchUser(username) {
  try {
    const res = await fetch(`${GITHUB_API_BASE}/${username}`)
    if (!res.ok) throw new Error("User not found")
    const user = await res.json()
    renderProfile(user)
    fetchRepos(username)
  } catch (err) {
    statusEl.textContent = err.message
    clearUI()
    searchBtn.disabled = false
    searchBtn.textContent = "Search"
  }
}

//fetched repos
async function fetchRepos(username) {
  try {
    const res = await fetch(`${GITHUB_API_BASE}/${username}/repos`)
    const repos = await res.json()
    renderRepos(repos)
  } finally {
    searchBtn.disabled = false
    searchBtn.textContent = "Search"
  }
}


//display here
function renderProfile(user) {
  profileCard.style.display = "flex"
  profileAvatar.innerHTML = `<img src="${user.avatar_url}" />`
  profileInfo.innerHTML = `
    <h2>${user.name || user.login}</h2>
    <a href="${user.html_url}" target="_blank">@${user.login}</a>
    <p>${user.bio || "No bio available"}</p>
    <div class="profile-stats">
      <span>Repos ${user.public_repos}</span>
      <span>Followers ${user.followers}</span>
      <span>Following ${user.following}</span>
    </div>
  `
}

function renderRepos(repos) {
  reposSection.style.display = "block"
  reposContainer.innerHTML = ""
  repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count) //idhr se chatgpt used
    .slice(0, 6)
    .forEach(repo => {
      const el = document.createElement("div")
      el.className = "repo-card"
      el.innerHTML = `
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <div class="repo-meta">
          <span>⭐ ${repo.stargazers_count}</span>
          <span>${repo.language || "N/A"}</span>
        </div>
      `
      reposContainer.appendChild(el)
    })
}

function clearUI() {
  profileCard.style.display = "none"
  reposSection.style.display = "none"
  profileAvatar.innerHTML = ""
  profileInfo.innerHTML = ""
  reposContainer.innerHTML = ""
}
