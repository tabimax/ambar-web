import { useState } from "react";

export default function API(props) {
    const [user, setUser] = useState([]);
    return (
        <div>
            <p>{user}</p>
        </div>
    );
}