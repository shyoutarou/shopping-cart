import React from 'react';
import { Link } from "react-router-dom";

export const PageHeader = ({ backroute }) => (
    <div className="page-header">
        <h1>Amazing Store</h1>
        <p><Link to="/">Home</Link></p>
    </div>
);
