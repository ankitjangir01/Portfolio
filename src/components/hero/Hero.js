import React, { useState } from 'react'
import hero from './../../assets/hero.png'
import IDECard from './IDECard.js'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Skills from './Skills'
import './../../index.css'
import Education from '../Education'
import { Alert } from '@material-tailwind/react'
import linkedinIcon from './../../assets/linkedin.svg'
import xIcon from './../../assets/x.png'
import githubIcon from './../../assets/githubIcon.svg'
import Background from './Background'

const Hero = () => {
    const [desktopWarnOpen, setDesktopWarnOpen] = useState(true);

    return (
        <>
        <div className='hero'>
            <Alert color="amber" className='sm:hidden text-white absolute' open={desktopWarnOpen} onClose={() => setDesktopWarnOpen(false)}>
                view in desktop for best experience
            </Alert>
            <div className='flex h-screen'>
                <Background />
                <div className='hero-text flex-auto mx-auto items-center' style={{ 'margin': 'auto' }}>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -100
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 120,
                            originX: 0,
                            delay: 0.2,
                            duration: 1
                        }}
                        className='text-7xl font-extrabold my-auto pt-16 sm:pt-0 inline-block z-[1] relative'
                    >
                        <motion.div
                            animate={{
                                color: ['#000000', '#2e2e2e', '#000000'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity
                            }}
                        >
                            Ankit Jangir
                        </motion.div>
                    </motion.div>

                    {/* ============== IDE Card + Social Media ========================== */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 50
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 120,
                            originX: 0,
                            delay: .5,
                            duration: 1
                        }}
                    >
                        <div style={{ zIndex: 1, position: 'relative', marginTop: '16px', display: 'inline-block' }}>
                            <IDECard />
                        </div>
                        {/* social media handles======================= */}
                        <motion.div className='block h-8 mt-4'
                            initial={{
                                opacity: 0,
                                y: 50
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 120,
                                originX: 0,
                                delay: 0.7,
                                duration: 1
                            }}>
                            <motion.a href="https://www.linkedin.com/in/jangirankit" target="_blank" className='inline-block w-20 p-2'
                                animate={{
                                    y: [-6, 6, -6],
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity
                                    }
                                }}>
                                <img src={linkedinIcon} />
                            </motion.a>
                            <motion.a href="https://www.twitter.com/AnkitJangir01" target="_blank" className='inline-block w-[70px] p-2'
                                animate={{
                                    y: [-6, 6, -6],
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: 0.2
                                    }
                                }}>
                                <img src={xIcon} />
                            </motion.a>
                            <motion.a href="https://www.github.com/ankitjangir01" target="_blank" className='inline-block w-20 p-2'
                                animate={{
                                    y: [-6, 6, -6],
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: 0.4
                                    }
                                }}>
                                <img src={githubIcon} />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
                {/* <div className='hero-image flex-auto object-center'>
                    <img src={hero} style={{ 'maxHeight': '100vh', 'paddingTop': 14 }} />
                </div> */}
            </div>
        </div>
            <Education />
            <Skills />
            </>
    )
}

export default Hero