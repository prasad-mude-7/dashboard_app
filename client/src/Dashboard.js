// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import Pagination from '@mui/material/Pagination';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const data = [
//   { id: 1, name: 'John Doe', email: 'john@example.com' },
//   { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
//   { id: 3, name: 'John Doe', email: 'john@example.com' },
//   { id: 4, name: 'Jane Smith', email: 'jane@example.com' },
//   { id: 5, name: 'John Doe', email: 'john@example.com' },
//   { id: 6, name: 'Jane Smith', email: 'jane@example.com' },
//   { id: 7, name: 'John Doe', email: 'john@example.com' },
//   { id: 8, name: 'Jane Smith', email: 'jane@example.com' },
  
//   { id: 9, name: 'John Doe', email: 'john@example.com' },
//   { id: 10, name: 'Jane Smith', email: 'jane@example.com' },
//   { id: 11, name: 'John Doe', email: 'john@example.com' },
//   { id: 12, name: 'Jane Smith', email: 'jane@example.com' },
  
//   // Add more data here
// ];

// const rowsPerPage = 2;

// function Dashboard() {
//   const [searchText, setSearchText] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);

//   const filteredData = data.filter((row) =>
//     row.name.toLowerCase().includes(searchText.toLowerCase()) ||
//     row.email.toLowerCase().includes(searchText.toLowerCase())
//   );

//   const handleChangePage = (event, newPage) => {
//     setCurrentPage(newPage);
//   };

//   const bull = (
//     <Box
//       component="span"
//       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//       •
//     </Box>
//   );

//   return (
//     <Container>
//        <Box my={10} display="flex" justifyContent="space-around">
//        <Card sx={{ minWidth: 100 }}>
//         <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           0
//         </Typography>
//        </CardContent>
//       </Card>
//       <Card sx={{ minWidth: 100 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           1
//         </Typography>
//       </CardContent>
//       </Card>
//       <Card sx={{ minWidth: 100 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           3
//         </Typography>
//       </CardContent>
//       </Card>
//         </Box> 
//       <Box my={10}>
//         <TextField
//           label="Search"
//           fullWidth
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           InputProps={{
//             endAdornment: (
//               <IconButton>
//                 <SearchIcon />
//               </IconButton>
//             ),
//           }}
//         />
//       </Box>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>SrNo</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Mobile</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell>{row.id}</TableCell>
//                 <TableCell>{row.name}</TableCell>
//                 <TableCell>{row.mobile}</TableCell>
//                 <TableCell>{row.email}</TableCell>
//                 <TableCell>{"delete"}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Box my={3} display="flex" justifyContent="center">
//         <Pagination
//           count={Math.ceil(filteredData.length / rowsPerPage)}
//           page={currentPage}
//           onChange={handleChangePage}
//         />
//       </Box>
//     </Container>
//   );
// }

// export default Dashboard;


import React, { useState,useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

const data = [
  { id: 1, name: 'John Doe',mobile:1234, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith',mobile:1234, email: 'jane@example.com' },
  { id: 3, name: 'John Doe',mobile:1234, email: 'john@example.com' },
  { id: 4, name: 'Jane Smith',mobile:1234, email: 'jane@example.com' },
  { id: 5, name: 'John Doe',mobile:1234, email: 'john@example.com' },
  { id: 6, name: 'Jane Smith',mobile:1234, email: 'jane@example.com' },
  { id: 7, name: 'John Doe',mobile:1234, email: 'john@example.com' },
  { id: 8, name: 'Jane Smith',mobile:1234, email: 'jane@example.com' },
  
  { id: 9, name: 'John Doe',mobile:1234, email: 'john@example.com' },
  { id: 10, name: 'Jane Smith',mobile:1234, email: 'jane@example.com' },
  { id: 11, name: 'John Doe',mobile:1234, email: 'john@example.com' },
  { id: 12, name: 'Jane Smith',mobile:1234, email: 'jane@example.com' },
  
  // Add more data here
];

const rowsPerPage = 2;

function Dashboard() {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const [customerData, setCustomerData] = useState([]);

  const filteredData = customerData?.filter((row) =>
    row.name.toLowerCase().includes(searchText.toLowerCase()) ||
    row.email.toLowerCase().includes(searchText.toLowerCase())
  );

  console.log("filteredData",filteredData);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const deleteHandler = (e,idToDelete)=>{
    console.log("wwww",idToDelete);
    const updatedItems = customerData.filter((item) => item._id !== idToDelete);
    setCustomerData(updatedItems);
    // axios
    // .delete(`localhost:7000/delete/${id}`)
    // .then((response) => {
    //   console.log('customer deleted successfully.');
    //   // You can update your state or perform other actions as needed
    // })
    // .catch((error) => {
    //   console.error('Error deleting item:', error);
    // });

    
  }

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  useEffect(() => {
    // Define the URL of your GET API endpoint

    const apiUrl = 'http://localhost:7000/customers';


    axios.get(apiUrl)
    .then((response) => {
      // Handle the successful response here
      setCustomerData(response.data.data);
    })
    .catch((error) => {
      // Handle any errors here
      console.error('Error fetching data:', error);
    });


  }, []); 

  return (
    <Container>
       <Box my={10} display="flex" justifyContent="space-around">
       <Card sx={{ minWidth: 100 }}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          0
        </Typography>
       </CardContent>
      </Card>
      <Card sx={{ minWidth: 100 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          1
        </Typography>
      </CardContent>
      </Card>
      <Card sx={{ minWidth: 100 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          3
        </Typography>
      </CardContent>
      </Card>
        </Box> 
      <Box my={10}>
        <TextField
          label="Search"
          fullWidth
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SrNo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((row,idx) => (
              <TableRow key={idx}>
                <TableCell>{idx+1}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.mobile}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell style={{cursor:"pointer"}} onClick={(e)=>deleteHandler(e,row._id)}><DeleteIcon/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box my={3} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(filteredData.length / rowsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
        />
      </Box>
    </Container>
  );
}

export default Dashboard;

