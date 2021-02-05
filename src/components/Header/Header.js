import React from 'react'
import Rate from '../Rate'
import './Header.css'




const Header = ({setSearchName,searchRate,setSearchRate}) => {
    
    

    
    
    
    return (
        <div className="navBar">
           
            <div class="input">
                 <input type="text"
                 placeholder="Search movie..."
                 onChange={(e) => setSearchName(e.target.value)}/>               
            </div>
            
            <div className="rate">
          <Rate  rating={searchRate} 
          setSearchRate={setSearchRate}
          />
           </div>
    
</div>
    )
}


export default Header