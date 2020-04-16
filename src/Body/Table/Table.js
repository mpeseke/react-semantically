import React from 'react';
import '../Table/Table.css';
import TableRow from './TableRow/TableRow';
import TableHeader from './TableHeader/TableHeader';

function Table() {
    return (
        <table>
            <tr>
                <TableHeader />
            </tr>
           <tr>
               <TableRow />
           </tr>
           <tr>
               <TableRow />
           </tr>
           <tr>
               <TableRow />
           </tr>
           <tr>
               <TableRow />
           </tr>
        </table>
    );
}

export default Table;
