"use client";

import React from "react";
import ThumbnailCard from "@/components/core/card/ThumbnailCard";
import BlogImage from "@public/assets/images/blog-post-1.png";
import Button from "@/components/core/Button";

const blogPosts = [
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
  {
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    href: "#",
    imageSrc: BlogImage,
    date: "June 20",
  },
];

export default function BlogGridSection() {
  const paginationSize = 12;
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(blogPosts.length / paginationSize);
  const startIndex = (currentPage - 1) * paginationSize;
  const blogPostsDisplay = blogPosts.slice(
    startIndex,
    startIndex + paginationSize,
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(Math.max(1, Math.min(totalPages, newPage)));
  };

  return (
    <section>
      <div className="container">
        {/* Wrapper */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogPostsDisplay.map((post, index) => (
            <ThumbnailCard
              key={index}
              title={post.title}
              description={post.description}
              href={post.href}
              imageSrc={post.imageSrc}
              date={post.date}
            />
          ))}
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <Button
              size="none"
              variant="primary"
              className="grid h-10 place-items-center rounded-md px-4"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <Button
                  size="none"
                  variant={currentPage === pageNum ? "primary" : "ghost"}
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className="grid h-10 w-10 place-items-center rounded-md"
                >
                  {pageNum}
                </Button>
              ),
            )}

            <Button
              size="none"
              variant="primary"
              className="grid h-10 place-items-center rounded-md px-4"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
