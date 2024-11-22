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

let ul = document.querySelector(".band");  // Select the ul element with id "band"
bands.forEach((item) => {
    let li = document.createElement("li");
    li.className = "list-items";  // Use className instead of id for list items
    li.textContent = item;
    console.log(item);
    ul.appendChild(li);  // Append li elements to the ul
});
