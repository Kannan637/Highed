'use client';

import React from 'react';
import Link from 'next/link';
import { AdminBlog } from '../../types/blog';
import { DataTable, Column } from '../common/DataTable';
import { BlogStatusBadge } from './BlogStatusBadge';
import { formatDate } from '../../lib/utils';
import { Eye, Edit2 } from 'lucide-react';
import { Button } from '../ui/button';

interface BlogTableProps {
  blogs: AdminBlog[];
  isLoading: boolean;
}

export function BlogTable({ blogs, isLoading }: BlogTableProps) {
  const columns: Column<AdminBlog>[] = [
    {
      header: 'Title',
      cell: (blog) => (
        <div>
          <Link
            href={`/admin/blogs/${blog.id}`}
            className="font-semibold text-sm text-slate-900 hover:text-indigo-600"
          >
            {blog.title}
          </Link>
          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{blog.excerpt}</p>
        </div>
      ),
    },
    {
      header: 'Category',
      cell: (blog) => (
        <span className="text-sm font-medium text-slate-700">
          {blog.category}
        </span>
      ),
    },
    {
      header: 'Status',
      cell: (blog) => <BlogStatusBadge status={blog.status} />,
    },
    {
      header: 'Author',
      cell: (blog) => (
        <span className="text-sm text-slate-600">{blog.author?.name || 'Admin'}</span>
      ),
    },
    {
      header: 'Published',
      cell: (blog) => (
        <span className="text-sm text-slate-500">{formatDate(blog.publishedAt || blog.createdAt)}</span>
      ),
    },
    {
      header: 'Actions',
      cell: (blog) => (
        <div className="flex items-center gap-2">
          <Link href={`/admin/blogs/${blog.id}`}>
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4 mr-1" /> Edit
            </Button>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={blogs}
      isLoading={isLoading}
      emptyTitle="No blog posts found"
      emptyDescription="Create informative study abroad guides and articles."
    />
  );
}
