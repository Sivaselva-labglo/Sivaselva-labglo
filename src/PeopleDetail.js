import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function PeopleDetails() {
    const  names = useParams()
    console.log('id ', names);
    console.log('idType ', typeof names);

    const [apiData, setApiData] = useState({});
    const [peopleList, setPeopleList] = useState([]);

    function loadData() {
        axios.get(`https://swapi.dev/api/people/`)
            .then((success) => {
                setApiData(success.data)
                 console.log('PeopleDetails-successData ', success.data)
            })
            .catch((failed) => console.log(failed))
    }

    // function adding() {
    //   switch (page) {
    //     case page = 1:
    //       setPeopleList = names.id;
    //       break;
        
    //     case page = 2:
    //       setPeopleList = names.id + 10;
      
    //     default:
    //       break;
    //   }
    // }
    useEffect(() => loadData(), []);
    return(
        <>
        <h2>Details Page</h2>
        
        {/* {
            Object.keys(apiData)?.map((apiKeys,index)=>(
                <ul>
                <li key={index}>{apiKeys} : {apiKeys === 'url' ? <a href={apiData[apiKeys]}>{apiData[apiKeys]}</a> : apiData[apiKeys] } </li>
                </ul>
            ))
        } */}
        
        {
            apiData.results?.filter((value)=> value.name === names).map((val)=>
            <>
            <p >{val.name}</p>
            <p >{val.mass}</p>
            <p >{val.gender}</p>
            </>
            )

        }
        </>
    )
}