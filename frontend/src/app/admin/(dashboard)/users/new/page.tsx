'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '../../../components/common/PageHeader';
import { UserForm } from '../../../components/users/UserForm';
import { apiCreateUser } from '../../../lib/api/users';
import { CreateUserInput } from '../../../types/user';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NewUserPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async (data: CreateUserInput) => {
    setIsLoading(true);
    try {
      await apiCreateUser(data);
      router.push('/admin/users');
    } finally {
      setIsLoading(false);
    }
  };

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
        title="Invite Team Member"
        description="Assign a role, email, and password credentials for a HighEd employee."
      />

      <UserForm onSubmit={handleCreate} isLoading={isLoading} />
    </div>
  );
}
