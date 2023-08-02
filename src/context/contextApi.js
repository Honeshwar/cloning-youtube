import {createContext,useState,useEffect, useContext} from "react";
import { fetchDataFromApi } from "../utils/api";


// /step1 create context
export const context = createContext();


// step2 custom provider
export function AppContextProvider (props){
    const [loading,setLoading] = useState(true);
    const [searchResults,setSearchResults] = useState([]);
    const [selectCategories,setSelectCategories] = useState("New");//by default home(new)//category at aside panel different category home=new, gaming , sports
    const [mobileMenu,setMobileMenu] = useState();

    useEffect(()=>{
        // const fetchData = async ()=>{
        //     const data = await fetchDataFromApi();//return an promise .then()  or await
        // }
        // fetchData();
        fetchSelectedCategoryData(selectCategories);
    },[selectCategories]);
    
    //for more understand create func , can also do directly
    const fetchSelectedCategoryData = (query)=>{
        setLoading(true);
        fetchDataFromApi(`/search/?q=${query}`).then((res)=>{
            console.log(res);//all new data/videos
            setSearchResults(res);
            setLoading(false);
        })
    }

    return (
        <context.Provider value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectCategories,
            setSelectCategories,
            mobileMenu,
            setMobileMenu
            }}>
            {props.children}
        </context.Provider>
    )
}

//step3 custom consumer func
export function useContextvalue(){
    return useContext(context);
}