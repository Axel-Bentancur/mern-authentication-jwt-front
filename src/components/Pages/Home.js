import React from "react";

export default function Home() {
  return <div>Home</div>;
}


//--- code for home to recognize if you are logged and if dont automatically send to login page ---//

/* import React, {useEffect, useContext} from "react";
import { useHistory } from "react-router-dom";
import UserContext from '../../context/UserContext'

export default function Home() {
  const {userData} = useContext(UserContext);
  const history = useHistory();

  useEffect(()=>{
    if(!userData.user) history.push('/login');
  });

  return <div>Home</div>;
} */