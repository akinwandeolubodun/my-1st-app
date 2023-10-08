



function Greetingsmethod() {
    let myStudents = ["Blessing","Divine", "Udia", "Iwatomoe", "Pelumi"];
    console.log(myStudents.map((student, index) => {
        return (
            <li key={index}>{student}</li>
        )
    }))
  
    return (
        <ul>
            {
                myStudents.map((student, index) => {
                    return (
                        <li key={index}>{student}</li>
                    )
                })
            }
        </ul>
    );
}

export default Greetingsmethod