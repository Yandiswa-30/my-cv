import React from 'react'
import typography from '@material-ui/core'
import './Profile.css'

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