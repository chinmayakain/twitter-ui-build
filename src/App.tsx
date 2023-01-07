import React, { useEffect, useState } from "react";

import { Sidebar, Feed, Widgets } from "./components";
import { useDebounce } from "./hooks";

function App() {
    const [tweets, setTweets] = useState([]);
    const [avatars, setAvatars] = useState("");
    const [value, setValue] = useState({ startDate: null, endDate: null });
    const [loading, setLoading] = useState(false);
    const debouncedFetchTweets = useDebounce(fetchTweets, 2000);
    const debouncedAvatars = useDebounce(fetchAvatars, 2000);

    useEffect(() => {
        debouncedFetchTweets();
        debouncedAvatars();
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
            setLoading(true);
            const { photos: images } = await response.json();
            setAvatars(images);
            setLoading(false);
        } catch (error) {
            throw new Error("Failed to Fetch Profile Images");
        }
    }

    async function fetchTweets() {
        let url = "http://www.mocky.io/v2/5d1ef97d310000552febe99d";

        try {
            setLoading(true);
            const response = await fetch(url, { method: "GET" });
            const tweetsData = await response.json();
            setTweets(tweetsData);
            setLoading(false);
        } catch (error) {
            throw new Error("Failed to Fetch Tweets");
        }
    }

    const handleValueChange = (newValue: any) => {
        setValue(newValue);
    };

    function formatUTCDate(date: any) {
        const dateString = date.toISOString();
        return dateString.slice(0, 10);
    }

    const filterDates = (startDate: any, endDate: any, data: any) => {
        return data.filter(
            (date: any) =>
                formatUTCDate(new Date(date.publishedDate)) >= startDate &&
                formatUTCDate(new Date(date.publishedDate)) <= endDate
        );
    };

    let filteredDates: {} = filterDates(value.startDate, value.endDate, tweets);

    return (
        <div className="lg:max-w-7xl mx-auto overflow-hidden">
            <main className="grid grid-cols-9 relative">
                {/* sidebar section */}
                <Sidebar />
                {/* feeds section */}
                <Feed
                    tweets={
                        value.startDate && value.startDate
                            ? filteredDates
                            : tweets
                    }
                    avatars={avatars}
                    loading={loading}
                />
                {/* widgets section */}
                <Widgets
                    setValue={setValue}
                    value={value}
                    handleValueChange={handleValueChange}
                />
            </main>
        </div>
    );
}

export default App;
