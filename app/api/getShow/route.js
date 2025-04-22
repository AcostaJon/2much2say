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

    // post request to return access token 
    const access_token = await axios.post(
        'https://accounts.spotify.com/api/token', data, headers
    )
        .then((data) => data.data.access_token)
        .catch((error) => {
            throw new Error("error, post request for access token, returned: " + error)
        })

    // if access token is true get request to get podcast Show data
    if (access_token) {
        // get podcast data
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