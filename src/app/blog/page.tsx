import Button from "@/components/core/Button";

import Heading from "@/components/core/Heading";
import BlogGridSection from "@/components/generic/sections/BlogGridSection";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function BlogPage() {
  return (
    <>
      <Heading
        title="News & Articles"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et."
        type="page"
      >
        <div className="bg-light focus-within:border-dark mx-auto flex w-full max-w-lg gap-2 rounded-full border-2 border-transparent p-1 transition-all duration-300">
          <input
            type="text"
            placeholder="Search Blogs..."
            className="w-full rounded-full px-4 py-2 outline-none"
          />
          <Button
            variant="primary"
            size="none"
            className="grid w-20 place-items-center"
          >
            <FaMagnifyingGlass className="text-2xl" />
          </Button>
        </div>
      </Heading>
      <BlogGridSection />
    </>
  );
}
