import React from 'react';
import {Typography} from '@material-ui/core';

const Profile = () =>{
   
  return(

    <div className="Profile-constShadow">
      <div className="profile-Name"> 
        <typography className="name">Yandiswa Ndarane </typography>
      </div>
         <figure className="profile-img">
           <img src="" alt="" />
         </figure>

         <div className="profile-Information">
               timeline
               <br/>
               <button>Download CV</button>
         </div>
    </div>
  )
    
  
    
}

export default Profile