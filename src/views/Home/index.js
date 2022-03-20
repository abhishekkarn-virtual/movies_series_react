import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import classes from "./home.module.css";

export const Home=()=>{
    return(
       <>
        <Header/>
        <PageTitle title="Tiles" />
        <Link to={'/series'}>
        <div className={classes.tile}>
             <h3>SERIES</h3>
        </div>
        </Link>
        <Link to={'/movies'}>
        <div className={classes.tile}>
            <h3>MOVIES</h3>
        </div>
        </Link>
       </>
    )
}