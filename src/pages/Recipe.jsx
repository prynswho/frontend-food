import React from 'react'
import './Recipe.css';
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";


function Recipe() {
    //getting the whole items array
    const [popular, setPopular] = useState([]);
    const getPopular = async() =>{
        const api = await fetch('https://dummyjson.com/recipes');
        const data = await api.json();
        setPopular(data.recipes);
       
    };

    useEffect(() =>{
        getPopular();
    },[]);
    const items = Object.values(popular);


    //using useparams hook to get id 
    const {id} = useParams();
    
    //finding important values
    let imageArray = [];
    imageArray = items?.map(obj => obj.image);
    let image = imageArray[id - 1];

    let ingredientsArray = [];
    ingredientsArray = items?.map(obj => obj.ingredients);
    let ingredient = ingredientsArray[id - 1];

    let instructionArray = [];
    instructionArray = items?.map(obj => obj.instructions);
    let instruction = instructionArray[id - 1];
    
    let nameArray = [];
    nameArray = items?.map(obj => obj.name);
    let name = nameArray[id - 1];

    
  return (
    <div>
        <div className='picture'>
            <img src={image} alt = {null}/>
            <h1>{name}</h1>
        </div>
        <div className='procedure'>
            <div className='ingredients'>
                <h1>Ingredients</h1>
                {ingredient?.map((item) => {
                    return(
                        <p>{item}</p>
                    )
                })}
            </div>
            <div className='instructions'>
                <h1>instructions</h1>
                {instruction?.map((step) => {
                    return(
                        <p>{step}</p>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Recipe
