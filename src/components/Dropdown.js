import React, {useState} from 'react'


const Dropdown = (props) => {
    const {pokemons} = props
    //console.log(pokemons)
    const [task, setTask] = useState('')
    const handleChange = () => setTask(task => [...task, task])
    return (
        <div className="select">
        {/* <label>Select</label> */}
        <select
            name="task"
            value={task}
            onChange={handleChange}>
            <option value={pokemons}>All</option>
            <option value="Captured">Captured</option>
            <option value="Not captured">Not captured</option>
        </select>
    </div>
    )
}

export default Dropdown
