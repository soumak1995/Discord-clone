import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import './App.css';
import Sidebar from './component/Sidebar'
import Chat from './component/Chat'
import { selectUser } from './features/userSlice';
import Login from './component/Login';
import { auth } from './firebase';
import {login,logout} from './features/userSlice'
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser)
      if(authUser){
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName
        }))
      }else{
        dispatch(logout());
      }
    })
  }, [dispatch])
  console.log(user)
  return (
    <div className="app">
     {user?.user?
      <>
        <Sidebar/>
        <Chat/>
        </>
     :
        <Login/>
     }
     
    </div>
  );
}

export default App;
