import React, { useEffect, useState } from "react";
import { DayRange } from "react-modern-calendar-datepicker";

import { Sidebar, Feed, Widgets } from "./components";
import { useDebounce } from "./hooks";

function App() {
    const [tweets, setTweets] = useState([]);
    const [avatars, setAvatars] = useState("");
    const [loading, setLoading] = useState(false);
    const debouncedFetchTweets = useDebounce(fetchTweets, 2000);
    const debouncedAvatars = useDebounce(fetchAvatars, 2000);
    const [dayRange, setDayRange] = useState<DayRange>({
        from: null,
        to: null,
    });
    const [dateReference, setDateReference] = useState<any>(null);
    const [filteredDates, setFilteredDates] = useState(null);

    useEffect(() => {
        debouncedFetchTweets();
        debouncedAvatars();
    }, []);

    useEffect(() => {
        if (dateReference?.from && dateReference?.to) {
            let newDates = filterDates(
                dateReference.from,
                dateReference.to,
                tweets
            );
            setFilteredDates(newDates);
        }
    }, [dateReference]);

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
        let url = "https://www.mocky.io/v2/5d1ef97d310000552febe99d";

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

    const handleDateChange = (newValue: any) => {
        setDayRange({ from: newValue.from, to: newValue.to });
        let date = convertDates(newValue.from, newValue.to);
        setDateReference(date);
    };

    function convertDates(fromDate: any, toDate: any) {
        const from =
            fromDate && `${fromDate?.year}-${fromDate?.month}-${fromDate?.day}`;
        const to = toDate && `${toDate?.year}-${toDate?.month}-${toDate?.day}`;
        if (from === to) {
            return setDayRange({
                from: null,
                to: null,
            });
        }

        return { from, to };
    }

    return (
        <div className="lg:max-w-7xl mx-auto overflow-hidden">
            <main className="grid grid-cols-9 relative">
                {/* sidebar section */}
                <Sidebar />
                {/* feeds section */}
                <Feed
                    tweets={
                        dateReference?.from && dateReference?.to
                            ? filteredDates
                            : tweets
                    }
                    avatars={avatars}
                    loading={loading}
                />
                {/* widgets section */}
                <Widgets
                    setValue={setDayRange}
                    value={dayRange}
                    handleValueChange={handleDateChange}
                />
            </main>
        </div>
    );
}

export default App;
