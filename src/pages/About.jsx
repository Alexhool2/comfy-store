const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          We Love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia optio
        officia eum quisquam placeat accusamus temporibus quasi deserunt a,
        dignissimos voluptates minus! Voluptates, odio consequuntur. Ab facere
        natus nobis quos adipisci, minus aperiam itaque, voluptatum sapiente
        exercitationem similique molestias ducimus.
      </p>
    </>
  );
};
export default About;
