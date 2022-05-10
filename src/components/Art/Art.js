import React from 'react'
import './Art.css'
import MainImage from '../../assets/Art/Main.jpg'
import FirstSectionImage from '../../assets/Art/Section-1.jpg'
import SecondSectionImage from '../../assets/Art/Section-2.jpg'
import ThirdSectionImage from '../../assets/Art/Section-3.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { nanoid } from 'nanoid'

const Art = () => {

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
		 <div className='art-club-title-box'>
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
        <main className='art-club-main'>
            <div className='sub-club-title'>
                {splitColors('Art Club')}
            </div>
            <div className='sub-club-main-image'>
                <img src={MainImage} className='sub-club-image main-image-adjustments' alt='SubClubMainImage' />
            </div>
        </main>
    )

    // Can add sections below just by creating an object inside the subClub array literal(template has been given as a comment inside the array)
    const subClub = [
        {
            header: 'Give life to the world you desire',
            content: 'We capture the heart\'s expressions.Let yourself wander in the endless realm of your imagination.Help design and create all the aspects in an event.',
            img: FirstSectionImage
        },
        {
            header: '',
            content: '',
            img: SecondSectionImage
        },
        {
            header: 'Creating art that touches hearts',
            content: 'We aim to create art in its truest form.    Spark emotions through the strokes of your brush and let your     heart connect with art in its entirety.Give life to all your c    reations by joining us on our journey.',
            img: ThirdSectionImage
        }
        // {
        //     header:'',
        //     content:'',
        //     img:''
        // }...
    ]

    const subClubElements = subClub.map((block, index) => (
        <section className='art-club-block' key={nanoid()}>
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

export default Art
