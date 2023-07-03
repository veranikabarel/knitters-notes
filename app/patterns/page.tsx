'use client';

import SearchBar from '@/app/components/modules/Navbar/SearchBar/SearchBar';
import '@/mock/projects.json';
import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from '@mui/material';

export default function PatternLibrary() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{ m: '40px 0', display: 'flex', justifyContent: 'center' }}
      >
        <SearchBar />
      </Grid>
      <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
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
      </Grid>
      <Grid item xs={8} sx={{ mb: '20px' }}></Grid>
    </Grid>
  );
}
