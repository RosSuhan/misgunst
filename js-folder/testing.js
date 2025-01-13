let sheet_title = '4x4Bookings';
let sheet_id = '15U1JxYwgVhCwQ5uKYLmJrFt49mvu4ZtLRUoJr3mKIz4';
let sheet_range = 'A:B';
let full_url = ('https://docs.google.com/spreadsheets/d/' + sheet_id + '/gviz/tq?sheet=' + sheet_title + '&range=' + sheet_range);

fetch(full_url)
.then(res => res.text())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));
    // console.log(data.table)
    const filteredData = Array.from(data).filter(item =>
        item.v === "2024-12-26");
        console.log(filteredData)
})


// console.log(rep)