import React from 'react';
import {USER_DATA} from '../utils/USER_DATA';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Home = () => {
    const dispatch = useDispatch();

    const addNewUser = (user) =>{
     dispatch(addUser(user))
    }
    return ( 
        <div>
            <Header/>
            {
                USER_DATA.map(user=>(
                   <div className="" key={user.id} style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"46px",background:"burlywood",  margin:"auto",width:"550px",marginTop:"15px",}}>
                    <div className="">
                        <p>{user.name}</p>
                    </div>
                    <div className=""><p>{user.age}</p></div>
                    <div className=""><button onClick={()=>addNewUser(user)} style={{background:"green",outline:"none",padding:"10px",color:"white"}}>ADD</button></div>
                   </div>
                ))
            }

        </div>
    );
}

export default Home;
