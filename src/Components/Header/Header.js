import React, {useState} from "react";
import  Navbar  from "./Navbar";

export default function Header() {

  return (
    <header className="header">
      <div className="width-default">
        <Navbar />
      </div> 
    </header>

  );
}
