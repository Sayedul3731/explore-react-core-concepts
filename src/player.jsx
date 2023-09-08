import { useState } from "react"

export default function Player(){
    const teamStyle = {
        border: '2px solid lightgray',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px'
    }
    const btnStyle = {
        'margin-right': '10px'
    }
    function addMember (){
      const newMember = teamMember + 1;
        setMember(newMember)
    }
    const removeMember = () => {
        const newMember = teamMember - 1;
        setMember(newMember)
    }
    const [teamMember, setMember] = useState(11)
 
    return (
        <div style={teamStyle}>
            <h3>Player: {teamMember} </h3>
            <button style={btnStyle} onClick={addMember}>Add</button>
            <button onClick={removeMember}>Remove</button>
        </div>
    )
}