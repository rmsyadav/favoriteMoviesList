import { useState } from "react";
import "./Checkbox.css";

interface CheckboxValuesType {
  [key: string]: boolean;
}
const CheckBox = (): JSX.Element => {
  const [checkboxValues, setCheckboxValues] = useState<CheckboxValuesType>({
    option1: false,
    option2: false,
    option3: false,
  });

  return (
    <>
      <div
        style={{
          marginTop: "70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h2>Checkbox Component</h2>
        <div
          className="checkbox-container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {Object.entries(checkboxValues).map(([key, value]) => {
            return (
              <div className="checkbox" key={key}>
                <input type="checkbox" id={key} name={key} checked={value} onChange={({ target: { checked, name } }) => setCheckboxValues((prev) => ({ ...prev, [name]: checked }))} />
                <label htmlFor={key}>Option 1</label>
              </div>
            );
          })}
        </div>
        <div> You slected checkbox : 
           {Object.entries(checkboxValues).filter(([,value]) => value).map(([key]) => (<span style={{margin: '10px'}}>{key}</span>))}
        </div>
      </div>
    </>
  );
};

export default CheckBox;
