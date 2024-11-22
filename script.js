const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean', 
    'The Bled', 
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper', 
    'A Skylit Drive', 
    'Anywhere But Here', 
    'An Old Dog'
];

// Sort the bands array
bands.sort();

let ul= document.createElement("ul");
ul.id="bands"; // Change this to "bands"

bands.forEach((item)=>{
    let li= document.createElement("li");
    li.id="list-items";
    li.textContent=item;
    ul.appendChild(li);
})

document.body.appendChild(ul);