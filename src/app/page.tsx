import { Writings } from "../components/Writings";
import { posts } from "../app/data/posts";

export default function Page() {
  return (
    <div className="page-transition p-4 sm:p-0 w-full sm:w-155 text-white">
      <div className="w-full mx-auto">
        <div className="mt-40 flex justify-center flex-col">
          <div className="flex justify-center flex-col gap-2">
            <h1 className="text-2xl font-bold">Why is it easier with you?</h1>
            <p className="text-sm text-secondary md:text-base sm:text-base">
              Why does being with you bring so much lightness?
            </p>
            <p className="text-sm text-secondary md:text-base sm:text-base">
              written by{" "}
              <span className="text-white underline">kaio kinoshita</span>.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-20 mb-15">
          <hr className="w-50 border-white"></hr>
        </div>
      </div>
      {posts.map((post) => (
        <Writings key={post.slug} {...post} />
      ))}
    </div>
  );
}
