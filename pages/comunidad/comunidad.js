document.addEventListener('DOMContentLoaded', function() {    
    const navLinks = document.querySelectorAll('.Cont-secciones ul a');
    const contentSections = document.querySelectorAll('#Cont-dinamico section');
    function updateContent(targetId, shouldPush = true) {
        
        
        contentSections.forEach(section => {
            section.style.display = 'none';
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }

        navLinks.forEach(a => {
            a.classList.remove('seccion-activa');
        });
        const activeLink = document.querySelector(`.Cont-secciones ul a[href="#${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('seccion-activa');
        }
        
        if (shouldPush) {
             history.pushState(
                { section: targetId },
                '', 
                `#${targetId}`
             );
        }
    }

    
    const initialHash = window.location.hash.substring(1) || navLinks[0].getAttribute('href').substring(1);
    
    updateContent(initialHash, false);

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href').substring(1); 
            updateContent(targetId);
        });
    });

    window.addEventListener('popstate', function(event) { 
        if (event.state && event.state.section) {
            updateContent(event.state.section, false); 
        } else {
            const fallbackId = window.location.hash.substring(1) || navLinks[0].getAttribute('href').substring(1);
            updateContent(fallbackId, false); 
        }
    });
});