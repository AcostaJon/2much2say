// axios
import axios from 'axios';

export async function GET() {
    //spotify client id
    let client_id = process.env.client_Id;
    //spotify client secret
    let client_secret = process.env.client_Secret;
    // headers object in order to get access token
    const headers = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
        }
    };
    // data object
    const data = {
        grant_type: 'client_credentials',
    };

<<<<<<< HEAD
    // POST request for getting access token 
=======
    // post request to return access token 
>>>>>>> af9571c3e3cb945e213b27eac9a21481257d289c
    const access_token = await axios.post(
        'https://accounts.spotify.com/api/token', data, headers
    )
        .then((data) => data.data.access_token)
        .catch((error) => {
            throw new Error("error, post request for access token, returned: " + error)
        })

<<<<<<< HEAD
    //Get request for getting podcast data, if access token is true 
    if (access_token) {
        // Get request 
=======
    // if access token is true get request to get podcast Show data
    if (access_token) {
        // get podcast data
>>>>>>> af9571c3e3cb945e213b27eac9a21481257d289c
        const show = await axios.get("https://api.spotify.com/v1/shows/3p9jAp3NXRBXZJtyks5jsh?market=US", {
            headers: 'Authorization: Bearer ' + access_token
        }).then((data) => {
            return data.data
        }).catch((error) => {
<<<<<<< HEAD
            throw new Error("error, post request for access token, returned: " + error)
=======
            throw new Error("error, get request for data, returned: " + error)
>>>>>>> af9571c3e3cb945e213b27eac9a21481257d289c
        })

        return Response.json(show)
    }
}