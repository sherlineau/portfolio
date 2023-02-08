import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import "../assets/css/Projects.css";
import Title from "./Title";

const FeaturedProjects = () => {
  const data = useStaticQuery(
    graphql`
      {
        featured: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/content/featured/" } }
          sort: { fields: [frontmatter___date], order: ASC }
        ) {
          edges {
            node {
              frontmatter {
                date
                external
                github
                tech
                title
                featuredImage {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              html
            }
          }
        }
      }
    `
  );

  const featuredProjects = data.featured.edges.filter(({ node }) => node);

  return (
    <div className="section" id="projects">
      <Title title="Featured Projects" />
      <div className="section-center">
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, github, tech, title, featuredImage } =
              frontmatter;
            const image = getImage(featuredImage);

            return (
              <div className="project" key={i}>
                <GatsbyImage image={image} alt={title} className="project-img"/>
                <div className="project-info">
                  <span className="project-number">0{i + 1}</span>
                  <h3>{title}</h3>
                  <div
                    className="project-description"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                  <div className="project-stack">
                    {tech.length &&
                      tech.map((tech, i) => <span key={i}>{tech}</span>)}
                  </div>
                  <div className="project-links">
                    {github ? (
                      <a href={github} target="_blank" rel="noreferrer">
                        <FaGithubSquare className="project-icon" />
                      </a>
                    ) : (
                      ""
                    )}
                    {external ? (
                      <a href={external} target="_blank" rel="noreferrer">
                        <FaShareSquare className="project-icon" />
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FeaturedProjects;
