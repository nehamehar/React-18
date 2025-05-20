import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext) // ON USERCONTEXT  we pass User as we want data from the user
    // applying conditional statement if else , if (condition) return

    if (!user) return <div>please login</div>  //if user is not available

    return <div>Welcome {user.username}</div> //is user is available, user.username (extracting username from user)
}

export default Profile