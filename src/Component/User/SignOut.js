import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import userManager from "../../Store/userManager";

function SignOutPage() {
    const navigate = useNavigate();

    useEffect(() => {

        userManager.removeUser();
        localStorage.clear();
        userManager.clearStaleState();
        userManager.signoutRedirect();

    }, [])

    return (
        <></>
    )
}

export default SignOutPage