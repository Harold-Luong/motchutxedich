import React, { useEffect, useState } from 'react';

const AnGiang = ({ data }) => {
  console.log(data)
  const [colorChose, setColorChose] = useState("rgba(0,0,0,.3)");

  useEffect(() => {
    console.log("Current data:", data); // Kiểm tra dữ liệu đầu vào
    if (data) {
      const colorItem = data.find(item => item.key === "VN-44");
      if (colorItem) {
        console.log("Color found:", colorItem.color); // Kiểm tra màu sắc tìm thấy
        setColorChose(colorItem.color);
      } else {
        setColorChose("rgba(0,0,0,.3)");  
        console.log("No matching item found for VN-44"); // Không tìm thấy item
      }
    }  
  }, [data]);
  
  return (
    <path
      id="VN-44"
      fill={colorChose} // Sử dụng colorChose làm fill
      stroke="#FFFFFF"
      strokeWidth="0.5"
      strokeOpacity="0.7"
      d="M254.743,278.107l-0.206,0.783
          l1-0.108l0.662,0.213l0,0l0.031,0.791l0.434,0.426l0.463,0.94l0.623,0.052l0.061,0.646l0.871,0.243l-0.526,0.545l0.037,0.188
          l1.434,0.076l-0.062,1.643l0.563,1.244l0.981,0.502l0.589-0.07l0.729,0.332l0.676-0.256l0.911,0.724l0.313,0.666l0.101,0.989
          l-0.396-0.084l-0.156,0.275L264,288.95l-0.573,0.365l0.118,0.494l-0.739,0.646l-0.07,0.234l0.163,0.188l0,0l-0.355,0.311
          l-1.028,0.195l0.323,0.676l-2.12,0.801l-0.501-0.771l-0.126,0.08L258.979,292l-0.67,0.816l-0.133-0.146l-0.128,0.133l-0.458,0.648
          l0,0l-0.072-0.085l-0.424,0.628l-1.69-1.387l-2.211-1.252l-3.174-0.678l-1.854-2.646l-0.017-0.646l0,0l1.829-0.131l0.572-0.551
          l1.155-1.896l2.824-1.81l-0.146-0.718l-0.606-0.55l-0.133-0.725l-0.646-1.465l0.24-0.438l0.246-0.418l0.495-0.127l0.084-0.414
          L254.743,278.107z"
      data-title="An Giang"
    />
  );
};

export default AnGiang;
