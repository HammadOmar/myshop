// FAQ Accordion Functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = button.nextElementSibling;

        // Close all other FAQs
        document.querySelectorAll('.faq-answer').forEach(item => {
            if (item !== answer) {
                item.classList.remove('show');
                item.previousElementSibling.classList.remove('active');
            }
        });

        // Toggle current FAQ
        button.classList.toggle('active');
        answer.classList.toggle('show');
    });
});

// Form Submission (Example)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your message has been sent.');
        form.reset();
    });
}