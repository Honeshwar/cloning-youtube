import React from 'react'
import { AppContextProvider } from './context/contextApi'
import { Header , Feed , SearchResult , VideoDetails} from "./components";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
 
function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Header/>, children:[
      {path:'/',element:<Feed/>,},
      {path:'/searchResult/:searchQuery',element:<SearchResult/>,},
      {path:'/video/:id',element:<VideoDetails/>,}
    ]}
  ])
  return (
    <AppContextProvider>
       <RouterProvider router={router}>
          <div className='flex flex-col h-full'></div>
       </RouterProvider>
    </AppContextProvider>
  )
}

export default App;