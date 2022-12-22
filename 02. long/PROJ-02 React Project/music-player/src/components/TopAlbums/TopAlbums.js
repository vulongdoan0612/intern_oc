import Slider from "react-slick";
import {Link} from 'react-router-dom';

import '../../assets/css/Main.css';
import {SlideAlbums} from './TopAlbums-styled'

import ab1 from "../../assets/album-cover/ab1.jpg"
import ab2 from "../../assets/album-cover/ab2.jpg"
import ab3 from "../../assets/album-cover/ab3.jpg"
import ab4 from "../../assets/album-cover/ab4.jpg"
import ab5 from "../../assets/album-cover/ab5.jpg"
import ab6 from "../../assets/album-cover/ab6.jpg"

const topAlbums = [
    {
        name: 'Album 1',
        artist: 'Artist 1',
        image: ab1,
    },
    {
        name: 'Album 2',
        artist: 'Artist 2',
        image: ab2,
    },
    {
        name: 'Album 3',
        artist: 'Artist 3',
        image: ab3,
    },
    {
        name: 'Album 4',
        artist: 'Artist 4',
        image: ab4,
    },
    {
        name: 'Album 5',
        artist: 'Artist 5',
        image: ab5,
    },
    {
        name: 'Album 6',
        artist: 'Artist 6',
        image: ab6,
    },
]

const TopAlbums=()=> {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    return (
        <SlideAlbums>
            <div className="topTitle">Featured albums</div>
            <Slider {...settings}>
                {topAlbums.map((item, index)=>(
                    <Album prop={item} index={index} image={item.image} artist={item.artist} name={item.name}/>
                ))}
            </Slider>
        </SlideAlbums>
    )
}

const Album=({image, name, artist})=>{
    return (
        <div className="abItem">
            <Link to="/">
                <div className="abCover"><img src={image}></img></div>
                <div className="abName">{name}</div>
                <div className="abArtist">{artist}</div>
            </Link>
        </div>
    )
}

export default TopAlbums