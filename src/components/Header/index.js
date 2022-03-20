import classes from "./header.module.css";

export const Header =()=>{
    return(

        <>
        <div className={classes.head}>
        <h1>Demo Streaming</h1>
        <nav>
            <ul>
                <li>login</li>
                <li>Start your free trial</li>
            </ul>
        </nav>
        </div>
        </>
    )
}
