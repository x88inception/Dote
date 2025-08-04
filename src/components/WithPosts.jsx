import { Outlet } from "react-router-dom";


export default function WithPosts(){
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Posts</h1>
            <Outlet/>
        </div>
    )
}