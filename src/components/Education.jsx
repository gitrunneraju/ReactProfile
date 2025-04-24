import { BookOpen } from "lucide-react"
import Section from "./Section"
import Graduation from "./Graduation";

const Education = ()=>{

return <Section icon={<BookOpen />} text="Education">
  <Graduation title="Bachelor of Technology in Computer" school="MIT Academy Of Engineering, Alandi" year="2017-2021" />
  <Graduation title="Coding ninjas Java Course" school="Coding Ninjas" year="2022" />
  </Section>

}

export default Education;