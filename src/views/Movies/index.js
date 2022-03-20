import {Header} from "../../components/Header"
import { PageTitle } from "../../components/PageTitle";
import classes from "./movies.module.css";
import Data from "../../assets/sample.json"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMoviesAction } from "./state/reducer";
import { useSelector } from 'react-redux';

export const MoviesPage=()=>{
    const Movies = Data.entries.filter((movie)=>{ return movie.programType === "movie"}).slice(0,21);
    console.log(Movies);
    const dispatch=useDispatch();
    useEffect(()=>{dispatch(getMoviesAction())},[])

    const state=useSelector(state=>state.movies);

    if("errorMessage" in state){
        console.log("Error");
    }else if ("isPending" in state){
        console.log("pending")
    }else if("resource" in state){
        console.log("Successfull");
    }


    return(
        <>
        <Header/>
        <PageTitle title={"Movies"} />
        <div className={classes.container}>
            {
                Movies.map((m)=>{
                    return(
                        <div className={classes.tile}>
                            <img src={m.images["Poster Art"].url} width="150" height="300"></img>
                        <h3>{m.title}</h3>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}