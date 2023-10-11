import { useEffect, useState } from "react";
import { GetBreeds } from "../../services/GetBreedList";
import { IDogBreedList } from "../../models/IDogBreedList";
import React from "react";
import "./Select.scss";
import { GetDog } from "../../services/GetDogs";
import { ISelectProps } from "../../models/ISelectProps";

function Select({ onValueSelected, setData }: ISelectProps) {
  const [listSet, setListSet] = useState<IDogBreedList>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetBreeds();
        setListSet(result);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const [value, subValue] = selectedValue.split("-");
    onValueSelected(value);

    if (value) {
      try {
        const resultData = await GetDog(value, subValue);
        setData(resultData); // Set the dogData in the Dashboard component
      } catch (error) {
        console.log("Error fetching dog data:", error);
      }
    }
  };
  return (
    <>
      <select className="select" onChange={handleChange}>
        <option className="option" value="" disabled>
          Select a breed
        </option>
        {listSet &&
          Object.entries(listSet.message).map(([value, subValues]) => (
            <React.Fragment key={value}>
              <option value={value}>{value}</option>
              {subValues.length > 0 &&
                subValues.map((subValue) => (
                  <option key={subValue} value={`${value}-${subValue}`}>
                    {subValue} {value}
                  </option>
                ))}
            </React.Fragment>
          ))}
      </select>
    </>
  );
}

export default Select;
