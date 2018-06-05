import axios from 'axios';

export const getTopArtists = () => {
    const randPage = Math.round(Math.random() * 50);
    return(
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&page=${randPage}&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json`)
    );
}

export const getTopTracks = () => {
    const randPage = Math.round(Math.random() * 50);
    return(
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&page=${randPage}&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json`)
    );
}

export const getCountriesTopTracks = (country) => {
    const randPage = Math.round(Math.random() * 50);
    return(
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&page=${randPage}&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json`)
    );
}