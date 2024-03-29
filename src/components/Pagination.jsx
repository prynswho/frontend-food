import React from 'react'

function Pagination({totalPosts,postPerPage,setCurrentPage}) {
    // console.log('hello')
    // console.log(postPerPage)
    // console.log('hello')
    // console.log(totalPosts)
    // console.log('hello')
    const pages = [];
    for(let i = 1 ; i <= Math.ceil(totalPosts/postPerPage);i++ ){
        pages.push(i);
    }
  return (
    <div className='here'>
        {pages.map((page,index) =>{
            return <button className= "navigate" key ={index} onClick={() => setCurrentPage(page)}>{page}</button>;
        })}
    </div>
  );
}

export default Pagination
