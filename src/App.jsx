import React, { Suspense, useState, useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";
import Navbar from "./components/Navbar";
import About from "./components/About";
// import Downloads from "./components/Downloads";
import Footer from "./components/Footer";
import Project from "./components/Project";
// import DownloadDescription from "./components/DowloadDescription";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ResumeButton from "./components/ResumeButton";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="mx-auto">
          <Navbar />
          <ResumeButton />
          <div className="container mx-auto px-4 lg:px-8">
            <section id="about">
              <About />
            </section>


            <section id="projects">
              <div className="max-w-7xl mx-auto px-4 py-8 bg-white">
                <h2 className="text-3xl font-bold mb-2">Projects</h2>
                <Project
                  title="Blooming Filter"
                  techStack="JavaScript, HTML"
                  githubLink="https://github.com/Khushalmishra11/Bloom_Filter.git"
                />
                <Project
                  title="Internshala Automation"
                  techStack="Puppetor, JavaScript"
                  githubLink="https://github.com/Khushalmishra11/Internshala_automation.git"
                  />
                <Project
                  title="This Portfolio!"
                  techStack="React.js, Tailwind CSS"
                  githubLink="https://github.com/Khushalmishra11/portfolio-main.git"
                />
              </div>
            </section>

            <section id="work">
              <div className="max-w-7xl mx-auto px-4 py-8 bg-white">
                <h2 className="text-3xl font-bold mb-2">Academic Work Experience</h2>
                <Work
                  title="Team Member"
                  company="DIT X Microsoft"
                  time="2023 - Present"
                />
                <Work
                  title="Core Member"
                  company="Core Team, DIT"
                  time="2023 "
                />
              </div>
            </section>

            <section id="contact">
              <Contact />
            </section>
          </div>
          <Footer />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
