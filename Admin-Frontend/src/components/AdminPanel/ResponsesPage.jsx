import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/CheckCircle';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const ResponsesPage = () => {
  const [callbacks, setCallbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all callbacks
  const fetchCallbacks = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/callbacks`); // adjust URL as needed
      console.log("res",res)
      const response = await res.data.data
      setCallbacks(response);
    } catch (err) {
      console.log('Error fetching callbacks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCallbacks();
  }, []);

  // Toggle contacted status
  const handleToggleContacted = async (id, current) => {
    try {
      const res = await axios.patch(`${apiUrl}/api/callbacks/${id}`, {
        contacted: !current
      });

      setCallbacks(prev =>
        prev.map(cb => (cb._id === id ? res.data.data : cb))
      );
    } catch (err) {
      console.log('Error updating callback:', err);
    }
  };

  // Delete callback
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/api/callbacks/${id}`);
      setCallbacks(prev => prev.filter(cb => cb._id !== id));
    } catch (err) {
      console.log('Error deleting callback:', err);
    }
  };

  const columns = [
    { field: 'fullName', headerName: 'Full Name', flex: 1 },
    { field: 'workEmail', headerName: 'Email', flex: 1 },
    { field: 'companyName', headerName: 'Company', flex: 1 },
    { field: 'country', headerName: 'Country', flex: 1 },
    {
      field: 'message',
      headerName: 'Message',
      flex: 2,
      renderCell: (params) => (
        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {params.value}
        </span>
      )
    },
    {
      field: 'contacted',
      headerName: 'Contacted',
      width: 140,
      renderCell: (params) => (
        <Button
          variant={params.row.contacted ? "contained" : "outlined"}
          color={params.row.contacted ? "success" : "warning"}
          size="small"
          startIcon={<CheckIcon />}
          onClick={() => handleToggleContacted(params.row._id, params.row.contacted)}
        >
          {params.row.contacted ? "Yes" : "No"}
        </Button>
      )
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <Button
          variant="outlined"
          color="error"
          size="small"
          startIcon={<DeleteIcon />}
          onClick={() => handleDelete(params.row._id)}
        >
          Delete
        </Button>
      )
    }
  ];

  return (
    <Container maxWidth="xl">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4} mt={2}>
        <Typography variant="h4">Callbacks</Typography>
      </Box>

      {/* Table */}
      <Box sx={{ height: 650, width: '100%' }}>
        <DataGrid
          rows={callbacks.map(cb => ({ id: cb._id, ...cb }))}
          columns={columns}
          loading={loading}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          disableRowSelectionOnClick
        />
      </Box>
    </Container>
  );
};

export default ResponsesPage;
