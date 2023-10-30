// import { useState } from "react";

function Greeting() {
    const [myClass, setMyClass] = useState(["Blessing","Divine", "Udia", "Iwatomoe", "Obeh"]);
  
    
    return (
      <>
        {myClass.map((student, index) => {
          return <li key={index}>Hello, {student}</li>;
        })}
      </>
    );
  }
  export default Greeting;
  