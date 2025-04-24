import { Github, Globe, Linkedin, Twitter } from "lucide-react"
import Section from "./Section"
import IconLinks from "./IconLinks";

const Contact = ()=>{

  const obj = [{'name':<Linkedin />,'text':'LinkedIn'},
    {"name":<Github />,'text':'GitHub'},{'name':<Twitter /> ,'text':'twitter'},
  ]

return <Section icon={<Globe />} text="Contact & Social Media">
  <p className="text-gray-700">Email: adityajujalambkar@gmail.com</p>
  <p className="text-gray-700">Phone: +91 7248906207</p><br />
  {obj.map(o=><IconLinks icon={o.name} text={o.text}/>)}
  
</Section>

}

export default Contact;