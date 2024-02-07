// axios
import axios from 'axios';

export default async function getShowApi() {

    // function returns access token
    const getAccessToken = async () => {
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

        // try/catch post call  "spotify for details"
        try {
            const response = await axios.post(
                'https://accounts.spotify.com/api/token', data, headers
            );
            return response.data.access_token;
        } catch (error) {
            console.log(error);
        }
    }

    //function returns podcast show
    const getShow = async () => {
        const token = await getAccessToken();

        // get call - "spotify for details"
        const show = await axios.get("https://api.spotify.com/v1/shows/3p9jAp3NXRBXZJtyks5jsh?market=US", {
            headers: 'Authorization: Bearer ' + token
        }
        )

        return show
    }

    return getShow()

}