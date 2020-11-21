import PROJECT_DATA from "../Components/Project/ProjectData";
import Layout from "../Components/Layout";
const Projects = () => {
  return (
    <Layout>
      {PROJECT_DATA.map((project) => (
        <div>{project.name}</div>
      ))}
    </Layout>
  );
};

export default Projects;
