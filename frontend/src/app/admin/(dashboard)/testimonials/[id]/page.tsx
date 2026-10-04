'use client';

import React, { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '../../../components/common/PageHeader';
import { TestimonialForm } from '../../../components/testimonials/TestimonialForm';
import {
  apiGetTestimonialById,
  apiUpdateTestimonial,
  apiDeleteTestimonial,
} from '../../../lib/api/testimonials';
import { AdminTestimonial, CreateTestimonialInput } from '../../../types/testimonial';
import { LoadingState } from '../../../components/common/LoadingState';
import { Button } from '../../../components/ui/button';
import { ArrowLeft, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function TestimonialDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const [testimonial, setTestimonial] = useState<AdminTestimonial | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      const res = await apiGetTestimonialById(id);
      if (res.success && res.data) {
        setTestimonial(res.data);
      } else {
        setTestimonial({
          id,
          studentName: 'Sanjay Kumar',
          course: 'MSc Computer Science',
          university: 'University of Manchester',
          country: 'UK',
          rating: 5,
          review:
            'HighEd made my dream of studying in the UK a reality. Their counselors handled my visa paperwork seamlessly without any hassle!',
          status: 'published',
          featured: true,
          intakeYear: '2025',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }
      setIsLoading(false);
    }
    load();
  }, [id]);

  const handleUpdate = async (data: CreateTestimonialInput) => {
    setIsSaving(true);
    try {
      await apiUpdateTestimonial(id, data);
      alert('Testimonial updated successfully!');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      await apiDeleteTestimonial(id);
      router.push('/admin/testimonials');
    }
  };

  if (isLoading || !testimonial) {
    return <LoadingState message="Loading testimonial..." />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <Link href="/admin/testimonials">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Testimonials
          </Button>
        </Link>
      </div>

      <PageHeader
        title={`Edit Review: ${testimonial.studentName}`}
        description={`Testimonial ID: ${testimonial.id}`}
        actions={
          <Button
            variant="ghost"
            size="sm"
            className="text-rose-600 hover:text-rose-700"
            onClick={handleDelete}
          >
            <Trash2 className="h-4 w-4 mr-1" /> Delete
          </Button>
        }
      />

      <TestimonialForm initialData={testimonial} onSubmit={handleUpdate} isLoading={isSaving} />
    </div>
  );
}
