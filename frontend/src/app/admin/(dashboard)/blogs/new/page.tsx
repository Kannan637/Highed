'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '../../../components/common/PageHeader';
import { BlogForm } from '../../../components/blogs/BlogForm';
import { useBlogs } from '../../../hooks/useBlogs';
import { CreateBlogInput } from '../../../types/blog';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NewBlogPage() {
  const router = useRouter();
  const { createBlog } = useBlogs();
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async (data: CreateBlogInput) => {
    setIsLoading(true);
    try {
      await createBlog(data);
      router.push('/admin/blogs');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <Link href="/admin/blogs">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blogs
          </Button>
        </Link>
      </div>

      <PageHeader
        title="Create New Blog Post"
        description="Craft an SEO-friendly article for prospective study abroad students."
      />

      <BlogForm onSubmit={handleCreate} isLoading={isLoading} />
    </div>
  );
}
