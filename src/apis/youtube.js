import axios from 'axios';

const KEY = 'AIzaSyAkcVnPAjsQjDt9smR85RiKyGT4FUgvLrc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
