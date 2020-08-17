import React from 'react';

function Footer(props){

    




    return<div className='buttons'>
        
        <a className="previous" onClick={() => props.previous()}>&lt; Previous</a>
        <button >Edit</button>
        <button>Delete</button>
        <button>New</button>
        <a className="next" onClick={()=>props.next()}>Next &gt;</a>
        
        </div>

}

export default Footer;
