const scriptURL = 'https://script.google.com/macros/s/AKfycbwS5v6gx02074E-SzUbjGmukmmcwdJfh9x22taCvpdzsKZhyAHKTOW_v5lNL8yb7X6MMg/exec'

const form = document.forms['form-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response =>
            alert("Thank you! your form is submitted successfully.")
        )
        .then(() => { window.location.reload(); })
        .catch(error => { console.error('Error!', error.message) })
})
