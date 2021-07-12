import React from 'react';
import {Typography} from '@material-ui/core';
import './Profile.css'

const Profile = () =>{
   
  return(

    <div className="Profile-constShadow">
      <div className="profile-Name"> 
        <typography className="name">Yandiswa Ndarane </typography>
      </div>
         <figure className="profile-img">
           <img src="https://tut4lifeac-my.sharepoint.com/personal/214280051_tut4life_ac_za/Documents/Desktop/20210506_093632.jpg?Web=1" alt="" />
         </figure>

         <div className="profile-Information">
               timeline
             
         </div>
    </div>
  )
    
  
    
}

export default Profile