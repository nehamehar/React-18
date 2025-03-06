import React, { Children } from "react";
import userContext from "./UserContext";
// creating method
const UserContextProvider = ({Children}) => {
    const [user,setUser] = React.useState(null)
    return(
        <userContext value = {{user, setUser}}>
        {Children}
        </userContext>
    )

}


export default UserContextProvider;