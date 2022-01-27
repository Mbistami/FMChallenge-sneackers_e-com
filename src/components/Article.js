import React, { useContext, useState } from 'react';
import { Stack, Typography, Dialog } from '@mui/material'
import { CartContext } from '../context/CartContext';
import './Article.css'

function Article() {
    const [total, setTotal] = useState(0);
    const [value, setValue] = useContext(CartContext)
    const [activeIndex, setActiveIndex] = useState(0)
    const [showDialog, setShowDialog] = useState(false)
    const [showError, setShowError] = useState(false)
    const handleAdding = (instruction) => {
        setTotal(instruction(total))
    }
    const handlePlus = () => {
        if (activeIndex < 3)
         setActiveIndex(activeIndex+1)
        else setActiveIndex(0)
    }
    const handleMinus = () => {
        if (activeIndex > 0)
        setActiveIndex(activeIndex-1)
        else setActiveIndex(3)
    }
    const handleAddNewArticle = () => {
        if (total)
            setValue([...value, total])
        else
        {
            setShowError(true);
            setTimeout(()=>setShowError(false), 2500)
        }
    }
  return (
      <Stack direction="row" justifyContent="center">
  <Stack direction={{xs: 'column', md: 'row'}} spacing={{md:9}} justifyContent="center" className="main" sx={{width: '70%'}}>
      <Stack mt={7} className="images-box">
          <Stack direction="column" justifyContent="center" onClick={()=>setShowDialog(true)}>
              <img alt="product image" src={`/assets/image-product-${activeIndex + 1}.jpg`} width={370} style={{borderRadius: '15px', transform: 'all 1s ease-in-out'}} />
          </Stack>
          <div className='image-boxes'>
            <span className={activeIndex === 0 && 'active'} onClick={()=>setActiveIndex(0)}>
             <img alt="Sneaker 1" src="/assets/image-product-1-thumbnail.jpg" width={80} style={{borderRadius: '15px'}}  />
            </span>
            <span className={activeIndex === 1 && 'active'} onClick={()=>setActiveIndex(1)}>
             <img alt="Sneaker 1" src="/assets/image-product-2-thumbnail.jpg" width={80} style={{borderRadius: '15px'}}  />
            </span>
            <span className={activeIndex === 2 && 'active'} onClick={()=>setActiveIndex(2)}>
             <img alt="Sneaker" src="/assets/image-product-3-thumbnail.jpg" width={80} style={{borderRadius: '15px'}}  />
            </span>
            <span className={activeIndex === 3 && 'active'} onClick={()=>setActiveIndex(3)}>
             <img alt="Sneaker" src="/assets/image-product-4-thumbnail.jpg" width={80} style={{borderRadius: '15px'}}  />
            </span>
          </div>
          <Dialog PaperProps={{style: {overflowY: 'visible', backgroundColor: 'transparent', boxShadow: 'none'}}} open={showDialog} onClose={()=>setShowDialog(false)} style={{overflowY: 'inherit', backgroundColor: 'transparent'}} className="dialog-box">
            <Stack className="dialog-controller">
                <img alt="product image" src={`/assets/image-product-${activeIndex + 1}.jpg`} width={600} style={{ transform: 'all 1s ease-in-out'}} />
                <div className="navigation-right navigation" onClick={handlePlus} />
                <div className="navigation-left navigation" onClick={handleMinus}/>
                <div className="navigation-close navigation" onClick={()=>setShowDialog(false)}/>
            </Stack>
            <div className='image-boxes-dialog'>
            <span className={activeIndex === 0 && 'active'} onClick={()=>setActiveIndex(0)}>
             <img alt="Sneaker thumbnail 1" src="/assets/image-product-1-thumbnail.jpg" width={80} style={{borderRadius: '15px'}}  />
            </span>
            <span className={activeIndex === 1 && 'active'} onClick={()=>setActiveIndex(1)}>
             <img alt="Sneaker thumbnail 1" src="/assets/image-product-2-thumbnail.jpg" width={80} style={{borderRadius: '15px'}}  />
            </span>
            <span className={activeIndex === 2 && 'active'} onClick={()=>setActiveIndex(2)}>
             <img alt="Sneaker thumbnail 1" src="/assets/image-product-3-thumbnail.jpg" width={80} style={{borderRadius: '15px'}}  />
            </span>
            <span className={activeIndex === 3 && 'active'} onClick={()=>setActiveIndex(3)}>
             <img alt="Sneaker thumbnail 1" src="/assets/image-product-4-thumbnail.jpg" width={80} style={{borderRadius: '15px'}}  />
            </span>
          </div>
          </Dialog>
      </Stack>
      <Stack className="bottom"justifyContent="center" spacing={1} >
          <Stack sx={{pt: 10}}>
            <Typography fontFamily={'Kumbh Sans'} fontWeight={700} sx={{py:2, color: 'hsl(26, 100%, 55%)', fontWeight: 700}} variant="subtitle2">SNEACKER COMPANY</Typography>
            <Typography fontFamily={'Kumbh Sans'} fontWeight={700} sx={{p:0}} variant="h4">Fall Limited Edition<br />Sneackers</Typography>
            <Typography sx={{color: '#929395'}} fontFamily={'Kumbh Sans'}><p>There low-profile sneackers are your perfect casual wear companion. Featuring a durable rubber outer sole, They'll withstand everything the weather can offer.</p></Typography>
            <Stack>
                <Stack spacing={3} direction="row">
                    <Typography fontFamily={'Kumbh Sans'} sx={{fontSize: 26, textDecoration: 'bold', fontWeight: 700}}>$125.00</Typography>
                    <Stack direction="column" justifyContent="center">
                        <div style={{backgroundColor: 'hsl(25, 100%, 94%)', height: '55%'}} >
                            <p style={{margin: 0, padding: 0, fontSize: 14, paddingLeft: 5, paddingRight: 5, color: 'hsl(26, 100%, 55%)', fontWeight: 700}}>50%</p>
                        </div>
                    </Stack>
                </Stack>
                <Typography fontFamily={'Kumbh Sans'} fontWeight={700} sx={{textDecoration: 'line-through', color: '#C1C2C7', fontWeight: 600}}>$250.00</Typography>
            </Stack>
            <Stack mt={4} direction={{xs: 'column', sm: 'row'}} spacing={2}>
                <Stack width={{xs: '100%', sm: '40%'}} sx={{ backgroundColor: 'hsl(223, 64%, 98%)', p: 0, borderRadius: '10px', height: '50px'}} className="control" direction="row">
                    <Stack width={'30%'} className="button" justifyContent={'center'} direction="row" height={'100%'} onClick={()=>handleAdding((input)=>{if(input > 0) return input-=1; else return input})}>
                        <img width={'13px'} alt="minus" src="/assets/icon-minus.svg" height={4} style={{alignSelf: 'center'}} />
                    </Stack>
                    <Stack justifyContent="center" width="40%">
                    <Typography fontFamily={'Kumbh Sans'} fontWeight={700} sx={{textAlign: 'center'}}>{total}</Typography>
                    </Stack>
                    <Stack className='button' width={'30%'} justifyContent={'center'} direction="row" onClick={()=>handleAdding((input)=>input+=1)} >
                        <img width={'13px'} alt="minus" src="/assets/icon-plus.svg" style={{alignSelf: 'center'}}/>
                    </Stack>
                </Stack>
                <Stack width={{xs: '100%', sm: '100%'}}>
                    <div className='button-add-cart' backgroundColor={'#929395'} elevation={3} style={{width: '100%'}}>
                        <Stack justifyContent="center" color={'white'} direction={"row"} onClick={handleAddNewArticle}>
                            <div className='cart-logo' />
                            <p>Add To Cart</p>
                        </Stack>
                    </div>
                </Stack>
                
            </Stack>
          </Stack>
          {showError && <Typography variant='subtitle2' sx={{fontFamily: 'Kumbh Sans', color: 'red', p: 0}}><b>Total has to be greater than zero!</b></Typography>}
          <br />
           <br />
      </Stack>
  </Stack>
  </Stack>
  );
}

export default Article;
