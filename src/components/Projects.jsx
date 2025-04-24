import { Briefcase } from "lucide-react"
import Section from "./Section"
import Project from "./Project"

const Projects = ()=>{

  const projectList =[
    {
      title : "Social Media Dashboard",
      desc : "Created a responsive dashboard for sockal media analytics, featuring real-time data visualization and reporting",
      techUsed: ["vue.js","D3.js","Express","PostgreSql"],
    },
    {
      title : "E-commerce Platform",
      desc : "Developed a fully functional e-commerce platform with user authentication, product management, and payment integration",
      techUsed: ["React","Node.js","MongoDB","Stripe"],
    }
  ]

return <Section icon={<Briefcase />} text="Projects">
  {projectList.map(project=><Project title={project.title} desc={project.desc} techUsed={project.techUsed} />)}
</Section>

}

export default Projects;