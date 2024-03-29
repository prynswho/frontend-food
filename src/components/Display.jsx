import { useEffect, useState } from "react";
import './Display.css'
import { Link } from 'react-router-dom';
import Pagination from "./Pagination";
import FilterProduct from "./FliterProduct";
import FliterDifficulty from "./FilterDifficulty";





function Display() {
  const [popular, setPopular] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [postPerPage,setPostPerPage] = useState(8);




  const [filterTextValue,setFilterTextValue] = useState('all');
  const [filterDifficutyTextValue,setFilterDifficutyTextValue] = useState('all');


  //fetch call to the api to get data

    const getPopular = async() =>{
        const api = await fetch('https://dummyjson.com/recipes');
        const data = await api.json();
        // console.log(recipes);
        setPopular(data.recipes);
       
    };

    useEffect(() =>{
        getPopular();
    },[]);

    //filtering the array of objects as per cuisines and difficulty

    const items = Object.values(popular);
    const filteredList = items.filter((recipe) => {
        if(filterTextValue === 'Italian'){
            return recipe.cuisine === 'Italian';
        }else if(filterTextValue === 'American'){
            return recipe.cuisine === 'American';
        }
        else if(filterTextValue === 'Indian'){
            return recipe.cuisine === 'Indian';
        }
        else if(filterTextValue === 'Pakistani'){
            return recipe.cuisine === 'Pakistani';
        }
        else if(filterTextValue === 'Thai'){
            return recipe.cuisine === 'Thai';
        }
        else if(filterTextValue === 'Asian'){
            return recipe.cuisine === 'Asian';
        }
        else if(filterTextValue === 'Korean'){
            return recipe.cuisine === 'Korean';
        }
        else{
            return recipe;
        }
    })
    
    const finalList = filteredList.filter((recipe) =>{
        if(filterDifficutyTextValue === 'Hard'){
            return recipe.difficulty === 'Hard';
        }else if(filterDifficutyTextValue === 'Medium'){
            return recipe.difficulty === 'Medium';
        }else if(filterDifficutyTextValue === 'Easy'){
            return recipe.difficulty === 'Easy';
        }
        else{
            return recipe;
        }
    })

    //after filtering ....doing pagination
    const lastPostIndex = currentPage* postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPost =finalList.slice(firstPostIndex,lastPostIndex);
    
    
    function onFilterValueSelected(filterValue){
        setFilterTextValue(filterValue);
    }
    function onFilterDifficultyValueSelected(filterValue){
        setFilterDifficutyTextValue(filterValue);
    }

    

  return (
    <div className="main">
        <div className="filters">
            <FilterProduct filterValueSelected = {onFilterValueSelected}></FilterProduct>
            <FliterDifficulty filterDifficultyValueSelected = {onFilterDifficultyValueSelected}></FliterDifficulty>
        </div>
      <div className="grid">

        {currentPost.map((recipe) => {
            return(
                <div className="card" key={recipe.id}>
                    <img src={recipe.image} alt = {recipe.name}/>
                    <p>{recipe.name}</p>
                    <Link className="links" to = {"/recipe/"+recipe.id}>
                        <div className="view-button">
                            view recipe
                        </div>
                    </Link>
                </div>
            );
        })}
      </div>
      
      <Pagination totalPosts={finalList.length} postPerPage = {postPerPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}


export default Display;