import React from 'react';
import { Avatar, Divider, Menu, Tooltip, Stack, Typography } from '@mui/material'
import { CartContext } from '../context/CartContext'
import './Navbar.css'

function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [value, setValue] = React.useContext(CartContext)
    const open = Boolean(anchorEl)
    const handleClose = () => {
        setAnchorEl(null);
    }
  return (
  <Stack direction="row" sx={{p: 3, textAlign: 'center', color: '#959699'}} justifyContent="space-between">
    <Stack direction="row" spacing={5}>
        <Stack>
            <img alt="Sneackers Logo" src='/assets/logo.svg' width={160} height={25} />
        </Stack>
        <Typography fontFamily={'Kumbh Sans'}>Collection</Typography>
        <Typography fontFamily={'Kumbh Sans'}>Men</Typography>
        <Typography fontFamily={'Kumbh Sans'}>Women</Typography>
        <Typography fontFamily={'Kumbh Sans'}>About</Typography>
        <Typography fontFamily={'Kumbh Sans'}>Contact</Typography>
    </Stack>
    <Stack direction="row" spacing={4}>
    <Stack justifyContent="center" onClick={(e)=>setAnchorEl(e.currentTarget)} className='cart-menu'>
        <img alt="cart" src="/assets/icon-cart.svg" />
    </Stack>
    <Stack height={42} width={42}>
    <Avatar src="/assets/image-avatar.png" className="avatar"/>
    </Stack>
    </Stack>
    <Menu
        id="cart"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{'aria-labelledby': 'basic-button'}}
        sx={{mt: 3, mr: 2}}
    >
        <Stack sx={{width: '380px'}} >
            <Typography fontFamily="Kumbh Sans" sx={{p: 2}}><b>Cart</b></Typography>
        </Stack>
        <Divider />
        <Stack>
        {value.length === 0 ? (
            <Stack sx={{height: '200px', textAlign: 'center'}} justifyContent="center">
                <Typography fontFamily="Kumbh Sans" fontWeight={700}>Your cart is empty.</Typography>
            </Stack>
        ) : (
            value.map((e, i)=>(
            <Stack direction="row" spacing={3} p={2}>
                <Stack>
                    <img alt="Limited Sneacker" src="/assets/image-product-1-thumbnail.jpg" width={50} style={{ borderRadius: 10 }} />
                </Stack>
                <Stack color="#7C7E83">
                    <Typography fontFamily="Kumbh Sans" >Fall Limited Edition Sneackers</Typography>
                    <Typography>$125.00 x{e || 0} <b style={{color: 'black'}}>$375.00</b></Typography>
                </Stack>
                <Stack justifyContent="center" onClick={()=>setValue(value.filter((e, index)=>i !== index))}>
                    <Tooltip title="Delete">
                        <img alt="delete" src="/assets/icon-delete.svg" width={14} className='delete' />
                    </Tooltip>
                </Stack>
            </Stack>
        ))
        )}
        </Stack>
        {value.length > 0 && <Stack className='button-checkout-stack' direction="row" justifyContent="center" p={2}>
            <div className='button-checkout'>
                <p>Checkout</p>
            </div>
        </Stack>}
    </Menu>
  </Stack>
  );
}

export default Navbar;
