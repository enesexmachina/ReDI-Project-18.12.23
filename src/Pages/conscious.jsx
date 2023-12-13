
import './conscious.css'

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';



function conscious() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <div className='main-divi' >
        <img className='gallery-pic' src='./public/img/BENZ.JPG' ></img>
        <Button onClick={handleOpen}>View</Button>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <img className='bd-gallery-pic' src='./public/img/BENZ.JPG' ></img>
        </Backdrop>
        <p className='conscious-comment' >'Dead Mans Mercedes CL 500 AMG' taken by Annonym. </p>

        <img className='gallery-pic' src='./public/img/redsky.JPG' ></img>
        <Button onClick={handleOpen}>View</Button>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <img className='bd-gallery-pic' src='./public/img/redsky.JPG' ></img>
        </Backdrop>
        <p className='conscious-comment' >'Sun Rise' taken by Annonym. </p>

        <img className='gallery-pic' src='./public/img/BW_3040.JPG' ></img>
        <Button onClick={handleOpen}>View</Button>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <img className='bd-gallery-pic' src='./public/img/BW_3040.JPG' ></img>
        </Backdrop>
        <p className='conscious-comment' >'Black&White Clouds' taken by Annonym. </p>

        <img className='gallery-pic' src='./public/img/skyline.JPG' ></img>
        <Button onClick={handleOpen}>View</Button>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <img className='bd-gallery-pic' src='./public/img/skyline.JPG' ></img>
        </Backdrop>
        <p className='conscious-comment' >'Midnight Purple Nissan Skyline R33' taken by Annonym. </p>

        <img className='gallery-pic' src='./public/img/alchemist.JPG' ></img>
        <Button onClick={handleOpen}>View</Button>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <img className='bd-gallery-pic' src='./public/img/alchemist.JPG' ></img>
        </Backdrop>
        <p className='conscious-comment' >'Unknown Sketch by Unknown Artist' taken by Annonym. </p>

        <img className='gallery-pic' src='./public/img/jumpman.png' ></img>
        <Button onClick={handleOpen}>View</Button>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <img className='bd-gallery-pic' src='./public/img/jumpman.png' ></img>
        </Backdrop>
        <p className='conscious-comment' >'Metropol Crackhead' taken by Annonym. </p>

        <img className='gallery-pic' src='./public/img/BW_3235.JPG' ></img>
        <Button onClick={handleOpen}>View</Button>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <img className='bd-gallery-pic' src='./public/img/BW_3235.JPG' ></img>
        </Backdrop>
        <p className='conscious-comment' >'Black White Brutalism' taken by Annonym. </p>
      </div>
    </div>
  )
}

export default conscious
