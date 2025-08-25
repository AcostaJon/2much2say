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

    // POST request for getting access token 
    const access_token = await axios.post(
        'https://accounts.spotify.com/api/token', data, headers
    )
        .then((data) => data.data.access_token)
        .catch((error) => {
            throw new Error("error, post request for access token, returned: " + error)
        })

    //Get request for getting podcast data, if access token is true 
    if (access_token) {
        // Get request 
        const show = await axios.get("https://api.spotify.com/v1/shows/3p9jAp3NXRBXZJtyks5jsh?market=US", {
            headers: 'Authorization: Bearer ' + access_token
        }).then((data) => {
            return data.data
        }).catch((error) => {
            throw new Error("error, post request for access token, returned: " + error)
        })

        return Response.json(show)
    }
}