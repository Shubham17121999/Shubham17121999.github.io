function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Fetch GitHub calendar data using the GitHub API
GitHubCalendar(".calendar", "Shubham17121999");

// or enable responsive functionality:
GitHubCalendar(".calendar", "Shubham17121999", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "Shubham17121999", {
   proxy (Shubham17121999) {
     return fetch(`https://your-proxy.com/github?user=${Shubham17121999}`)
   }
}).then(r => r.text())