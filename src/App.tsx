import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

function App() {
    return (
        <div className="lg:max-w-7xl mx-auto overflow-hidden h-[180vh] ">
            <main className="grid grid-cols-9">
                {/* {sidebar section} */}
                <Sidebar />
                {/* {feeds section}  */}
                <Feed />
                {/* {widgets section} */}
                <Widgets />
            </main>
        </div>
    );
}

export default App;
