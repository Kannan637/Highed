'use client';

import { useState, useEffect, useCallback } from 'react';
import { AdminBlog, CreateBlogInput } from '../types/blog';
import { apiGetBlogs, apiCreateBlog, apiUpdateBlog, apiDeleteBlog } from '../lib/api/blogs';

export function useBlogs() {
  const [blogs, setBlogs] = useState<AdminBlog[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await apiGetBlogs();
      if (res.success && res.data) {
        setBlogs(res.data.items || []);
        setTotal(res.data.total || 0);
      } else {
        const mockBlogs: AdminBlog[] = [
          {
            id: 'blog-1',
            title: 'Top 10 Scholarships for Indian Students in UK for 2026',
            slug: 'top-10-scholarships-uk-2026',
            excerpt: 'Comprehensive list of Chevening, Commonwealth, and University-specific awards.',
            content: 'Full content goes here...',
            category: 'Scholarships',
            tags: ['UK', 'Scholarship', 'Postgrad'],
            status: 'published',
            author: { id: 'usr-1', name: 'HighEd Editorial Team' },
            seo: { metaTitle: 'Top 10 UK Scholarships 2026' },
            publishedAt: '2026-09-15',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            id: 'blog-2',
            title: 'Complete Guide to German Public Universities with Zero Tuition',
            slug: 'guide-to-german-public-universities',
            excerpt: 'How to apply through uni-assist, APS certificate requirements and blocked account tips.',
            content: 'Full content goes here...',
            category: 'Study Destinations',
            tags: ['Germany', 'Free Tuition', 'APS'],
            status: 'draft',
            author: { id: 'usr-1', name: 'HighEd Editorial Team' },
            seo: { metaTitle: 'Study in Germany Guide' },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        ];
        setBlogs(mockBlogs);
        setTotal(mockBlogs.length);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load blogs');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const createBlog = async (data: CreateBlogInput) => {
    const res = await apiCreateBlog(data);
    await fetchBlogs();
    return res;
  };

  const updateBlog = async (id: string, data: Partial<CreateBlogInput>) => {
    const res = await apiUpdateBlog(id, data);
    await fetchBlogs();
    return res;
  };

  const removeBlog = async (id: string) => {
    await apiDeleteBlog(id);
    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  return {
    blogs,
    total,
    isLoading,
    error,
    refresh: fetchBlogs,
    createBlog,
    updateBlog,
    removeBlog,
  };
}
