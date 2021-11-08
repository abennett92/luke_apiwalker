import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const Display = () => {

    const { category, id } = useParams();
    const [result, setResult] = useState({});
    const [err, setErr] = useState({});


    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
            .then(res => {
                console.log(res);
                setResult(res.data);
                setErr({})
            })
            .catch(err => {
                console.log(err);
                setErr(err)
            })
    }, [category, id])


    return (
        <div>
            {err.response? <div><h1>These are not the droids you're looking for!</h1><img src="data:image/jpeg;base64,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" alt="Obi-Wan Kenobi being a Jedi master" /></div> :
                <div>
                    <h3>{result.name}</h3>
                    {category === "people" ? (<p><b>Height:</b> {result.height}</p>)
                        : category === "planets" ? (<p><b>Climate:</b> {result.climate}</p>)
                            : null}
                    {category === "people" ? (<p><b>Mass:</b> {result.mass}</p>)
                        : category === "planets" ? (<p><b>Terrain:</b> {result.terrain}</p>)
                            : null}
                    {category === "people" ? (<p><b>Hair Color:</b> {result.hair_color}</p>)
                        : category === "planets" ? (<p><b>Surface Water:</b> {result.surface_water}</p>)
                            : null}
                    {category === "people" ? (<p><b>Skin Color:</b> {result.skin_color}</p>)
                        : category === "planets" ? (<p><b>Population:</b> {result.population}</p>)
                            : null}
                </div>
            }
        </div>
    )
}


export default Display;