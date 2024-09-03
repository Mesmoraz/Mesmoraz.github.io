document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-bar a');
    const sections = document.querySelectorAll('section, #hero-section'); // Include hero-section

    const updateActiveLink = () => {
        let currentSection = sections[0];

        // Calculate which section is currently in view
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.getBoundingClientRect().height;

            // Debugging: Log section positions
            console.log(`Section: ${section.id}, Top: ${sectionTop}, Height: ${sectionHeight}`);

            // Check if the section's center is within the viewport
            if (sectionTop < window.innerHeight / 2 && (sectionTop + sectionHeight) > window.innerHeight / 2) {
                currentSection = section;
            }
        });

        // Debugging: Log the current section being marked as active
        console.log(`Current Active Section: ${currentSection.id}`);

        // Update the active link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection.id) {
                link.classList.add('active');
                console.log(`Link activated: ${link.getAttribute('href')}`);
            }
        });
    };

    // Update active link on page load
    updateActiveLink();

    // Event listener for scrolling to update active link
    window.addEventListener('scroll', () => {
        console.log('Scroll event detected');
        updateActiveLink();
    });

    // Event listener for clicks on nav links to handle smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior

            // Debugging: Log click event
            console.log(`Clicked on link: ${this.getAttribute('href')}`);

            // Manually update the active link on click
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            const sectionId = this.getAttribute('href');
            document.querySelector(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
