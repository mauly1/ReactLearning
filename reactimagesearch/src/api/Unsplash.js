import Axios from "axios";

export default Axios.create(
    {
        baseURL:'https://api.unsplash.com',
        headers: {
            Authorization: 'Client-ID STf692Qw2_NqBq6wJGGuyPqF7SnNLZZyGIakhvUbckI'
        }
    }
);


