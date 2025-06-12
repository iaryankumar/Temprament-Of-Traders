import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Overview from '../components/Overview'
import Playlist from '../components/Playlist'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

const Home = () => {
    const heroScroll = useRef()
    const AboutScroll = useRef()
    const PlaylistScroll = useRef()
    const ReviewsScroll = useRef()
    const hero = () => {
        if (heroScroll.current) {
            heroScroll.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    const about = () => {
        if (AboutScroll.current) {
            AboutScroll.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    const playlist = () => {
        if (PlaylistScroll.current) {
            PlaylistScroll.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    const reviews = () => {
        if (ReviewsScroll.current) {
            ReviewsScroll.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <>
            {/* Navbar */}
            <Navbar hero={hero} about={about} playlist={playlist} reviews={reviews} />
            {/* Navbar */}

            <div ref={heroScroll}>
                <Hero />
            </div>

            <div ref={AboutScroll}>
                <Overview />
            </div>

            <div ref={PlaylistScroll}>
                <Playlist />
            </div>

            <div ref={ReviewsScroll}>
                <Reviews />
            </div>

            {/* Footer */}
            <Footer />
            {/* Footer */}
        </>
    )
}

export default Home
