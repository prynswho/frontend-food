import React from 'react'
import './FilterProduct.css'
function FliterProduct(props) {
    function onFilterValueChanged(event){
        props.filterValueSelected(event.target.value);
    }
  return (
    <div className="filter-area">
      <h3>Cuisine</h3>
      <select name="cuisine" onChange={onFilterValueChanged}>
            <option value="all">all</option>
            <option value="Italian">Italian</option>
            <option value="American">American</option>
            <option value="Asian">Asian</option>
            <option value="Pakistani">pakistani</option>
            <option value="Korean">korean</option>
            <option value="Thai">thai</option>
            <option value="Indian">Indian</option>
        </select>
        
    </div>
  )
}

export default FliterProduct;



