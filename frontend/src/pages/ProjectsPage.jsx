import React from 'react';
import RetroProjects from '../components/RetroProjects';
import Blog from '../components/Blog';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <RetroProjects />
      <Blog />
    </div>
  );
};

export default ProjectsPage;