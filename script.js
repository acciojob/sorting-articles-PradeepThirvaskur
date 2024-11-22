//your JS code here. If required.
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

let ul= document.createElement("ul");
ul.id="bands";

sortedBands.forEach((item)=>{
    let li= document.createElement("li");
    li.textContent=item;
    ul.appendChild(li);
})

document.body.appendChild(ul);