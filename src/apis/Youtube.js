import axios from 'axios';

const KEY = 'AIzaSyCov3IjUG_vruqral7Rd4n4YB65RjkTSC8'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});