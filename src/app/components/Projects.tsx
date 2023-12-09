'use client';
import Image from 'next/image';
import React, { useState } from 'react';

function Projects() {
  const projects = [
    {
      name: 'Avista Digital Exchange',
      description: 'A service used to capture and visualize microgrid simulation data.',
      technologies:
        'React, TypeScript, Vite, Apollo GraphQL, TailwindCSS, Apache E-Charts, Vitest, RTL',
      image: '/img/dxdc.webp',
      size: 600
    },
    {
      name: 'Avista Supplier Diversity',
      description: 'A serverless social media application for web and mobile.',
      technologies: 'React, TypeScript, Vite, Apollo GraphQL, TailwindCSS, Vitest, RTL',
      image: '/img/supplierdiversity.png',
      size: 400
    },
    {
      name: 'Perfect Personnel Placement',
      description: 'A mobile, serverless training planner app.',
      technologies: 'React, React Native, TypeScript, Redux, AWS',
      image: '/img/p3.jpg',
      size: 220
    }
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section className='py-12 grid lg:grid-cols-3 grid-cols-1  gap-12'>
      <div className='rounded-3xl col-span-1 lg:col-span-2  h-[450px] lg:h-[512px] w-full p-6 lg:p-0 relative flex items-center justify-center'>
        <video
          autoPlay
          muted
          loop
          className='absolute z-[-1] overflow-hidden h-full w-full rounded-3xl object-cover'>
          <source src='./projectbg.mp4' type='video/webm' />
        </video>
        <div>
          <Image
            src={selectedProject.image}
            alt={`A screenshot of the ${selectedProject.name} project.`}
            width={selectedProject.size}
            height={selectedProject.size}
            className='rounded-3xl'
          />
        </div>
      </div>
      <div className='flex flex-col  w-full'>
        <h1 className='font-bold text-5xl lg:text-6xl'>Projects</h1>
        <ul className='m-4 list-disc'>
          <li
            className={`${
              selectedProject.name === 'Avista Digital Exchange' ? 'font-bold' : 'font-normal'
            }  `}>
            <button onClick={() => setSelectedProject(projects[0])}>Avista Digital Exchange</button>
          </li>
          <li
            className={`${
              selectedProject.name === 'Avista Supplier Diversity' ? 'font-bold' : 'font-normal'
            } `}>
            <button onClick={() => setSelectedProject(projects[1])}>
              Avista Supplier Diversity
            </button>
          </li>
          <li
            className={`${
              selectedProject.name === 'Perfect Personnel Placement' ? 'font-bold' : 'font-normal'
            } `}>
            <button onClick={() => setSelectedProject(projects[2])}>
              Perfect Personnel Placement
            </button>
          </li>
        </ul>
        <div className='my-4 flex-1 flex flex-col'>
          <h2 className='font-bold text-3xl lg:text-4xl'>{selectedProject.name}</h2>
          <p className='py-2'>{selectedProject.description}</p>
          <p className='text-xs py-2'>Technologies: {selectedProject.technologies}</p>
          <a href='https://github.com/redoral' target='_blank' className='underline text-sm'>
            View my GitHub repositories
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
