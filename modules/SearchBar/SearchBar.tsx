'use client';
import SearchIcon from '@mui/icons-material/Search';
import { Container, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

export default async function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: 400 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}
