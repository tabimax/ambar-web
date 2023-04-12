import { useEffect, useCallback, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [user, setUser] = useState([]);
    const getUserDetails = useCallback(async (accessToken, tokenType) => {
        try {
            const response = await axios.get("https://discord.com/api/users/@me", {
                headers: {
                    authorization: `${tokenType} ${accessToken}`
                }
            });
            const { username, discriminator } = response.data;
            console.log(response.data);
            setUser([username, discriminator]);
        } catch {
            console.log("error getting user");
        }
    }, []);

    useEffect(() => {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        const [accessToken, tokenType] = [
            fragment.get("access_token"),
            fragment.get("token_type")
        ];
        getUserDetails(accessToken, tokenType);
    }, [getUserDetails]);

    return <h3>hi there {user}! </h3>;
};

export default Dashboard;