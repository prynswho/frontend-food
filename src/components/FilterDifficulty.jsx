import './FilterProduct.css'
function FliterDifficulty(props) {
    function onFilterValueDifficultyChanged(event){
        props.filterDifficultyValueSelected(event.target.value);
        
    }
  return (
    <div className="filter-area">
      <h3 >Difficulty</h3>
      <select name="difficulty" onChange={onFilterValueDifficultyChanged}>
            <option value="all">all</option>
            <option value="Hard">Hard</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
           
        </select>
        
    </div>
  )
}

export default FliterDifficulty;