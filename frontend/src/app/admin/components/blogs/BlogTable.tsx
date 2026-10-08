'use client';

import React from 'react';
import Link from 'next/link';
import { AdminBlog } from '../../types/blog';
import { DataTable, Column } from '../common/DataTable';
import { BlogStatusBadge } from './BlogStatusBadge';
import { formatDate } from '../../lib/utils';
import { Edit2, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';

interface BlogTableProps {
  blogs: AdminBlog[];
  isLoading: boolean;
}

export function BlogTable({ blogs, isLoading }: BlogTableProps) {
  const columns: Column<AdminBlog>[] = [
    {
      header: 'Article Title & Excerpt',
      cell: (blog) => (
        <div>
          <Link
            href={`/admin/blogs/${blog.id}`}
            className="font-bold text-sm text-slate-900 hover:text-[#25347B] transition-colors inline-flex items-center gap-1"
          >
            {blog.title}
            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{blog.excerpt}</p>
        </div>
      ),
    },
    {
      header: 'Category',
      cell: (blog) => (
        <span className="inline-flex items-center text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200/80 px-2 py-0.5 rounded">
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
        <span className="text-xs font-medium text-slate-600">{blog.author?.name || 'Editorial Team'}</span>
      ),
    },
    {
      header: 'Published Date',
      cell: (blog) => (
        <span className="text-xs font-mono text-slate-500">
          {formatDate(blog.publishedAt || blog.createdAt)}
        </span>
      ),
    },
    {
      header: 'Actions',
      cell: (blog) => (
        <Link href={`/admin/blogs/${blog.id}`}>
          <Button variant="outline" size="sm" className="h-7.5 px-2.5 text-xs font-semibold text-slate-700 hover:text-[#25347B] hover:border-[#25347B]">
            <Edit2 className="h-3.5 w-3.5 mr-1" /> Edit
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={blogs}
      isLoading={isLoading}
      emptyTitle="No articles found"
      emptyDescription="Create your first study guide or university admissions blog."
    />
  );
}
