class React
{
    constructor()
    {
        this.library = 'react'
        this.server = 'http://localhost:3000'

        document.querySelector('button')
                .addEventListener('click', this.handleClick.bind(this))
    }

    handleClick()
    {
        console.log("button clicked");
        console.log(this);
    }


}

const app = new React();
