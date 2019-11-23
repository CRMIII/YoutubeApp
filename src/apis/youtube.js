import axios from 'axios'



const KEY = 'AIzaSyBid6NOCbxYPIQWMucVaKneHiOmVKTs9W4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});