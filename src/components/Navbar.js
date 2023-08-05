import React from "react";
import { VscThreeBars } from 'react-icons/vsc';
import { CiSearch } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';

function Navbar() {
  return (
    <>
      <div className="title">
      <div>
        <a href="/">NORM ARCHITECTS</a>
      </div>
       <VscThreeBars/> 
       <CiSearch/>
       <RxCross1/>
       
      </div>
    </>
  );
}

export default Navbar;
