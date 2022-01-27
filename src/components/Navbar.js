import React from 'react';
import { Avatar, Divider, Menu, Tooltip, Stack, Typography, Drawer, ListItemButton, List } from '@mui/material'
import { CartContext } from '../context/CartContext'
import './Navbar.css'
import { Box } from '@mui/system';

function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [value, setValue] = React.useContext(CartContext)
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const open = Boolean(anchorEl)
    const handleClose = () => {
        setAnchorEl(null);
    }
    console.log(window.theme)
  return (
  <Stack direction="row" sx={{p: 3, textAlign: 'center', color: '#959699'}} justifyContent="space-between">
    <Stack direction="row" spacing={{md: 5, xs: 2}}>
        <Stack display={{md: 'none', xs: 'flex' }} direction={'column'} justifyContent={'center'} className="navbar-menu" onClick={()=>setOpenDrawer(true)}>
            <img alt="Menu" src='/assets/icon-menu.svg'  />
        </Stack>
        <Stack direction="column" justifyContent="center" className="navbar-logo">
            <img alt="Sneackers Logo" src='/assets/logo.svg' width={160} height={25} />
        </Stack>
        <Stack direction="row" justifyContent="center" textAlign="center" className="navbar-items" display={{md: 'flex', xs: 'none'}} spacing= {4}>
            <Typography fontFamily={'Kumbh Sans'}>Collection</Typography>
            <Typography fontFamily={'Kumbh Sans'}>Men</Typography>
            <Typography fontFamily={'Kumbh Sans'}>Women</Typography>
            <Typography fontFamily={'Kumbh Sans'}>About</Typography>
            <Typography fontFamily={'Kumbh Sans'}>Contact</Typography>
        </Stack>
    </Stack>
    <Stack direction="row" spacing={4}>
    <Stack justifyContent="center" onClick={(e)=>setAnchorEl(e.currentTarget)} className='cart-menu'>
        {value.length > 0 && <div className='badge'>
            <p>{value.length}</p>
        </div>}
        <img alt="cart" src="/assets/icon-cart.svg" />
    </Stack>
    <Stack height={42} width={42}>
    <Avatar alt="avatar" src="/assets/image-avatar.png" className="avatar"/>
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
        {value.length > 0 && 
            <div>
                <div style={{textAlign: 'center'}} className='empty-cart' onClick={()=>setValue([])}>
                    <Typography variant="suntitle2" sx={{fontSize: 12, textDecoration: 'underline', textAlign:'center'}}>click to empty cart.</Typography>
                </div>
                <Stack className='button-checkout-stack' direction="row" justifyContent="center" p={2} pt={0}>
                <div className='button-checkout'>
                    <p>Checkout</p>
                </div>
                </Stack>
            </div>
        }
    </Menu>
    <Drawer
        anchor="left"
        open={openDrawer}
        onClose={()=>setOpenDrawer(false)}
    >
        <Box width={250}>
            <Stack p={2}>
                <img alt="close" src="/assets/icon-close.svg" width={20} height={20}/>
            </Stack>
            <List style={{color: 'black'}}>
                <ListItemButton><b>Collection</b></ListItemButton>
                <ListItemButton><b>Men</b></ListItemButton>
                <ListItemButton><b>Women</b></ListItemButton>
                <ListItemButton><b>About</b></ListItemButton>
                <ListItemButton><b>Contact</b></ListItemButton>
            </List>
        </Box>
    </Drawer>
  </Stack>
  );
}

export default Navbar;
