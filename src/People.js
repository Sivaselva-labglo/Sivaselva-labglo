import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function PeopleList() {

  const [apiData, setApiData] = useState({});
  // const [peopleList, setPeopleList] = useState([]);

  function loadData() {
    axios.get('https://swapi.dev/api/people/')
      .then((success) => {
        setApiData(success.data)
        console.log('success data ', success.data)
      })
      .catch((failed) => console.log(failed))
  }

  function nextPage() {
    axios.get(apiData.next)
      .then((success) => setApiData(success.data))
      .catch((failed) => console.log(failed))
  }

  function previousPage() {
    axios.get(apiData.previous)
      .then((success) => setApiData(success.data))
      .catch((failed) => console.log(failed))
  }


  useEffect(() => loadData(), []);

  const navigates = useNavigate();

  function navigationDisplayDetails(names, id) {

    // <Link to={`/peopledetail/${name}`}/>
    navigates(`/peopledetails/${names}/${id}`)
    console.log('namE ', names)
    console.log('films ', apiData.results.films)
  }

  return (
    <>
      <p>Welcome all</p>
      <p>Total count : {apiData.count}</p>

      {
        apiData.previous == null ?
          <>

          </> :
          <>
            <button onClick={previousPage}>Previous Page</button>
          </>
      }

      {
        apiData.next == null ?
          <>

          </> :
          <>
            <button onClick={nextPage}>Next Page</button>
          </>
      }
      {/* <button onClick={nextPage}>Next Page</button>
            <button onClick={previousPage}>Previous Page</button> */}
      {/* 
      <table border={'3'}>
            <thed>
              <tr>
                {
                  Object.keys(apiData.results)?.map((properties)=>
                  {
                    <th>{properties}</th>
                  })
                }
              </tr>
            </thed>
      </table> */}
      <table border={'1'}>
        {/* {

                    apiData?.results[0].map((headers)=>
                    <thead>
                        {console.log("apiData", headers)}
                        <th>{apiData?.results && Object.keys( apiData?.results[0])}</th>
                    </thead>
                    )
                } */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Mass</th>
            <th>HomeWorld</th>
            <th>HairColor</th>
            <th>SkinColor</th>
            <th>EyeColor</th>
            <th>BirthYear</th>
            <th>Species</th>
            <th>Vehicles</th>
            <th>StarShips</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
            <th>Films</th>
          </tr>
        </thead>

        {
          apiData.results?.map((person, index) =>
            <tr>

              <td onClick={() => navigationDisplayDetails(person.name, index + 1)}>
                {person.name}
              </td>

              <td>
                {person.gender}
              </td>

              <td>
                {person.height}
              </td>

              <td>
                {person.mass}
              </td>

              {/* <td><Link to={person.homeworld}>{person.homeworld}</Link></td> */}

              <td>
                <a href={person.homeworld}>
                  {person.homeworld}
                </a>
              </td>

              <td>
                {person.hair_color}
              </td>

              <td>
                {person.skin_color}
              </td>

              <td>
                {person.eye_color}
              </td>

              <td>
                {person.birth_year}
              </td>

              <td>
                {person.species.map((Elements) => {
                  return (
                    <>
                      <p>
                        <a href={Elements}>{Elements}</a>
                      </p>
                    </>
                  )
                })}
              </td>

              <td>
                {person.vehicles.map((Elements) => {
                  return (
                    <>
                      <p>
                        <a href={Elements}>
                          {Elements}
                        </a>
                      </p>
                      <br />
                    </>
                  )
                })}
              </td>

              <td>
                {person.starships.map((Elements) => {
                  return (
                    <>
                      <p>
                        <a href={Elements}>
                          {Elements}
                        </a>
                      </p>
                      <br />
                    </>
                  )
                })}
              </td>

              <td>
                {person.created}
              </td>

              <td>
                {person.edited}
              </td>

              <td>
                <a href={person.url}>
                  {person.url}
                </a>
              </td>

              {/* <td>{person.films.toString().replaceAll(',',)}</td> */}

              <td>
                {person.films.map((Elements) => {
                  return (
                    <>
                      <p>
                        <a href={Elements}>
                          {Elements}
                        </a>
                      </p>
                      <br />
                    </>
                  )
                })}
              </td>

            </tr>)
        }
      </table>

    </>
  )
}