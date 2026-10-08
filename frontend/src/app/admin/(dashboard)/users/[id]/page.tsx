'use client';

import React, { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '../../../components/common/PageHeader';
import { UserForm } from '../../../components/users/UserForm';
import { apiGetUserById, apiUpdateUser, apiDeleteUser } from '../../../lib/api/users';
import { User, CreateUserInput } from '../../../types/user';
import { LoadingState } from '../../../components/common/LoadingState';
import { Button } from '../../../components/ui/button';
import { ArrowLeft, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function UserDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      const res = await apiGetUserById(id);
      if (res.success && res.data) {
        setUser(res.data);
      } else {
        setUser({
          id,
          name: 'Priyadharshini M',
          email: 'priya.counselor@highed.in',
          role: 'counselor',
          status: 'active',
          phone: '+91 98400 12345',
          permissions: ['leads:view', 'leads:edit', 'events:view'],
          createdAt: '2025-06-15',
          updatedAt: '2026-03-01',
        });
      }
      setIsLoading(false);
    }
    load();
  }, [id]);

  const handleUpdate = async (data: CreateUserInput) => {
    setIsSaving(true);
    try {
      await apiUpdateUser(id, data);
      router.push('/admin/users');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to remove this user account?')) {
      await apiDeleteUser(id);
      router.push('/admin/users');
    }
  };

  if (isLoading || !user) {
    return <LoadingState message="Loading team member profile..." />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <Link href="/admin/users">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Team
          </Button>
        </Link>
      </div>

      <PageHeader
        title={`Edit Member: ${user.name}`}
        description={`${user.email} • Role: ${user.role}`}
        actions={
          <Button variant="ghost" size="sm" className="text-rose-600 hover:text-rose-700" onClick={handleDelete}>
            <Trash2 className="h-4 w-4 mr-1" /> Remove
          </Button>
        }
      />

      <UserForm initialData={user} onSubmit={handleUpdate} isLoading={isSaving} />
    </div>
  );
}
