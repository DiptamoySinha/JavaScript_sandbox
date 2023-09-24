const promiseOne = new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log("promise executed")
        let error = false
        if(!error)
        {
            console.log("resolved...")
            resolve({name: "Diptamoy", age: 24})
        }
        else{
            reject("ERROR, Something wrong")
        }
    }, 2000);
})

// consume promise with : then - catch
promiseOne
.then( (data) => {
    console.log(data)
})
.catch( (err) => {
    console.log(err)
})

// consume promise with : async - await

async function consume()
{
    let data;
    try{
      data  = await promiseOne;
    }
    catch(err)
    {
        console.log(err)
    }
    console.log(data)
}

////// fetch
const getData = async () => {
    const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');
    const data = await response.json();
    return data
}

getData()
.then( d => {
    console.log("getting data....")
    console.log(d);
})
.catch(err => {
    console.log(err)
})

