'use client';

import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { BlogTable } from '../../components/blogs/BlogTable';
import { useBlogs } from '../../hooks/useBlogs';
import { Button } from '../../components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function BlogsPage() {
  const { blogs, isLoading } = useBlogs();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Blogs & Study Guides"
        description="Publish university guides, visa procedure walkthroughs, and scholarship articles."
        actions={
          <Link href="/admin/blogs/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" /> Write Article
            </Button>
          </Link>
        }
      />

      <BlogTable blogs={blogs} isLoading={isLoading} />
    </div>
  );
}
