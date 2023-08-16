// import React, {useEffect } from "react";

// import { useContextValue } from "../context/contextApi";
// import LeftNav from "./LeftNav";
// import VideoCard from "./VideoCard";

// const Feed = () => {
//     const { loading, searchResults } = useContextValue();

//     useEffect(() => {
//         document.getElementById("root").classList.remove("custom-h");
//     }, []);

//     return (
//         <div className="flex flex-row h-[calc(100%-56px)] w-full]">{/* navbar height = 56px , calu() func calulate fro each resize/different size screen height/w*/}
//             <LeftNav />
//             <div className="grid w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
//                    {/* //optional chaining , server req data must , so app creash if server data less/not complete/deleted*/}
//                    {!loading &&
//                     searchResults.map((item) => {
//                         if (item.type !== "video") return false;
//                         return (
//                             <VideoCard
//                                 key={item?.video?.videoId}
//                                 video={item?.video}
//                             />
//                         );
//                     })}
//             </div>
//         </div>
            
//         </div>
//     );
// };

// export default Feed;



import React, { useContext, useEffect } from "react";

import { useContextValue } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
    const { loading, searchResults } = useContextValue();

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
    }, []);

    return (
        <div className="flex flex-row h-[calc(100%-56px)]">
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
                    {!loading &&
                        searchResults.map((item) => {
                            if (item.type !== "video") return false;
                            return (
                                <VideoCard
                                    key={item?.video?.videoId}
                                    video={item?.video}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Feed;
