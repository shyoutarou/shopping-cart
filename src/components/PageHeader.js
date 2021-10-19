import React from 'react';
import { Link } from "react-router-dom";
import "./PageHeader.css";
import BackIcon from '../assets/icons/home.svg'

export const PageHeader = ({ title,  }) => (
    <header className="page-header">
      <div className="top-bar-container">
            <Link to='/'>
                  <img src={BackIcon} alt="home"/>
            </Link>
            {/* <img src={LogoImg} alt="proffy"/> */}
      </div>  
      <div className="header-content">
            <h1 className="page-header-tittle">{title}</h1>
      </div>             
    </header>
);
