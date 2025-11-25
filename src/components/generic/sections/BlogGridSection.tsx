"use client";

import React from "react";
import ThumbnailCard from "@/components/core/card/ThumbnailCard";
import Button from "@/components/core/Button";
import { blogPosts } from "@/lib/data";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-16 xl:grid-cols-4">
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
              className="grid h-10 w-10 place-items-center rounded-md"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <MdOutlineKeyboardDoubleArrowLeft className="text-2xl" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <Button
                  size="none"
                  variant={currentPage === pageNum ? "primary" : "ghost"}
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`grid h-10 w-10 place-items-center rounded-md ${currentPage === pageNum && "pointer-events-none"}`}
                >
                  {pageNum}
                </Button>
              ),
            )}

            <Button
              size="none"
              variant="primary"
              className="grid h-10 w-10 place-items-center rounded-md"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <MdOutlineKeyboardDoubleArrowRight className="text-2xl" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
