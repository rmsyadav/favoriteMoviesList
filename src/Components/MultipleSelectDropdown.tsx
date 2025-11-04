import { useEffect, useRef, useState } from "react";

const options = [
  { label: "Action", value: "action" },
  { label: "Drama", value: "drama" },
  { label: "Comedy", value: "comedy" },
];

const MultipleSelectDropdown = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(<></> as unknown as HTMLDivElement);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['action']);

  useEffect(()=> {
      const handleClickOutside = (e: any) => {
           if(e.target && !optionsRef.current.contains(e.target)) {
            setIsMenuOpen(false);
           } 
      }
      addEventListener('mousedown', handleClickOutside);

     return () => {
        removeEventListener('mousedown', handleClickOutside);
     }
  }, [optionsRef])

  const handleSelectAll = () =>{
    if(options.length !== selectedOptions.length) {
       setSelectedOptions(options.map((option)=> option.value))
    } else {
        setSelectedOptions([]);
    }
      
  }
  const handleSelectOptions = (optionParam) => {
    if(selectedOptions.includes(optionParam.value)) {
        setSelectedOptions([...selectedOptions.filter((option) => option !== optionParam.value)])
    } else{
        setSelectedOptions([...selectedOptions, optionParam.value])
    }
  }

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
        <h2>Multi Select Dropdown Component</h2>
        <div
          className="multi-select-dropdown"
          ref={optionsRef}
          style={{
            minWidth: "250px",
            border: "1px solid #ccc",
            borderRadius: 6,
            padding: "8px 12px",
            cursor: "pointer",
            background: "#fff",
            position: "relative",
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 10px",
            }}
          >
            {selectedOptions.length > 0 ? selectedOptions.length === options.length ? (<span>All selected</span>): (<span>{`${selectedOptions.length} selected`}</span>) : (<label>Select options...</label>)}
            <svg
              width="24"
              style={{
                transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10l5 5 5-5"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {isMenuOpen && (
            <>
              <div
                style={{
                  position: "absolute",
                  zIndex: "100",
                  top: '40px',
                  border: "1px solid #ccc",
                  background: "#fff",
                  minWidth: "99%",
                   borderRadius: 6,
                  right: '0px'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        padding: "5px",
                        gap: '10px',
                      }}
                    >
                        <input type="checkbox" checked={options.length === selectedOptions.length} onClick={(e) => handleSelectAll()}></input>
                <option>Select All</option>
                    </div>
                
                {options.map((option) => (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        padding: "5px",
                        gap: '10px',
                      }}
                      key={option.value}
                    >
                      <input  key={option.value} type="checkbox" checked={selectedOptions.includes(option.value)} onClick={(e) => handleSelectOptions(option)}></input>
                      <option>{option.label}</option>
                    </div>
                  </>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MultipleSelectDropdown;
