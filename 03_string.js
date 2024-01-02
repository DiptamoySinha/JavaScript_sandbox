// let gameName = "Pocamon, Cod";
let gameName = "A man, a plan, a canal: Panama";
gameName = gameName.toLowerCase();


// console.log(gameName[0]);
// console.log(gameName.length);

// console.log(gameName.substring(-1, 5));
// console.log(gameName.slice(0, 5));
// console.log(gameName.replace('mon', -5));

function onlyLettersAndNumbers(str) {
    return /^[A-Za-z0-9]*$/.test(str);
  }

for(let i in gameName)
{
    if(onlyLettersAndNumbers(gameName[i])) console.log(`${i} : ${gameName[i]}`)
}