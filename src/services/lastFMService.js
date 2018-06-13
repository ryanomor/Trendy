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

const getTopTracks = (page = 1, limit = "") => {
    // const randPage = Math.round(Math.random() * 50);
    console.log("page:", page, "limit:", limit);
    const pageLimit = limit ? `&limit=${limit}` : "";
    return(
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks${pageLimit}&page=${page}&api_key=${API_KEY}&format=json`)
    );
}

const getTopTracksByGenre = (genre, page = 1) => {
    const randPage = Math.round(Math.random() * 50);
    return(
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genre}&page=${page}&api_key=${API_KEY}&format=json`)
    );
}

const getTopTracksByArtist = (artist, page = 1) => {
    return(
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&page=${page}&api_key=${API_KEY}&format=json`)
    );
}

const getTopTracksByTrack = (track, page = 1)=> {
    return(
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${track}&page=${page}&api_key=${API_KEY}&format=json`)
    );
}

const getTopTracksByAlbum = (album, page = 1) => {
    return(
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&page=${page}&api_key=${API_KEY}&format=json`)
    );
}

const getTopTracksByCountry = (country, page = 1) => {
    return(
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&page=${page}&api_key=${API_KEY}&format=json`)
    );
}

export default {
    getTrackTags,
    getTopTracks,
    getTopArtists,
    getTopTracksByGenre,
    getTopTracksByTrack,
    getTopTracksByAlbum,
    getTopTracksByArtist,
    getTopTracksByCountry
}