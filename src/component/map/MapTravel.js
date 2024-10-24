import React, { useState } from "react";
import Tooltip from "./Tooltip";
import "./scss/mapTravel.scss";
import AnGiang from "./map-province/AnGiang";
import BacGiang from "./map-province/BacGiang";
import BacKan from "./map-province/BacKan";
import BacLieu from "./map-province/BacLieu";
import BacNinh from "./map-province/BacNinh";
import BenTre from "./map-province/BenTre";
import BinhDinh from "./map-province/BinhDinh";
import BinhDuong from "./map-province/BinhDuong";
import BinhPhuoc from "./map-province/BinhPhuoc";
import BinhThuan from "./map-province/BinhThuan";
import CaMau from "./map-province/CaMau";
import CaoBang from "./map-province/CaoBang";
import CanTho from "./map-province/CanTho";
import DaNang from "./map-province/DaNang";
import DakLak from "./map-province/DakLak";
import DakNong from "./map-province/DakNong";
import DienBien from "./map-province/DienBien";
import DongNai from "./map-province/DongNai";
import DongThap from "./map-province/DongThap";
import GiaLai from "./map-province/GiaLai";
import HaGiang from "./map-province/HaGiang";
import HaNam from "./map-province/HaNam";
import HaNoi from "./map-province/HaNoi";
import HaTinh from "./map-province/HaTinh";
import HaiDuong from "./map-province/HaiDuong";
import HaiPhong from "./map-province/HaiPhong";
import HauGiang from "./map-province/HauGiang";
import HoChiMinh from "./map-province/HoChiMinh";
import HoaBinh from "./map-province/HoaBinh";
import HungYen from "./map-province/HungYen";
import KhanhHoa from "./map-province/KhanhHoa";
import KienGiang from "./map-province/KienGiang";
import KonTum from "./map-province/KonTum";
import LangSon from "./map-province/LangSon";
import LaiChau from "./map-province/LaiChau";
import LamDong from "./map-province/LamDong";
import LaoCai from "./map-province/LaoCai";
import LongAn from "./map-province/LongAn";
import NamDinh from "./map-province/NamDinh";
import NinhBinh from "./map-province/NinhBinh";
import NinhThuan from "./map-province/NinhThuan";
import PhuTho from "./map-province/PhuTho";
import PhuYen from "./map-province/PhuYen";
import QuangBinh from "./map-province/QuangBinh";
import QuangNam from "./map-province/QuangNam";
import QuangNgai from "./map-province/QuangNgai";
import QuangNinh from "./map-province/QuangNinh";
import QuangTri from "./map-province/QuangTri";
import SocTrang from "./map-province/SocTrang";
import SonLa from "./map-province/SonLa";
import TayNinh from "./map-province/TayNinh";
import ThaiBinh from "./map-province/ThaiBinh";
import ThaiNguyen from "./map-province/ThaiNguyen";
import ThanhHoa from "./map-province/ThanhHoa";
import ThuaThienHue from "./map-province/ThuaThienHue";
import TienGiang from "./map-province/TienGiang";
import TraVinh from "./map-province/TraVinh";
import TuyenQuang from "./map-province/TuyenQuang";
import VinhLong from "./map-province/VinhLong";
import VinhPhuc from "./map-province/VinhPhuc";
import VungTau from "./map-province/VungTau";
import YenBai from "./map-province/YenBai";
import NgheAn from "./map-province/NgheAn";
import QuanDaoHoangSa from "./map-province/QuanDaoHoangSa";
import QuanDaoTruongSa from "./map-province/QuanDaoTruongSa";

const MapTravel = (props) => {
  const [tooltip, setTooltip] = useState({
    display: "none",
    title: "",
    left: 0,
    top: 0,
  });

  const handleMouseOver = (event) => {
    const target = event.target;
    if (target && target.tagName === "path" && target.id.startsWith("VN-")) {
      const title = target.getAttribute("data-title");
      setTooltip({
        ...tooltip,
        display: "block",
        title: title,
        left: event.pageX,
        top: event.pageY,
      });
    }
  };

  const handleMouseMove = (event) => {
    setTooltip((prevTooltip) => ({
      ...prevTooltip,
      left: event.pageX,
      top: event.pageY,
    }));
  };

  const handleMouseOut = (event) => {
    const target = event.target;
    if (target && target.tagName === "path" && target.id.startsWith("VN-")) {
      setTooltip({
        ...tooltip,
        display: "none",
      });
    }
  };

  return (
    <div className="map_vn" id="map_vn">
      <Tooltip tooltipData={tooltip} />
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-25 -25 520 386.676"
        enableBackground="new 4.019 0 520 386.676"
        xmlSpace="preserve"
        className="w-fit h-fit xs:h-auto xs:w-fit xs:mx-auto"
      >
        <g
          id="vn-wrapper"
          onMouseOver={handleMouseOver}
          onMouseMove={handleMouseMove}
          onMouseOut={handleMouseOut}
        >
          <AnGiang data={props.selectedCheckboxes} />
          <BacGiang />
          <BacKan />
          <BacLieu />
          <BacNinh />
          <BenTre />
          <BinhDinh />
          <BinhDuong />
          <BinhPhuoc />
          <BinhThuan />
          <CaMau />
          <CaoBang />
          <CanTho />
          <DaNang />
          <DakLak />
          <DakNong />
          <DienBien />
          <DongNai />
          <DongThap />
          <GiaLai />
          <HaGiang />
          <HaNam />
          <HaNoi />
          <HaTinh />
          <HaiDuong />
          <HaiPhong />
          <HauGiang />
          <HoChiMinh />
          <HoaBinh />
          <HungYen />
          <KhanhHoa />
          <KienGiang />
          <KonTum />
          <LangSon />
          <LaiChau />
          <LamDong />
          <LaoCai />
          <LongAn />
          <NamDinh />
          <NinhBinh />
          <NinhThuan />
          <NgheAn />
          <PhuTho />
          <PhuYen />
          <QuangBinh />
          <QuangNam />
          <QuangNgai />
          <QuangNinh />
          <QuangTri />
          <SocTrang />
          <SonLa />
          <TayNinh />
          <ThaiBinh />
          <ThaiNguyen />
          <ThanhHoa />
          <ThuaThienHue />
          <TienGiang />
          <TraVinh />
          <TuyenQuang />
          <VinhLong />
          <VinhPhuc />
          <VungTau />
          <YenBai />
          <QuanDaoHoangSa />
          <QuanDaoTruongSa />
        </g>
      </svg>
    </div>
  );
};

export default MapTravel;
