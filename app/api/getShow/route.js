// axios
import axios from 'axios';

export async function GET() {
    //spotify client id
    let client_id = '1a659c7c204f49e0b4607851faf65b6f';
    //spotify client secret
    let client_secret = '2ea36d43d2324acdb54240475c5d12ce';

    // headers object
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


    // run
    try {
        // access token
        const access_token = await axios.post(
            'https://accounts.spotify.com/api/token', data, headers
        ).then((data) => data.data.access_token)

        // if access token is true
        if (access_token) {

            // get podcast data
            const show = await axios.get("https://api.spotify.com/v1/shows/3p9jAp3NXRBXZJtyks5jsh?market=US", {
                headers: 'Authorization: Bearer ' + access_token
            }).then((data) => {
                return data.data
            })

            return Response.json(show)

        } else {
            // else return error
            return Response.json("error, did not receive promise")
        }

    } catch (error) {
        // else return error
        console.log(error)
    }

}