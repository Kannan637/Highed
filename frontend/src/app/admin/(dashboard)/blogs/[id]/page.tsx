'use client';

import React, { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '../../../components/common/PageHeader';
import { BlogForm } from '../../../components/blogs/BlogForm';
import { apiGetBlogById, apiUpdateBlog, apiDeleteBlog } from '../../../lib/api/blogs';
import { AdminBlog, CreateBlogInput } from '../../../types/blog';
import { LoadingState } from '../../../components/common/LoadingState';
import { Button } from '../../../components/ui/button';
import { ArrowLeft, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const [blog, setBlog] = useState<AdminBlog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      const res = await apiGetBlogById(id);
      if (res.success && res.data) {
        setBlog(res.data);
      } else {
        setBlog({
          id,
          title: 'Top 10 Scholarships for Indian Students in UK for 2026',
          slug: 'top-10-scholarships-uk-2026',
          excerpt:
            'A detailed review of prestigious scholarship opportunities for undergraduate and postgraduate study in the UK.',
          content: 'Here is the comprehensive scholarship guide details...',
          category: 'Scholarships',
          tags: ['UK', 'Scholarship', 'Postgrad'],
          status: 'published',
          author: { id: 'usr-1', name: 'Editorial Team' },
          seo: {
            metaTitle: 'Top 10 UK Scholarships for Indian Students 2026',
            metaDescription: 'Complete list of full-fee and partial UK scholarships.',
          },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }
      setIsLoading(false);
    }
    load();
  }, [id]);

  const handleUpdate = async (data: CreateBlogInput) => {
    setIsSaving(true);
    try {
      await apiUpdateBlog(id, data);
      router.push('/admin/blogs');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      await apiDeleteBlog(id);
      router.push('/admin/blogs');
    }
  };

  if (isLoading || !blog) {
    return <LoadingState message="Loading blog post..." />;
  }

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
        title={blog.title}
        description={`Blog ID: ${blog.id}`}
        actions={
          <Button variant="ghost" size="sm" className="text-rose-600 hover:text-rose-700" onClick={handleDelete}>
            <Trash2 className="h-4 w-4 mr-1" /> Delete
          </Button>
        }
      />

      <BlogForm initialData={blog} onSubmit={handleUpdate} isLoading={isSaving} />
    </div>
  );
}
