import { Award } from "lucide-react"
import Section from "./Section"
import List from "./List";

const Extracurricular = ()=>{

  const Extra = ["Volunteer at local coding bootcamp for underprevilaged youth", 
    "Organizer of city-wide hackathon event", "Member of university Chess club"];

return <Section icon={<Award />} text="Extracurricular Activities">
   
     <List items={Extra} />
</Section>

}

export default Extracurricular;