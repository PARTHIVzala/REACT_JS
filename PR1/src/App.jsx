import { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserProfileCard from "./components/UserProfileCard";
import "./App.css";

function App() {
  const [ users, setUsers ] = useState( [] );

  useEffect( () => {
    const savedUsers = localStorage.getItem( "userProfiles" );
    if ( savedUsers ) {
      setUsers( JSON.parse( savedUsers ) );
    }
  }, [] );

  const handleSubmit = ( data ) => {
    const updatedUsers = [ ...users, data ];
    setUsers( updatedUsers );
    localStorage.setItem( "userProfiles", JSON.stringify( updatedUsers ) );
  };

  return (
    <div className="page">
      <UserForm onSubmit={handleSubmit} />

      <div className="cards-grid">
        {users.map( ( user, index ) => (
          <UserProfileCard key={index} {...user} />
        ) )}
      </div>
    </div>
  );

}

export default App;