// Ui Card Component Module
class Card {

    constructor(title,body,color) {
        this.title = title;
        this.body = body;
        this.color = color;
    }
    render(rootElement) {
        // let infoDiv = document.getElementById("info")
        // let cardDiv = document.createElement("div")
        // cardDiv.style = `color: ${this.color};border: 1px solid black;padding: 10px`
        // let titleH3 = document.createElement("h3")
        // titleH3.innerText = this.title
        // let bodyP = document.createElement("p")
        // bodyP.innerText = this.body

        // cardDiv.appendChild(titleH3)
        // cardDiv.appendChild(bodyP)      
        // infoDiv.appendChild(cardDiv)

        rootElement.innerHTML = `<div style=color: ${this.color};border: 1px solid black;padding: 10px>
        <h3>${this.title}</h3>
        <p>${this.body}</p>
        </div>`           
    }
}

export {Card}