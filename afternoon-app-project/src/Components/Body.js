import React from 'react';


function Body({item}){

console.log('what is Item?', item)
    return <div className="box" key={item.id}>
        <h2 className="idNumber">{item.id}/25</h2>
        <div className="jobDescription">
        <h1>{item.name.first}{item.name.last}</h1>
        <h3><span>From:</span> {item.country}</h3>
        <h3>Job Title: {item.title}</h3>
        <h3>Employer: {item.employer}</h3>

         </div>
    
    <h1>Favorite Movies:</h1>
    <ol>

{item.favoriteMovies.map((movie, index)=>{
    console.log("MOVIE???", movie)
    return<li key={index}>{movie}</li>
})}
    </ol>
    
            </div>
}
export default Body;