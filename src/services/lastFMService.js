import axios from 'axios';

const API_KEY = process.env.REACT_APP_LASTFM_API_KEY;

const getTrackTags = track => {
    return(
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.gettoptags&artist=${track.artist.name}&track=${track.name}&api_key=${API_KEY}&format=json`)
    );
}

const getTopArtists = () => {
    const randPage = Math.round(Math.random() * 50);
    return(
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&page=${randPage}&api_key=${API_KEY}&format=json`)
    );
}

const getTopTracks = () => {
    const randPage = Math.round(Math.random() * 50);
    return(
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&page=${randPage}&api_key=${API_KEY}&format=json`)
    );
}

const getTopTracksByGenre = (genre) => {
    const randPage = Math.round(Math.random() * 50);
    return(
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genre}&page=${randPage}&api_key=${API_KEY}&format=json`)
    );
}

const getCountriesTopTracks = (country) => {
    const randPage = Math.round(Math.random() * 50);
    return(
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&page=${randPage}&api_key=${API_KEY}&format=json`)
    );
}

export default {
    getTrackTags,
    getTopTracks,
    getTopArtists,
    getTopTracksByGenre,
    getCountriesTopTracks
}