import { PROJECT_DATA } from "../Components/Project/ProjectData";
import Layout from "../Components/Layout";
import styled from "styled-components";
const Projects = () => {
  return (
    <Layout title="Projects" text="Projects">
      <h1>Projects</h1>
      <p>Some things I've built</p>
      <Project>
        {PROJECT_DATA.map((project) => (
          <>
            <div className="projectCard" key={project.id}>
              <h4 key={project.id}>{project.name}</h4>
            </div>
          </>
        ))}
      </Project>
    </Layout>
  );
};

const Project = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 10rem;
  flex-flow: row nowrap;
  margin-top: 10rem;
  .projectCard {
    border: 2px solid black;
    border-radius: 10px;

    .projectImg {
      width: 100%;
    }
  }
`;
export default Projects;
