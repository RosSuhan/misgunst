let mySlidesBox = document.getElementById("mySlidesBox")
let selectorRow = document.getElementById("selectorRow")

console.log(propertyGallery)

let createMySlides = () => {
    return (mySlidesBox.innerHTML = propertyGallery.map((x) => {
        let {image, imageAlt} = x;
        return `
            <div class="mySlides">
                <img src="${image}" alt="${imageAlt}" class="mainImage">
            </div>
            `
    }).join("")
    )
}
createMySlides()

let createSlideRow = () => {
    return (selectorRow.innerHTML = propertyGallery.map((z) => {
        let {y, image, imageAlt} = z;
        return `
            <div class="column">
                <img class="demo cursor" src="${image}" style="width:100%" onclick="currentSlide(${y})" alt="${imageAlt}">
            </div>
        `
    }).join(""))
}
createSlideRow()