'use client';

import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { TestimonialTable } from '../../components/testimonials/TestimonialTable';
import { useTestimonials } from '../../hooks/useTestimonials';
import { Button } from '../../components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function TestimonialsPage() {
  const { testimonials, isLoading } = useTestimonials();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Student Testimonials & Reviews"
        description="Manage verified student success stories, university reviews, and ratings."
        actions={
          <Link href="/admin/testimonials/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" /> Add Testimonial
            </Button>
          </Link>
        }
      />

      <TestimonialTable testimonials={testimonials} isLoading={isLoading} />
    </div>
  );
}
