// JavaScript for dropdown functionality
document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        event.stopPropagation(); // Prevent event from bubbling up

        // Toggle the active class for the clicked dropdown
        this.classList.toggle('active');
        
        // Close other open dropdowns
        document.querySelectorAll('.dropdown').forEach(drop => {
            if (drop !== this) {
                drop.classList.remove('active');
            }
        });
    });
});

// Close dropdown when clicking outside
window.addEventListener('click', function() {
    document.querySelectorAll('.dropdown').forEach(drop => {
        drop.classList.remove('active');
    });
});
