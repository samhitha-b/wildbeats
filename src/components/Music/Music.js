import React from 'react'
import './Music.css'
import MainImage from '../../assets/Music_Club/Main.png'
import FirstSectionImage from '../../assets/Music_Club/Section-1.png'
import SecondSectionImage from '../../assets/Music_Club/Section-2.png'
import ThirdSectionImage from '../../assets/Music_Club/Section-3.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { nanoid } from 'nanoid'

const Music = () => {

    // For animation
    React.useEffect(() => {
        Aos.init(
            {
                duration: 2000,
                disable: window.innerWidth < 1200
            }
        );
    })

    // Function for splitting the title's color
    const splitColors = word => {
        const halfLength = word.length / 2;
        return (
            <article className='sub-club-title-wrapper'>
                <div className='first-half-color'>
                    {word.slice(0, halfLength)}
                </div>
                <div className='second-half-color'>
                    {word.slice(halfLength)}
                </div>
            </article>
        )
    }

    // The main block(the top one)
    const mainBlock = (
        <main className='sub-club-main'>
            <div className='sub-club-title'>
                {splitColors('Music Club')}
            </div>
            <div className='sub-club-main-image'>
                <img src={MainImage} className='sub-club-image main-image-adjustments' alt='SubClubMainImage' />
            </div>
        </main>
    )

    // Can add sections below just by creating an object inside the subClub array literal(template has been given as a comment inside the array)
    const subClub = [
        {
            header: 'Creating music you feel',
            content: 'Recreate soul touching performances from the greatest artists throughout history on your own. Capture the minds of all who listen to your performances. Join us and create dazzling performances that entice the world.',
            img: FirstSectionImage
        },
        {
            header: 'Blending melodies that soothe the soul',
            content: 'Bless the air with the sweet serene sound of your vocals by joining our club. We aim to capture the beauty of music and present it to the entie world.',
            img: SecondSectionImage
        },
        {
            header: '',
            content: '',
            img: ThirdSectionImage
        }
        // {
        //     header:'',
        //     content:'',
        //     img:''
        // }...
    ]

    const subClubElements = subClub.map((block, index) => (
        <section className='sub-club-block' key={nanoid()}>
            <article className='block-text-container'>
                <div className='block-text-wrapper'>
                    <h2 data-aos='fade-up' data-aos-duration='800' className='sub-club-header'>{block.header}</h2>
                    <div data-aos='fade-up' data-aos-duration='800' data-aos-delay='50' className='sub-club-block-content'>{block.content}</div>
                </div>
            </article>

            <div className='sub-club-block-image'>
                <img src={block.img} className='sub-club-image' data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} data-aos-duration='1200' alt={`SectionImage-${index}`} />
            </div>
        </section>
    ))

    return (
        <div className='sub-club-container'>
            <Navbar />
            {mainBlock}
            {subClubElements}
            <Footer />
        </div>
    )
}

export default Music