"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
// import { FaSearch, FaCalendarAlt, FaDotCircle, FaInfo } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { VscHome, VscAccount, VscSearch, VscHistory } from "react-icons/vsc";
import { PiScanFill } from "react-icons/pi";
import { useRouter } from "next/navigation";
import "../globals.css";

const UserHistory: React.FC = () => {
  const router = useRouter();
  const [showInfoCard, setShowInfoCard] = useState(false); // State สำหรับการแสดงการ์ด

  const goToEditAccount = () => {
    router.push("/EditAccount");
  };

  const goToHistoryPage = () => {
    router.push("/HistoryPage");
  };

  const toggleInfoCard = () => {
    setShowInfoCard(!showInfoCard); // เปลี่ยน state เมื่อกดปุ่ม
  };

  return (
    <div className="historyPage">
      {/* ช่อง Search */}
      <div className="searchBar">
        <div className="header-with-back-icon">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="back-icon"
            onClick={() => router.back()}
          />

          <div className="top-right-icon">
            <FontAwesomeIcon
              icon={faBell} // ไอคอนการแจ้งเตือน
              className="notification-icon"
            />
            <img
              src="/path/to/profile-picture.jpg" // เปลี่ยนเป็นเส้นทางของรูปโปรไฟล์ของคุณ
              alt="Profile"
              className="profile-pic"
            />
          </div>
        </div>
        <h1>ข้อมูลเท้าของคุณ</h1>
           {/* ปุ่มคำอธิบายเพิ่มเติม */}
           <div className="detail-info" onClick={toggleInfoCard}>
          <MdInfoOutline />
          <p>คำอธิบายเพิ่มเติม</p>
        </div>

        <div className="foot-detail">
          <img
            src="/Pictures/footDetail.png" // เปลี่ยนเป็นเส้นทางของรูปโปรไฟล์ของคุณ
            alt="footDetail"
            className="foot-pic"
          />
        </div>

        {/* การ์ดแสดงคำอธิบาย */}
        {showInfoCard && (
          <div className="info-card">
          <div className="info-row">
            <div className="info-letter">A</div>
            <div className="info-description">ความยาวของเท้า</div>
          </div>
          <div className="info-row">
            <div className="info-letter">B</div>
            <div className="info-description">ความยาวของเท้า (ไม่รวมนิ้วเท้า)</div>
          </div>
          <div className="info-row">
            <div className="info-letter">C</div>
            <div className="info-description">ความกว้างของกลางเท้า</div>
          </div>
          <div className="info-row">
            <div className="info-letter">D</div>
            <div className="info-description">ความยาวระหว่างส้นเท้ากับจมูกเท้า (Apex of 1st MTH)</div>
          </div>
          <div className="info-row">
            <div className="info-letter">E</div>
            <div className="info-description">ความยาวระหว่างส้นเท้ากับจมูกเท้า (Apex of 5th MTH)</div>
          </div>
          <div className="info-row">
            <div className="info-letter">F</div>
            <div className="info-description">ความกว้างของหน้าเท้า</div>
          </div>
          <div className="info-row">
            <div className="info-letter">G</div>
            <div className="info-description">ความกว้างของส้นเท้า</div>
          </div>
          <div className="info-row">
            <div className="info-letter">H</div>
            <div className="info-description">ความสูงของอุ้งเท้า</div>
          </div>
          <div className="info-row">
            <div className="info-letter">I</div>
            <div className="info-description">ความยาวระหว่างส้นเท้ากับกลางเท้า</div>
          </div>
        </div>
        
        )}
        <div className="grid">
        <div className="grid-container">
  {["A(ซม.)", "B(ซม.)", "C(ซม.)", "D(ซม.)", "E(ซม.)", "F(ซม.)", "G(ซม.)", "H(ซม.)", "I(ซม.)", "ประเภทอุ้งเท้า"].map((label, index) => (
    <div key={index} className="grid-item">
      <p>{label}</p>
      <input type="text" />
    </div>
  ))}
</div>
</div>
      </div>

      {/* MenuBar */}
      <div className="menuBar">
        <div className="menuItem" onClick={() => router.push("/HomePage")}>
          <VscHome />
          <p>หน้าหลัก</p>
        </div>
        <div className="menuItem" onClick={() => router.push("/search")}>
          <VscSearch />
          <p>ค้นหา</p>
        </div>
        <div className="menuItem" onClick={() => router.push("/scan")}>
          <PiScanFill />
          <p>สแกน</p>
        </div>
        <div className="menuItem" onClick={goToHistoryPage}>
          <VscHistory />
          <p>ประวัติ</p>
        </div>
        <div className="menuItem" onClick={goToEditAccount}>
          <VscAccount />
          <p>โปรไฟล์</p>
        </div>
      </div>
    </div>
  );
};

export default UserHistory;
