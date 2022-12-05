import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import styled from "styled-components"
import {Link} from 'react-router-dom';


import ab1 from "../assets/album-cover/ab1.jpg"
import ab2 from "../assets/album-cover/ab2.jpg"
import ab3 from "../assets/album-cover/ab3.jpg"
import ab4 from "../assets/album-cover/ab4.jpg"
import ab5 from "../assets/album-cover/ab5.jpg"
import ab6 from "../assets/album-cover/ab6.jpg"

function TopAlbums() {

    const responsive = {
        0: { items: 1 },
        568: { items: 4 },
        1024: { items: 5 },
    }

    const abItems = [
        <div className="abItem">
            <Link to="/">
                <div className="abCover"><img src={ab1}></img></div>
                <div className="abName">Memories... Do Not Open</div>
                <div className="abArtist">The Chainsmokers</div>
            </Link>
        </div>,
        <div className="abItem">
            <Link to="/">
                <div className="abCover"><img src={ab2}></img></div>
                <div className="abName">Meteora </div>
                <div className="abArtist">Linkin Park</div>
            </Link>
        </div>,
        <div className="abItem">
            <Link to="/">
                <div className="abCover"><img src={ab3}></img></div>
                <div className="abName">Mylo Xyloto</div>
                <div className="abArtist">Coldplay</div>
            </Link>
        </div>,
        <div className="abItem">
            <Link to="/">
                <div className="abCover"><img src={ab4}></img></div>
                <div className="abName">Pure Heroine</div>
                <div className="abArtist">Lorde</div>
            </Link>
        </div>,
        <div className="abItem">
            <Link to="/">
                <div className="abCover"><img src={ab5}></img></div>
                <div className="abName">X</div>
                <div className="abArtist">Ed Sherran</div>
            </Link>
        </div>,
        <div className="abItem">
        <Link to="/">
            <div className="abCover"><img src={ab6}></img></div>
            <div className="abName">Young Heath</div>
            <div className="abArtist">Birdy</div>
        </Link>
    </div>,
    ]

    return (
        <SlideAlbums>
            <div className="topTitle">Featured albums</div>

            <AliceCarousel
                mouseTracking
                items={abItems}
                responsive={responsive}
                controlsStrategy="alternate"
            />
                
          
            
        </SlideAlbums>
    )
}
const SlideAlbums = styled.div`
    .topTitle {
    font-size: 25px;
    margin-bottom: 40px
    }
    .abItem {
        display: inline-block;
    }
    .abItem .abCover {
        height: 170px;
        width: 170px;
        overflow: hidden
    }
    .abItem img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    .alice-carousel__prev-btn span, .alice-carousel__next-btn span {
        font-size: 40px !important;
    }
    .alice-carousel__dots {
        display: none
    }
    .abName {
        padding-top: 15px;
        font-size: 20px;
        color: #fff;
    }
    .abArtist {
        color: #fff;
        padding-top: 5px;
    }
`


export default TopAlbums