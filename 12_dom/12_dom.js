const div = document.createElement('div');
const ul = document.createElement('ul');
div.appendChild(ul);
document.body.appendChild(div);

colors = ['#0048BA', '#B0BF1A', '#7CB9E8', '#B284BE', '#72A0C1', '#F0F8FF', '#DB2D43', '#C46210', '#EED9C4', '#9F2B68', '#F19CBB', '#AB274F', '#3B7A57', '#FFBF00', '#9966CC', '#3DDC84', '#C88A65', '#665D1E', '#915C83', '#841B2D', '#FAEBD7', '#FBCEB1', '#00FFFF', '#7FFFD4', '#D0FF14', '#4B6F44', '#E9D66B', '#B2BEB5', '#FF9966', '#FDEE00', '#007FFF', '#F0FFFF', '#89CFF0', '#A1CAF1', '#F4C2C2', '#FEFEFA', '#FF91AF', '#FAE7B5', '#DA1884', '#7C0A02', '#848482', '#BCD4E6', '#9F8170', '#F5F5DC', '#2E5894', '#9C2542', '#FFE4C4', '#3D2B1F', '#967117', '#CAE00D', '#000000', '#3D0C02', '#54626F', '#3B3C36', '#BFAFB2', '#FFEBCD', '#A57164', '#318CE7', '#ACE5EE', '#660000', '#0000FF', '#1F75FE', '#0093AF', '#0087BD', '#0018A8', '#333399', '#A2A2D0', '#6699CC', '#5DADEC', '#126180', '#8A2BE2', '#5072A7', '#3C69E7', '#DE5D83', '#79443B', '#E3DAC9', '#CB4154', '#D891EF', '#FFAA1D', '#004225', '#CD7F32', '#964B00', '#AF6E4D', '#7BB661', '#FFC680', '#800020', '#DEB887', '#A17A74', '#CC5500', '#E97451', '#8A3324', '#BD33A4', '#702963', '#5F9EA0', '#91A3B0', '#006B3C', '#ED872D', '#A67B5B', '#4B3621', '#A3C1AD'];
const getColor = (colors) => {
    let min = 0;
    let max = colors.length - 1;
    let num = Math.floor(Math.random() * (max-min+1) + min);
    return colors[num];
}

function createList(arr)
{
    arr.forEach( (element, index) => {
        const li = document.createElement('li');
        li.style.backgroundColor = "grey";
        li.style.padding = "15px";
        li.style.borderRadius = "10px";
        li.style.margin = "10px";
        li.innerText = element;
        li.id = 0;

        let intrval = setInterval(() => {
            li.style.backgroundColor = getColor(colors);
            li.innerText = `${element} (See, My backgroud is changing)`;
            li.id = Number(li.id) + 1;
        }, 500 + (index * 100))

        li.addEventListener('click', function(e) {

            if(e.target.id > 0){
                clearInterval(intrval);
                e.target.innerText = element + "(please, click on me)";
                e.target.id = 0;
            }
            else{

            intrval = setInterval(() => {
                e.target.style.backgroundColor = getColor(colors);
                li.innerText = `${element} (See, My backgroud is changing)`;
                e.target.id = Number(li.id) + 1;
            }, 1000)
        }

        })
        ul.appendChild(li);
    });
}

createList(["Hello", "bye", "Hi", "Good Morning"]);



