'use client';

import SearchBar from '@/app/components/modules/Navbar/SearchBar/SearchBar';
import ImgCardCustom from '@/app/components/ui/ImgCardCustom/ImgCardCustom';
import '@/mock/projects.json';
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  Pagination,
  Radio,
  RadioGroup,
} from '@mui/material';

export default function PatternLibrary() {
  return (
    <Container
      sx={{
        height: '100vh',
      }}
    >
      <SearchBar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          mt: '60px',
          minHeight: '650px',
        }}
      >
        <Box
          sx={{
            marginRight: '60px',
          }}
        >
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="clothing"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="clothing"
                control={<Radio />}
                label="Clothing"
              />
              <FormControlLabel
                value="accessories"
                control={<Radio />}
                label="Accessories"
              />
              <FormControlLabel value="toys" control={<Radio />} label="Toys" />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '20px ',
          }}
        >
          <ImgCardCustom alt="" src="" title="" />
        </Box>
      </Box>
      <Pagination count={10} />
    </Container>
  );
}
