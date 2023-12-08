import React from 'react';

function About() {
  return (
    <section className='py-12 grid grid-cols-3 gap-6'>
      <div
        className={`w-full h-full rounded-3xl bg-cover bg-center bg-[url('/about.jpg')] flex flex-col p-12 items-center justify-center bg-no-repeat`}
      />
      <div className='col-span-2'>
        <h1 className='font-bold text-4xl'>About</h1>
        <p className='my-2'>
          Hi! My name is Red. I am an AWS Certified, Full Stack Software Engineer currently based in
          Spokane, WA. From web and mobile frontends to RESTful APIs and serverless backends, I am
          experienced in a magnitude of development languages, tools, and processes! And I love what
          I do.
        </p>
        <div className='p-2 border rounded text-xs my-4'>
          <h1 className='text-lg font-bold'>AWS Associate Developer</h1>
          <p> Issued Apr 2023</p>
          <p> Expires Apr 2026</p>
          <p> Credential ID 4Y18RZF172E1QSG9</p>
        </div>
        <h2 className='font-bold text-2xl mb-2'>Some of the things I know</h2>
        <div className='grid grid-cols-4'>
          <ul className='list-disc'>
            <h3 className='font-bold text-lg '>Languages</h3>
            <li className='mx-4'>JavaScript</li>
            <li className='mx-4'>TypeScript</li>
            <li className='mx-4'>Java</li>
            <li className='mx-4'>HTML</li>
            <li className='mx-4'>CSS</li>
            <li className='mx-4'>PHP</li>
            <li className='mx-4'>GraphQL</li>
            <li className='mx-4'>SQL</li>
            <li className='mx-4'>NoSQL</li>
            <li className='mx-4'>...and more</li>
          </ul>
          <ul className='list-disc'>
            <h3 className='font-bold text-lg'>Tools</h3>
            <li className='mx-4'>React</li>
            <li className='mx-4'>React Native</li>
            <li className='mx-4'>Redux</li>
            <li className='mx-4'>Tailwind</li>
            <li className='mx-4'>GraphQL</li>
            <li className='mx-4'>Spring Boot</li>
            <li className='mx-4'>Express.js</li>
            <li className='mx-4'>MySQL</li>
            <li className='mx-4'>PostgreSQL</li>
            <li className='mx-4'>...and more</li>
          </ul>
          <ul className='list-disc'>
            <h3 className='font-bold text-lg'>AWS</h3>
            <li className='mx-4'>DynamoDB</li>
            <li className='mx-4'>API Gateway</li>
            <li className='mx-4'>S3</li>
            <li className='mx-4'>Lambda</li>
            <li className='mx-4'>EC2</li>
            <li className='mx-4'>Cognito</li>
            <li className='mx-4'>CloudFormation</li>
            <li className='mx-4'>CodePipeline</li>
            <li className='mx-4'>SAM</li>
            <li className='mx-4'>...and more</li>
          </ul>
          <ul className='list-disc'>
            <h3 className='font-bold text-lg '>Testing</h3>
            <li className='mx-4'>Jest</li>
            <li className='mx-4'>JUnit</li>
            <li className='mx-4'>Vitest</li>
            <li className='mx-4'>Enzyme</li>
            <li className='mx-4'>React Testing Library</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;