import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />{" "}
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis omnis
        optio odit nihil rem laboriosam consequatur nemo dolor dolorum velit a
        impedit eius, voluptates obcaecati reiciendis corrupti vitae quod nulla.
      </p>

      {/* Feed */}
      <Feed />
    </section>
  );
};

export default Home;
