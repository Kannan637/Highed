'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '../../../components/common/PageHeader';
import { TestimonialForm } from '../../../components/testimonials/TestimonialForm';
import { useTestimonials } from '../../../hooks/useTestimonials';
import { CreateTestimonialInput } from '../../../types/testimonial';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NewTestimonialPage() {
  const router = useRouter();
  const { createTestimonial } = useTestimonials();
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async (data: CreateTestimonialInput) => {
    setIsLoading(true);
    try {
      await createTestimonial(data);
      router.push('/admin/testimonials');
    } finally {
      setIsLoading(false);
    }
  };

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
        title="Add Student Testimonial"
        description="Add a verified testimonial from a successfully placed student."
      />

      <TestimonialForm onSubmit={handleCreate} isLoading={isLoading} />
    </div>
  );
}
