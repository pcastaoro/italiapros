import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import '../styles/table.css';

// Main functional component to render a data table with search and button functionality.
export default function DataTable({ data, onButtonClick }) {

    // State to store the rows displayed in the table.
    const [rows, setRows] = useState([]);
    // State to store the column configuration for the table.
    const [columns, setColumns] = useState([]);
    // State to store rows filtered by the search text.
    const [filteredRows, setFilteredRows] = useState([]);
    // State to track if the data is still loading.
    const [loading, setLoading] = useState(true);
    // State to store the current search text input.
    const [searchText, setSearchText] = useState('');

    // Function to dynamically generate table columns based on the provided data structure.
    const generateColumns = (data) => {
        if (data.length > 0) {
            return Object.keys(data[0]).map((key) => ({
                field: key,
                headerName: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the header name.
                flex: 1, // Allow flexible width for columns.
            }));
        }
        return [];
    };

    // Function to handle search input changes and filter rows based on the search text.
    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchText(value);
        setFilteredRows(
            rows.filter((row) =>
                Object.values(row).some(
                    (field) => field?.toString().toLowerCase().includes(value)
                )
            )
        );
    };

    // Effect to initialize table data, columns, and loading state when the data prop changes.
    useEffect(() => {
        if (data) {
            setRows(data);
            setFilteredRows(data);
            setColumns(generateColumns(data));
            setLoading(false);
        }
    }, [data]);

    // JSX structure for the DataTable component.
    return (
        <Paper sx={{ height: 700, width: '100%', padding: 2 }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '8px', marginBottom: '16px' }}>
                {/* Buttons to trigger actions for different table categories */}
                <Button onClick={() => onButtonClick('PLAYERS')} variant="contained">Players</Button>
                <Button onClick={() => onButtonClick('STAFF')} variant="contained">Staff</Button>
                <Button onClick={() => onButtonClick('TEAM')} variant="contained">Team</Button>

                {/* Search input field to filter rows */}
                <TextField
                    label="Search"
                    variant="outlined"
                    size="small"
                    value={searchText}
                    onChange={handleSearch}
                />
            </div>

            {/* DataGrid component to render the table */}
            <DataGrid
                rows={filteredRows}
                columns={columns}
                loading={loading}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ flexGrow: 1, width: '100%', border: 'none' }}
            />
        </Paper>
    );
}
