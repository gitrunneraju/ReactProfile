import { Heart } from "lucide-react"
import Section from "./Section"
import List from "./List";

const Hobbies = ()=>{

  const Hobbies = ["Photography", "Hiking", "Playing guitar", "Reading sci-fi Novels"];

return <Section icon={<Heart />} text="Hobbies & Interests">
  <List items={Hobbies} />
</Section>

}

export default Hobbies;