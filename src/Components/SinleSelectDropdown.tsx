import { useState } from "react";

const options = [
  { label: "Action", value: "action" },
  { label: "Drama", value: "drama" },
  { label: "Comedy", value: "comedy" },
]; 

const SingleSelectDropdown = () => { 
  const [selected, setSelected] = useState('');


  return (
    <div className="single-select-dropdown" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px', gap: '20px'}}>
        <h2>Single Select Dropdown Component</h2>
        <select
            style={{ padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc', width: '250px' }}
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
        >
            <option value="Select" disabled>Select a genre</option>
            {options.map((option, index) => (
                <option key={index}>{option.label}</option>
            ))}
        </select>
    </div>
  )
};

export default SingleSelectDropdown;