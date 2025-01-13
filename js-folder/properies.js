let block = document.getElementById("property-block");

let createPropList = () => {
    return (block.innerHTML = properties.map((x) => {
        let {id, url, heroImage, heroAlt, guests, bedrooms, baths, shortBio} = x
        return `
            <div class="accomm-block">
                <img src="${heroImage}" alt="${heroAlt}" width="450" height="400" class="accomm-block-img">
                <span class="accomm-block-size">
                    ${guests} GUESTS | ${bedrooms} BEDROOMS | ${baths} BATHS
                </span>
                <h2 class="accomm-block-name">${id}</h2>
                <hr class="seperation-line">
                <p class="accomm-block-info">
                    ${shortBio}
                </p>
                <div class="accomm-block-cta-row">
                    <a href="${url}" title="View More" class="accomm-block-cta">VIEW</a>
                </div>
            </div>`
    }).join(""))
}
createPropList()