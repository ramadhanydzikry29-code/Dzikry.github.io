function showSection(event, id) {
    event.preventDefault();
    // Remove 'active' from all nav links
    document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
    // Add 'active' to the clicked nav link
    event.target.classList.add('active');
    // Hide all sections
    document.querySelectorAll('main section').forEach(s => {
        s.classList.remove('active');
    });
    // Show the chosen section
    setTimeout(() => {
        document.getElementById(id).classList.add('active');
    }, 80);
}

// Show home by default on load
window.onload = function() {
    document.getElementById('home').classList.add('active');
    document.querySelector('nav ul li a').classList.add('active');
};