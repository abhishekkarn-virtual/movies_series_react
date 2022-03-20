import classes from "./pageTitle.module.css";

export const PageTitle=({title})=>{
    return (
    <div className={classes.headtitle}>
        <h2>Popular {title}</h2>
    </div>
    )
}