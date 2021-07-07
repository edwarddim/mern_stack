// console.log("JS working")

// const container = document.createElement("div")

// const heading = document.createElement("h1")
// heading.innerText = "This is your h1 created by JS"
// container.appendChild(heading)

// const paragraph = document.createElement("p")
// paragraph.innerText = "This is the P Tag"
// container.appendChild(paragraph)

// // RENDERING THE JS OBJECTS TO HTML
// setTimeout(()=> {
//     document.body.appendChild(container)
// }, 2000)


import Counter from "./components/Counter.js"

new Counter({
    header : "Click this button if you like Pineapple on your pizza",
    body: "No one likes Pinaeapples???"
},document.body)

new Counter({
    header : "Click this button if you like MERN",
    body: "No one likes MERN"
},document.body)