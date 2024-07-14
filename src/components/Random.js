import React, { useEffect, useState } from "react"
import axios from "axios";
import App from "../App";
 import toast from "react-hot-toast";
import useGifs from "../hooks/useGifs";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = (props) => {

    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(true);

    // async function fetchGif() {
    //     try {
    //         setLoading(true);
    //         const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;
    //         const output = await axios.get(url);
    //         console.log(output);
    //         const image = output.data.data.images.downsized_large.url;
    //         setGif(image);
    //         setLoading(false);
    //     }
    //     catch (e) {
    //         toast.error('Unable to fetch api...')
    //         console.log(e);

    //     }
    // }
    // useEffect(() => {
    //     fetchGif();
    // }, [])

     const [gif,loading,fetchGif]=useGifs();
    function clickHandler() {
        fetchGif();
    }



    return (
        <div className="w-1/2 bg-[#2fdf61] flex flex-col items-center gap-2 py-3 border-[2px] border-black  ">
            <h1 className="text-xl font-bold underline  uppercase">A RANDOM GIF</h1>

            {loading ? <div className="spinner "></div> : <img src={gif} alt="loading" loading="lazy" className="w-[450px]  " />
            }
            <button className="bg-yellow-400 w-8/12 rounded-lg text-sm font-semibold py-2" onClick={clickHandler} >GENRERATE</button>

        </div>
    )
};

export default Random;
