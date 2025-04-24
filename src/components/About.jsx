import {User} from 'lucide-react'
import Section from './Section';

const About = () =>{

  return  <Section text="About Me" icon={<User />}>
        <p className='m-1 mx-3'>
        As a passionate and dedicated software developer, I spent two years as a Java Developer (2021-2023), where I gained hands-on experience in building and maintaining robust back-end systems. During this time, I honed my technical expertise and problem-solving skills, working on complex applications and collaborating with cross-functional teams.
        </p>
        <p className='m-1 mx-3'>
        In pursuit of broadening my skill set and staying ahead of industry trends, I took the initiative to develop proficiency in front-end technologies like React.js, JavaScript, HTML, and CSS. This allowed me to expand my capabilities and become more versatile in creating full-stack applications.
        </p>
        <p className='m-1 mx-3'>
        In addition to my professional experience, I recently qualified for the GATE 2025 exam, showcasing my commitment to further academic and technical growth. I am actively seeking new opportunities where I can combine my back-end Java expertise with my front-end skills to contribute to dynamic projects and continuous learning.
        </p>
    </Section>;

}

export default About;