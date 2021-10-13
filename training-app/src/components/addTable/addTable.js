import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


function AddTable () {
    const[rowCount, setRow] = useState("");
    const[colCount, setCol] = useState("");

    //now we set the State for x and y array.
    const[rowArray, setRowArray] = useState([]);
    const[colArray, setColArray] = useState([]);
    
    const[showTable, setTable] = useState(false);

    const CreateTable = async () => {
        setTable(false);
        rowArray.length = 0;
        colArray.length = 0;
        
        for (let i = 1; i <= rowCount; i++) {
            rowArray.push(i);
            console.log("this is for the row: ", i);
        };
        setRowArray(rowArray);
    
        for (let i = 1; i <= colCount; i++) {
            colArray.push(i);
            console.log("this for the column: ", i);
        };
        setColArray(colArray);

        setTable(true);

    };

    return(
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>first</TableCell>
                        <TableCell>second</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <input
                                type="text"
                                id="xl"
                                value={rowCount}
                                onChange={(e) => setRow(e.target.value)}
                            />
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <input
                                type="text"
                                id="xl"
                                value={colCount}
                                onChange={(e) => setCol(e.target.value)}
                            /> 
                        </TableCell>
                        <TableCell>
                            <Button variant="contained" color="primary" onClick={CreateTable} >
                                click me
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            {showTable ? ( 
                <Table>
                    <TableBody>
                        {rowArray.map((r, i) => (
                            <TableRow key={i} >
                                {colArray.map((c, i) => (
                                    <TableCell key={i} >
                                        R {r} - C {c}
                                    </TableCell> 
                                ))} 
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : null}
        </>
    )

}

export default AddTable;