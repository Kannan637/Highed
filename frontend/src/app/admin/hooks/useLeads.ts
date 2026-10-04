'use client';

import { useState, useEffect, useCallback } from 'react';
import { Lead, LeadFilterParams } from '../types/lead';
import { apiGetLeads, apiUpdateLead, apiDeleteLead } from '../lib/api/leads';

export function useLeads(initialFilters: LeadFilterParams = {}) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(initialFilters.page || 1);
  const [pageSize, setPageSize] = useState(initialFilters.pageSize || 10);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<LeadFilterParams>(initialFilters);

  const fetchLeads = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await apiGetLeads({ ...filters, page, pageSize });
      if (res.success && res.data) {
        setLeads(res.data.items || []);
        setTotal(res.data.total || 0);
      } else {
        // Fallback mock leads for rich preview when backend is not connected
        const mockLeads: Lead[] = [
          {
            id: 'lead-1',
            fullName: 'Ananya Sharma',
            email: 'ananya.sharma@example.com',
            phone: '+91 98765 43210',
            city: 'Chennai',
            countryPreference: ['UK', 'Ireland'],
            coursePreference: 'MSc Data Science',
            intakePreference: 'Fall 2026',
            status: 'new',
            source: 'website_form',
            timeline: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            id: 'lead-2',
            fullName: 'Rahul Subramanian',
            email: 'rahul.s@example.com',
            phone: '+91 98401 23456',
            city: 'Coimbatore',
            countryPreference: ['Germany', 'USA'],
            coursePreference: 'MS Automotive Engineering',
            intakePreference: 'Spring 2027',
            status: 'counseling_scheduled',
            source: 'event',
            timeline: [],
            createdAt: new Date(Date.now() - 86400000).toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            id: 'lead-3',
            fullName: 'Kavitha Ramaswamy',
            email: 'kavitha.r@example.com',
            phone: '+91 94440 98765',
            city: 'Madurai',
            countryPreference: ['Canada', 'Australia'],
            coursePreference: 'MBA in Finance',
            intakePreference: 'Fall 2026',
            status: 'applied',
            source: 'whatsapp',
            timeline: [],
            createdAt: new Date(Date.now() - 172800000).toISOString(),
            updatedAt: new Date().toISOString(),
          },
        ];
        setLeads(mockLeads);
        setTotal(mockLeads.length);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load leads');
    } finally {
      setIsLoading(false);
    }
  }, [filters, page, pageSize]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const updateStatus = async (id: string, status: Lead['status']) => {
    await apiUpdateLead(id, { status });
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
  };

  const removeLead = async (id: string) => {
    await apiDeleteLead(id);
    setLeads((prev) => prev.filter((l) => l.id !== id));
  };

  return {
    leads,
    total,
    page,
    pageSize,
    isLoading,
    error,
    filters,
    setPage,
    setPageSize,
    setFilters,
    refresh: fetchLeads,
    updateStatus,
    removeLead,
  };
}
