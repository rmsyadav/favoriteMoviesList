import { useEffect, useState } from "react";
import "./InputSerchField.css";

const InputSearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const [disPlaySearchValue, setDisplaySearchValue] = useState("");

  const handleSetDispalyValue = (value) =>{
      setDisplaySearchValue(value);
  }
  useEffect(()=> {
   const timer = setTimeout(()=> {
       handleSetDispalyValue(searchValue);
    }, 1000)
   return () =>{
      clearTimeout(timer)
   }
  }, [searchValue])

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
        <h2>Input Search Component</h2>
        <input
          type="text"
          id="input-search-field"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <div>
          {" "}
          {disPlaySearchValue
            ? `You have entered value is : ${disPlaySearchValue}`
            : ""}
        </div>
      </div>
    </>
  );
};

export default InputSearchField;
