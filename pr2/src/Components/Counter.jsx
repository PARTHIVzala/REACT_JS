import { useEffect, useState } from "react";
import Button from "./Button";

const Counter = ( { name, age } ) => {
      const [ count, setCount ] = useState( 0 );
      const [ fname, setFname ] = useState( "JASON ROY" );

      const handleINC = () => {
            setCount( prev => prev + 1 );
            setFname( "JOE ROOT" );
      };

      const handleDEC = () => {
            setCount( prev => prev - 1 );
            setFname( "JASON ROY" );
      };

      const test = () => {
            if ( name && count > 0 ) {
                  return <p className="user-text">{fname} • Age {age}</p>;
            } else {
                  return <p className="no-data">No Data Found</p>;
            }
      };

      useEffect( () => {
            console.log( "Component updated" );
      }, [ count ] );

      return (
            <div className="counter-box">
                  <h1 className="title">React Neon Counter</h1>

                  <div className="count">{count}</div>

                  {test()}

                  <div className="btn-group">
                        <Button name="INC" count={count} handleClick={handleINC} />
                        <Button name="DEC" count={count} handleClick={handleDEC} />
                  </div>
            </div>
      );
};

export default Counter;