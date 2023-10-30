import { useEffect, useState } from "react";
export default function EffectExample() {

    const [count, setCount] = useState(0)
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setData(json)); 
    }, {});
   
    useEffect (() => {
        console.log("We are dealing with some cases")
    }, [count]);
    console.log("rerendered")

   
    return (
        <>
            <h1>useEffect example{count}</h1>
            <button onClick={() => setCount(count+1)}>Add to Test</button>
            {data && <ul>
                <li>{data.userId}</li>
                <li>{data.title}</li>
                <li>{data.completed? "true" : "false"}</li>
            </ul>}
        </>
    );
}
