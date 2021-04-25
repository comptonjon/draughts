import beer_mug from '../images/beer_mug.jpg';
import { useState } from 'react';
import './LogoImage.css';

const LogoImage = ({img}) => {
    const [image, setImage] = useState(img);
    return (
        <img src={image} onError={() => setImage(beer_mug)} alt="beer-logo" className="LogoImage"/>
    )
}

export default LogoImage;