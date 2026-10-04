'use client';

import { useState, useEffect, useCallback } from 'react';
import { AdminTestimonial, CreateTestimonialInput } from '../types/testimonial';
import {
  apiGetTestimonials,
  apiCreateTestimonial,
  apiUpdateTestimonial,
  apiDeleteTestimonial,
} from '../lib/api/testimonials';

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<AdminTestimonial[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTestimonials = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await apiGetTestimonials();
      if (res.success && res.data) {
        setTestimonials(res.data.items || []);
        setTotal(res.data.total || 0);
      } else {
        const mockTestimonials: AdminTestimonial[] = [
          {
            id: 'test-1',
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
          },
          {
            id: 'test-2',
            studentName: 'Priya Dharshini',
            course: 'MS in Biotechnology',
            university: 'Technical University of Munich (TUM)',
            country: 'Germany',
            rating: 5,
            review:
              'Thanks to HighEd for helping me secure admission at TU Munich with full tuition exemption and guiding my APS certification!',
            status: 'published',
            featured: true,
            intakeYear: '2025',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        ];
        setTestimonials(mockTestimonials);
        setTotal(mockTestimonials.length);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load testimonials');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  const createTestimonial = async (data: CreateTestimonialInput) => {
    const res = await apiCreateTestimonial(data);
    await fetchTestimonials();
    return res;
  };

  const updateTestimonial = async (id: string, data: Partial<CreateTestimonialInput>) => {
    const res = await apiUpdateTestimonial(id, data);
    await fetchTestimonials();
    return res;
  };

  const removeTestimonial = async (id: string) => {
    await apiDeleteTestimonial(id);
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  return {
    testimonials,
    total,
    isLoading,
    error,
    refresh: fetchTestimonials,
    createTestimonial,
    updateTestimonial,
    removeTestimonial,
  };
}
