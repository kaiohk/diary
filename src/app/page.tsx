import { Writings } from "../components/Writings";
import { posts } from "../app/data/posts";

export default function Page() {
  return (
    <div className="w-full">
      <div className="w-150 mx-auto">
        <div className="mt-40 flex flex-col gap-4  text-white">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-2xl font-bold">Why is it easier with you?</h1>
            <p className="text-secondary">
              Why does being with you bring so much lightness?
            </p>
            <p className="text-secondary">
              written by{" "}
              <span className="text-white underline">kaio kinoshita</span>.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-20 mb-10">
          <hr className=" border-white w-50"></hr>
        </div>
      </div>
      {posts.map((post) => (
        <Writings key={post.slug} {...post} />
      ))}
    </div>
  );
}
