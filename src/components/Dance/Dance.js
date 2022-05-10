import React from 'react'
import './Dance.css'
import MainImage from '../../assets/Dance/Main.png'
import FirstSectionImage from '../../assets/Dance/Section-1.png'
import SecondSectionImage from '../../assets/Dance/Section-2.png'
import ThirdSectionImage from '../../assets/Dance/Section-3.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { nanoid } from 'nanoid'

const Dance = () => {

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
            <div className='dance-club-title-box'>
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
        <main className='dance-club-main'>
            <div className='sub-club-title'>
                {splitColors('Dance Club')}
            </div>
            <div className='sub-club-main-image'>
                <img src={MainImage} className='sub-club-image main-image-adjustments' alt='SubClubMainImage' />
            </div>
        </main>
    )

    // Can add sections below just by creating an object inside the subClub array literal(template has been given as a comment inside the array)
    const subClub = [
      {
          header: 'Capturing the beauty in each step',
          content: 'We aim to liven every stage we step on.  Express the hidden language of your soul through every performance.',
          img: FirstSectionImage
      },
      {
          header: '',
          content: '',
          img: SecondSectionImage
      },
      {
          header: 'Give yourself up to music',
          content: 'Set your spirit free with our performances. Let your feet capture each moment in its entirety. Join hands to enjoy exciting events and deliver a performance of a life time!',
          img: ThirdSectionImage
      }
      // {
      //     header:'',
      //     content:'',
      //     img:''
      // }...
    ]

    const subClubElements = subClub.map((block, index) => (
        <section className='dance-club-block' key={nanoid()}>
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

export default Dance
