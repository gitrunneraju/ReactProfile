import { Briefcase } from "lucide-react"
import Section from "./Section"
import { Code } from 'lucide-react';
import Pill from "./Pill";


const Skills = ()=>{

  const list = ['JavaSctipt', 'HTML', 'CSS', 'React','Nodejs','Java'];

return <Section icon={<Code />} text="Skills">
   {list.map( item => <Pill title={item} />)}
</Section>

}

export default Skills;