import { useEffect } from "react";
import {useContextValue} from '../context/contextApi';
import {VideoCard} from "./";

import LeftNav from './LeftNav';
function Feed() {
  const {loading, searchResults} = useContextValue();
  return (
    <div className="flex flex-row h-[calc(100% - 56px)]">{/* navbar height = 56px , calu() func calulate fro each resize/different size screen height/w*/}
      <LeftNav/>
      <div className="grid w-[calc(100% - 240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gris-cols-3 xl:grid-cols-4 gaps-4 p-5">
            {/* //optional chaining , server req data must , so app creash if server data less/not complete/deleted*/}
          {!loading && searchResults.map((item,i)=>{
            return(
              <VideoCard key={item?.video?.videoId} />
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Feed