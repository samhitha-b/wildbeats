import React from 'react'
import './Drama.css'
import MainImage from '../../assets/Drama/Section-1.jpg'
import FirstSectionImage from '../../assets/Drama/Section-2.png'
import SecondSectionImage from '../../assets/Drama/Section-3.jpg'
/*import ThirdSectionImage from '../../assets/Music/Section-3.png'*/
import Aos from 'aos'
import 'aos/dist/aos.css'
import { nanoid } from 'nanoid'

const Drama = () => {

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
            <div className='sub-club-title-box'>
            <article className='sub-club-title-wrapper'>
                <div className='first-half-color'>
                    {word.slice(0, halfLength)}
                </div>
                <div className='second-half-color'>
                    {word.slice(halfLength)}
                </div>
            </article>
            </div>
        )
    }

    // The main block(the top one)
    const mainBlock = (
        <main className='sub-club-main'>
            <div className='sub-club-title'>
                {splitColors('Drama Club')}
            </div>
            <div className='sub-club-main-image'>
                <img src={MainImage} className='sub-club-image main-image-adjustments' alt='SubClubMainImage' />
            </div>
        </main>
    )

    // Can add sections below just by creating an object inside the subClub array literal(template has been given as a comment inside the array)
    const subClub = [
        {
            header: 'Build new worlds',
            content: 'Bring out the stories hidden inside you. Organise and piece together stories that you love and capture every emotion in each line.',
            img: FirstSectionImage
        },
        {
            header: 'Bringing your stories to life',
            content: 'We aim to bring life to each script the way the writers intended. Take the viewers on a rollercoaster of emoions as you bring each word to life.',
            img: SecondSectionImage
        },
       /* {
            header: '',
            content: '',
            img: ThirdSectionImage
        }*/
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
            {mainBlock}
            {subClubElements}
        </div>
    )
}

export default Drama
