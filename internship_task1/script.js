document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting me! I’ll get back to you soon.');
    this.reset();
});
