const scriptURL = 'https://script.google.com/macros/s/AKfycbxTQE0LwIVj7TYWaF0jHrS8CPB2df3gqWpR8_5C-bKKrT-G8paSvNMi4NWp5m934Nn74g/exec'
const form = document.forms['4x4Bookings']
const message = document.getElementById('message')

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
                    // outputData(headings, rows)
            
                });
            }
        })
        .catch(error => console.error('Error!', error.message))
})

const url = "https://script.google.com/macros/s/AKfycbxTQE0LwIVj7TYWaF0jHrS8CPB2df3gqWpR8_5C-bKKrT-G8paSvNMi4NWp5m934Nn74g/exec"

let bookingList = []

let blockout = () => {
    fetch(url).then(res => res.json()).then(data => {
        // console.log(data)
        const headings = data[{headerValues: ['date', 'time']}]
        const rows = data.slice(1).reverse();
        
        
        rows.forEach((row, i) => {
            const date = row.get('date')
            const time = row.get('time')
        
            // do something with date and time
        
        })

        // console.log(data[1])
    })
}
blockout()