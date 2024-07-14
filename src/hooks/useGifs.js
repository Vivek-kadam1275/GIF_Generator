import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGifs = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(true);

    async function fetchGif(tag) {
        try {
            setLoading(true);

            const output = await axios.get(tag ? `${url}&tag=${tag}` : url);
            console.log(output);
            const image = output.data.data.images.downsized_large.url;
            setGif(image);
            setLoading(false);
        }
        catch (e) {
            toast.error('Unable to fetch api...')
            console.log(e);

        }
    }
    useEffect(() => {
        fetchGif(tag);
    }, [])

    return [gif, loading, fetchGif];
};

export default useGifs;
