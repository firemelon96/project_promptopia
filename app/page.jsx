import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover and Share
        <br className='max-md:hidden' />{' '}
        <span className='orange_gradient text-center'>AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        AI Promter is a simple and user-friendly app designed to inspire your
        writing journey. Create and share custom prompts with the community,
        sparking creativity among fellow writers. Feel free to copy and use
        others' prompts, fostering a collaborative and supportive environment.
        Start your writing adventure with AI Promter today!
      </p>

      {/* Feed */}
      <Feed />
    </section>
  );
};

export default Home;
