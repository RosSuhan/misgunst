const scriptURL = 'https://script.google.com/macros/s/AKfycbyWZHY8yTMEMJlZvsO6A3u0cethEo8k0gb59xLTiEDGfWaVi-1ddtFPrA_fXdgZAIjL/exec'
const form = document.forms['4x4Bookings']
const message = document.getElementById('message').innerHTML

form.addEventListener('submit', e => {
    e.preventDefault()
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.status === 200) {
                console.log('Success!', response)
                document.forms['4x4Bookings'].reset()
                document.getElementById('message').innerHTML = "Thank you for your booking."
                fetch(url).then(res => res.json()).then(data => {
                    console.log(data)
                    const headings = data[0];
                    const rows = data.slice(1).reverse();
                    outputData(headings, rows)
            
                });
            }
        })
        .catch(error => console.error('Error!', error.message))
})

const url = "https://script.google.com/macros/s/AKfycbyWZHY8yTMEMJlZvsO6A3u0cethEo8k0gb59xLTiEDGfWaVi-1ddtFPrA_fXdgZAIjL/exec"

let bookingList = []

let blockout = () => {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        const headings = data[0]
        const rows = data.slice(1).reverse();
    })
}
blockout()