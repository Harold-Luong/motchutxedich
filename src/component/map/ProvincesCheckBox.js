import React, { useState } from "react";
import provincesData from "./data-provinces.json";
import "./scss/provincesCheckBox.scss";
import MapTravel from "./MapTravel";

const ProvincesCheckBox = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const provinces = Object.values(provincesData.data).sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const columnCount = 5;
  const itemsPerColumn = Math.ceil(provinces.length / columnCount);

  const columns = Array.from({ length: columnCount }, (_, colIndex) =>
    provinces.slice(colIndex * itemsPerColumn, (colIndex + 1) * itemsPerColumn)
  );

  const handleCheckbox = (e, item) => {
    const isChecked = e.target.checked;
    setSelectedCheckboxes((prevSelected) => {
      if (!isChecked) {
        // Nếu item đã có trong danh sách và checkbox được bỏ chọn, loại bỏ nó
        return prevSelected.filter((selectedItem) => selectedItem.key !== item.key);
      } else {
        // Nếu checkbox được chọn, thêm item vào danh sách
        return [...prevSelected, item];
      }
    });
  };
  
 
  return (
    <>
      <div className="province-grid">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="province-column">
            {column.map((item) => (
              <div key={item.key} className="checkbox-province">
                <label>
                  <input
                    type="checkbox"
                    id={item.key}
                    name="province"
                    value={item.value}
                    onClick={(e) => handleCheckbox(e, item)}
                  />
                  {item.title}
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>
      <MapTravel selectedCheckboxes={selectedCheckboxes} />
    </>
  );
};

export default ProvincesCheckBox;
