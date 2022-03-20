import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getSeriesAction } from "./state/reducer";
import { Header } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import classes from "./series.module.css";


export const SeriesPage=()=>{
  const dispatch=useDispatch();
  useEffect(()=>{dispatch(getSeriesAction())},[])

  const state=useSelector(state=>state.series);

  if("errorMessage" in state){
    return(
        <div>
            Oops, something went wrong !
        </div>
    )
  }else if ("isPending" in state){
    return(
        <div>
            Loading...
        </div>
    )
  }else if("resource" in state){
      console.log("Successfull");
      return(
          <>
          <Header/>
          <PageTitle title={"Series"} />
          <div className={classes.container}>
              {
                  state.resource.slice(0,21).map((m)=>{
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

}