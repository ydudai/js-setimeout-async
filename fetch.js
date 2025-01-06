
async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/")
        const data = await response.json();
        showData(data);
    } catch (err) {
        return err
    }
}

function showData(data) {
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        let name = data[i].name;
        let city = data[i].address.city;
        createParagraph(name, city);
    }   
}

function createParagraph(name, text) {
    // Create new div element
    const newDiv = document.createElement("user");
    newDiv.style.border  = "1px solid black";

    // Create 1st. paragraph child
    const p1 = document.createElement("p");
    p1.innerText = name;
    p1.style.color = "red";
    p1.style.fontSize = "x-large";
    newDiv.append(p1);

    // Create 2nd. paragraph child
    const p2 = document.createElement("p");
    p2.innerText = text;
    newDiv.append(p2);   

    // Add new div to body
    const currentScriptElement = document.getElementById("domscript");      
    document.body.append(newDiv);
    document.body.insertBefore(newDiv, currentScriptElement);   
}

getUsers();

