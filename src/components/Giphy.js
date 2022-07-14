import React, {useEffect, useState} from "react";
import axios from 'axios'
import GiphyList from "./GiphyList";

const Giphy = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState ('')

    //Get data on the trendy gifs
    useEffect(() => {
        const fetchData = async () => {
            const results = await axios("https://api.giphy.com/v1/gifs/trending",
            {params: {
                api_key: "dAO0i5GCqWheAh4YBkqSDoL5JCMR6gJV"
            }
        });
            console.log(results)
            setData(results.data.data)
        }

        fetchData()
    },[])

    //Display the trending gif's at the start
    const renderGifs = () => {
        return data.map(gif1 => {
            return (
                <div key={gif1.id} className="gif">
                    <img src={gif1.images.fixed_height.url} alt=""/>
                </div>
            )
        })
    }

    //Get input for the search bar
    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }


    //Use the input from the search bar and display gif
    const handleSubmit = async (event) => {
            event.preventDefault();
            const results = await axios("https://api.giphy.com/v1/gifs/search",
            {params: {
                api_key: "dAO0i5GCqWheAh4YBkqSDoL5JCMR6gJV",
                q: search,
                limit: 8
            }
        });
          setData(results.data.data);
    } 

    return(
    <div>
        <div className="searchArea">
            <GiphyList
            onChange = {(event) => handleSearchChange(event)}
            onClick = {(event) => handleSubmit(event)}
            />
            {/* <input type="text" placeholder="Search" onChange={handleSearchChange} value={search}></input>
            <button className="btn" onClick={handleSubmit} type= "submit">Go</button> */}
        </div>
        <div className="gifBox">
            <div className="containerGifs">{renderGifs()}</div>
        </div>
    </div>
    )
    
}

export default Giphy