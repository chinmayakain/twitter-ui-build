import React, { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

function App() {
    const [tweets, setTweets] = useState("");
    const [avatars, setAvatars] = useState("");

    useEffect(() => {
        fetchTweets();
        fetchAvatars();
    }, []);

    async function fetchAvatars() {
        let imagesCount = 70;
        let url = `https://api.pexels.com/v1/curated?per_page=${imagesCount}`;

        try {
            const headers: any = {
                Authorization: import.meta.env.VITE_PEXELS_API_KEY,
            };
            const response = await fetch(url, {
                method: "GET",
                headers,
            });
            const { photos: images } = await response.json();
            setAvatars(images);
        } catch (error) {
            throw new Error("Failed to Fetch Profile Images");
        }
    }

    async function fetchTweets() {
        let url = "http://www.mocky.io/v2/5d1ef97d310000552febe99d";

        try {
            const response = await fetch(url, { method: "GET" });
            const tweetsData = await response.json();
            setTweets(tweetsData);
        } catch (error) {
            throw new Error("Failed to Fetch Tweets");
        }
    }

    return (
        <div className="lg:max-w-7xl mx-auto overflow-hidden relative ">
            <main className="grid grid-cols-9 ">
                {/* {sidebar section} */}
                <Sidebar />
                {/* {feeds section}  */}
                <Feed tweets={tweets} avatars={avatars} />
                {/* {widgets section} */}
                <Widgets />
            </main>
        </div>
    );
}

export default App;
