import '../css/about.css'
import {motion, useInView} from "framer-motion"
import {useState, useEffect, useRef} from 'react';


const About = () =>{
    const viewRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 } // Adjust the threshold as needed
        );

        if (viewRef.current) {
            observer.observe(viewRef.current);
        }

        return () => {
            if (viewRef.current) {
                observer.unobserve(viewRef.current);
            }
        };
    }, []);

    return(
        <div className = 'about-container'>
         
         <motion.div
                ref = {viewRef}
                className='box'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
            >
                <h1>Biography</h1>
                <hr className='separator' />
                <p>
                    An experienced web developer and full-stack engineer, with a B.S. Degree in Computer Science.
                    Alex has developed multiple projects using JavaScript, React, and many other integrations to design beautiful websites.
                    Goal-oriented with the primary objective of making a business successful, Alex is the best developer to hire for front-end,
                    full-stack, UI/UX design, and blockchain roles. Easy to get along with, and enjoys working in teams of hard-working and industrious individuals.
                </p>
            </motion.div>
        </div>
    )
}
export default About