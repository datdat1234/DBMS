import React from 'react';
import { 
  Box,
  Link,
  Breadcrumbs,
  Stack,
  Typography,
  CardMedia,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './../styles/Order.css';

export const Order = () => {

  const navigate = useNavigate();

  const returnProd = () => {
    navigate('/');
  };

  const RenderItem = () => {
    let list = [];
    for (let i = 0; i < 5; i++) {
      list.push(
        <Stack className="order_item-detail">
          <Stack>
            <CardMedia
              component="img"
              image="https://picsum.photos/1900/800"
              alt="unsplash img"
            />
            <Stack>
              <Typography>
                <b>Luiz Vitton Lace Suit</b>
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            {['red', 'blue', 'black', 'pink'].map(
              (text) => (
                <Box 
                  key={text}
                  className="order_item-color"
                  sx={{
                    backgroundColor: `${text}`
                  }}
                >
                </Box>
              )
            )}
          </Stack>
          <Stack>
            {['X', 'XL', 'S'].map(
              (text) => (
                <Typography>
                  {text}
                </Typography>
              )
            )}
          </Stack>
          <Stack>
            <Typography>
              233
            </Typography>
          </Stack>
          <Stack>
            <Typography>
              $188.00
            </Typography>
          </Stack>
        </Stack>
      )}
    return list;
  };

  return (
    <React.Fragment>
      <Box className="order_container">
        <Box className="order_wrapper">
          <Stack className="order_breadcrumbs">
            <Breadcrumbs aria-label="breadcrumbs" separator=">">
              <Link href="#">Home</Link>
              <Link href="#">Shop All</Link>
              <Link href="#">Shop All</Link>
            </Breadcrumbs>
          </Stack>
          <Stack className="order_content">
            <Typography>
              Cart (x item)
            </Typography>
            <Stack className="order_items">
              <Stack className="order_items-detail">
                <Stack className="order_items-header">
                  <Stack></Stack> 
                  <Typography>
                    Color
                  </Typography>
                  <Typography>
                    Size
                  </Typography>
                  <Typography>
                    Quantity
                  </Typography>
                  <Typography>
                    Price
                  </Typography>
                </Stack>
                <RenderItem/>
              </Stack>
              <Stack className="order_checkout">
                <Stack>
                  <Stack>
                    <Typography className='order_checkout-title'>
                      Total items
                    </Typography>
                    <Typography>
                      3
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography className='order_checkout-title'>
                      Total Quantities
                    </Typography>
                    <Typography>
                      50
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography className='order_checkout-title'>
                      Total fee
                    </Typography>
                    <Typography>
                      $540.00
                    </Typography>
                  </Stack>
                  <Button
                    onClick={() => returnProd()}
                  >
                    Return to product page
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </React.Fragment>
  );
};