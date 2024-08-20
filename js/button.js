document.querySelectorAll('.showFormButton').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('overlay').classList.add('show');
        document.querySelector('.contact-form').classList.add('show');
        history.pushState({formOpen: true}, '', '#kontaktform'); 
    });
});

function closeForm() {
    document.getElementById('overlay').classList.remove('show');
    document.querySelector('.contact-form').classList.remove('show');
    if (history.state && history.state.formOpen) {
        history.back(); 
    }
}

document.getElementById('closeFormButton').addEventListener('click', closeForm);

document.getElementById('overlay').addEventListener('click', closeForm);

window.addEventListener('popstate', function(event) {
    if (!event.state || !event.state.formOpen) {
        closeForm();
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (!email && !phone) {
        alert('Bitte geben Sie mindestens eine Möglichkeit der Kontaktaufnahme an: E-Mail oder Telefon.');
        event.preventDefault(); 
    } else if (!name || !message) {
        alert('Bitte füllen Sie alle Pflichtfelder aus.');
        event.preventDefault(); 
    }
});