import React from 'react';

function Footer(props){

    




    return<div className='buttons'>
        
        <button className="previous" onClick={()=> props.previous()}>Previous</button>
        <button >Edit</button>
        <button>Delete</button>
        <button>New</button>
        <button className="next" onClick={()=>props.next()}>Next</button>
        
        </div>

}

export default Footer;
