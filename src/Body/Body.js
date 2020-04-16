import React from 'react';
import '../Body/Body.css';
import Aside from './Aside/Aside';
import Button from './Button/Button';
import BadButton from './BadButton/BadButton';
import Table from './Table/Table';

function Body() {
    return (
        <body className="main-content">
            <h1>Welcome Aboard</h1>

            <Button />

            <BadButton />

            <Table>
                
            </Table>

            <Aside />
        </body>
    );
}

export default Body;