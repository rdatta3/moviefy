import { useParams } from 'react-router';
import axios from 'axios';
import {useState,useEffect} from 'react';
const MovieDetail =()=>{
    const { id } = useParams();
    const [details,setDetails] = useState([]);
    useEffect(()=>{
        const headers= {
        'X-RapidAPI-Key': 'a3d78a363cmsh4c218d554d6d81cp1d52c6jsnad39d01b794a',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }

        axios
            .get(
            `https://moviesdatabase.p.rapidapi.com/titles/${id}`,{headers}
            )
            .then( (response)=> {
                setDetails(response.data.results);
            })
            .catch( (error)=>
             {
    	        console.error(error);
             })
    },[id]);
    let src=details?.primaryImage?.url;
         if (!src){
            src=" https://cdn-icons-png.flaticon.com/512/4221/4221419.png";
         }
    return (
    <div className="movie-detail">
        <h1>{details?.titleText?.text}</h1>
        <h2>{details?.releaseDate?.year}</h2>
        <img src={src} alt="MoviePoster"/>
        <h3>{details?.primaryImage?.caption.plainText}</h3>

    </div>
    );

};

export default MovieDetail;