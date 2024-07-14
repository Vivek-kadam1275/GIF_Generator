import React from "react"
import { useState,useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useGifs from "../hooks/useGifs";
const Tag = (props) => {

    const [tag,setTag]=useState('car');

    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(true);
    
    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

    // async function fetchGif() {
    //     try {
    //         setLoading(true);
    //         const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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
  
    const [gif,loading,fetchGif]=useGifs(tag);
    function clickHandler() {
        fetchGif(tag);
    }
    
    function changeHandler(event){
        setTag(event.target.value);
    }
    return (
        <div className="w-1/2 bg-[#4181ef] flex flex-col items-center gap-2 py-3 border-[2px] border-black  ">
            <h1 className="text-xl font-bold underline  uppercase">RANDOM {tag} GIF</h1>

            {loading ? <div className="spinner "></div> : <img src={gif} alt="loading" loading="lazy" className="w-[450px]  " />
            }
            <input type="text" className="w-8/12 py-2 rounded-lg px-7 text-center" onChange={changeHandler} value={tag} />
            <button className="bg-yellow-400 w-8/12 rounded-lg text-sm font-semibold py-2" onClick={clickHandler} >GENRERATE</button>
        
        </div>
    )
};

export default Tag;
