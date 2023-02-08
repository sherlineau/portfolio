import * as React from "react";
import Layout from "../components/layout";
import FeaturedProjects from "../components/FeaturedProjects";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";


const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <FeaturedProjects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>sherlineau</title>;
