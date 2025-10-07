import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { data } from "autoprefixer";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1 },
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          pitch your startup, <br /> connect with entrepreneurs
        </h1>
        <p className="!max-w-3xl sub-heading">
          Submit Ideas, Vote on Pitches, Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search result for ${query}` : "All projects"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => {
              return <StartupCard key={post?._id} post={post} />;
            })
          ) : (
            <p className="no-results">No results for this search</p>
          )}
        </ul>
      </section>
    </>
  );
}
