import './conscious.css';

import React, { useState } from 'react';

import Button from '@mui/material/Button';
import { Modal } from '@mui/material';

function Conscious() {
  const [open, setOpen] = useState(false);
  const [detailPicture, setDetailPicture] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (picture) => {
    setDetailPicture(picture);
    setOpen(true);
  };

  return (
    <div>
      <div className="main-divi">
        <img className="gallery-pic" src="./public/img/BENZ.JPG" alt="Benz" />
        <Button onClick={() => handleOpen('./public/img/BENZ.JPG')}>View</Button>

        <p className="conscious-comment">'Dead Mans Mercedes CL 500 AMG' taken by Annonym.</p>

        <img className="gallery-pic" src="./public/img/redsky.JPG" alt="Red Sky" />
        <Button onClick={() => handleOpen('./public/img/redsky.JPG')}>View</Button>

        <p className="conscious-comment">'Sun Rise' taken by Annonym.</p>

        <img className="gallery-pic" src="./public/img/alchemist.JPG" alt="Red Sky" />
        <Button onClick={() => handleOpen('./public/img/alchemist.JPG')}>View</Button>

        <p className="conscious-comment">'Alchemist' taken by Annonym.</p>

        <img className="gallery-pic" src="./public/img/BW_3040.JPG" alt="Red Sky" />
        <Button onClick={() => handleOpen('./public/img/BW_3040.JPG')}>View</Button>

        <p className="conscious-comment">'Black & White mini Brutalism' taken by Annonym.</p>

        <img className="gallery-pic" src="./public/img/FISHEYE.JPG" alt="Red Sky" />
        <Button onClick={() => handleOpen('./public/img/FISHEYE.JPG')}>View</Button>

        <p className="conscious-comment">'FISCH EYE' taken by Annonym.</p>

        <img className="gallery-pic" src="./public/img/FLOOR.JPG" alt="Red Sky" />
        <Button onClick={() => handleOpen('./public/img/FLOOR.JPG')}>View</Button>

        <p className="conscious-comment">'Hearth King' taken by Annonym.</p>

        <img className="gallery-pic" src="./public/img/skyline.JPG" alt="Red Sky" />
        <Button onClick={() => handleOpen('./public/img/skyline.JPG')}>View</Button>

        <p className="conscious-comment">'Nissan Skyline r33 GTR' taken by Annonym.</p>


      </div>
      <Modal open={open} onClose={handleClose} style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={detailPicture} alt="Detail" />
      </Modal>
    </div>
  );
}

export default Conscious;
