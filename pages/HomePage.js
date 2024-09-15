"use client";
// pages/index.tsx
import React from 'react';
import { VscHome, VscAccount, VscSearch, VscHistory  } from 'react-icons/vsc';
import { PiScanFill} from 'react-icons/pi';
import { useRouter } from 'next/router';
import Link from "next/link"
const HomePage = () => {
  const router = useRouter();  // ใช้ useRouter เพื่อเข้าถึง routerd


  const goToEditAccount = () => {
    router.push('/EditAccount');
  };

  const goToHistoryPage = () => {
    router.push('/HistoryPage');
  };
  
  return (
    <div>
      {/* เนื้อหาของหน้าหลัก */}
      <h1>ยินดีต้อนรับ</h1>

      {/* MenuBar */}
      <div className="menuBar">
        <div className="menuItem">
          <VscHome />
          <p>หน้าหลัก</p>
        </div>
        <div className="menuItem">
          < VscSearch />
          <p>ค้นหา</p>
        </div>
        <Link
            href="/takePhotoFoot/takePhotoFootLeft1"
          >
            {/* <a className={styles.card}> */}
            <div className="menuItem">
          <PiScanFill />
          <p>สแกน</p>
        </div>
            {/* </a> */}
          </Link>
        
        <div className="menuItem"  onClick={goToHistoryPage}>
          < VscHistory />
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

export default HomePage;