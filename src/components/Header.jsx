import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Badge,
  Stack,
  TextField,
  InputAdornment,
} from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './../styles/Header.css';

export const Header = () => {
  const navigate = useNavigate();

  const setOrder = () => {
    navigate('/order');
  };

  return (
    <React.Fragment>
      <AppBar className="header_container">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            DBMS
          </Typography>
          <TextField
            id="search"
            placeholder="Search for products, brands and more"
            type="search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <Stack>
            <Button
              variant="contained"
              disableElevation
            >
              Track Your Order
            </Button>
            <Button
              variant="contained"
              startIcon={
                <Badge badgeContent={5} color="error">
                  <ShoppingBagOutlinedIcon />
                </Badge>
              }
              disableElevation
              onClick={() => setOrder()}
            >
              Bag
            </Button>
            <Button
              variant="contained"
              startIcon={<PermIdentityIcon />}
              disableElevation
            >
              Logout
            </Button>
          </Stack>
        </Toolbar>
          <Toolbar>
            {['Men', 'Women', 'KIDS', 'HOME & LIVING', 'BEAUTY'].map((text, index) => (
              <Button
                disableElevation
                variant="contained"
              >
                {text}
              </Button>
            ))}
          </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};