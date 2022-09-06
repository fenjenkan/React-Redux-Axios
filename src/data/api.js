import axios from 'axios'

export const getData = async () =>{
    const url = "https://jsonplaceholder.typicode.com/users";
    await axios.get(url)
        .then((response) =>{
            const data = response.data
            console.log( data)
            return data
        })
}