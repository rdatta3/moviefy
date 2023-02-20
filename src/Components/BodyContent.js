import axios from 'axios';
import {useState,useEffect} from 'react';
import Row from "react-bootstrap/Row";
import OurCard from "./ourCard";

const BodyContent=(props)=>{
    const {searchword} =props;
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
     const headers ={
                    'X-RapidAPI-Key': 'a3d78a363cmsh4c218d554d6d81cp1d52c6jsnad39d01b794a',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                  }
        axios
        .get(
            `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${searchword}`,{headers}
        )
        .then((res)=>{
            setMovies([res.data.results]);
        })
        .catch((err)=>{
            console.log("error !!!!");
        })

    },[searchword]);

    return(
        <div className="body-container">
           <Row xs={1} md={3} className="g-4">
            {

            movies && movies.length === 0 ? (
               <h2>Loading.....</h2>
            ) : (
              movies.map(movie=>movie.map((val, idx) => {
                 return <OurCard key={idx} movieItem={val} />;
             })
            ))
            }
            </Row>
        </div>
    );
}

export default BodyContent;