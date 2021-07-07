class Counter{
    constructor(props, parentNode){

        const {header, body} = props

        this.count = 0

        const container = document.createElement("div")

        const heading = document.createElement("h1")
        heading.innerText = header
        container.appendChild(heading)

        const paragraph = document.createElement("p")
        paragraph.innerText = body
        container.appendChild(paragraph)

        const btn = document.createElement("button")
        btn.innerText = "Click me!"

        btn.addEventListener("click", event => {
            this.count++
            paragraph.innerText = `The button has been clicked ${this.count} times`
        })

        container.appendChild(btn)

        parentNode.appendChild(container)

    }
}

export default Counter