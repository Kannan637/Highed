'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { PageHeader } from '../../components/common/PageHeader';
import { UserTable } from '../../components/users/UserTable';
import { apiGetUsers } from '../../lib/api/users';
import { User } from '../../types/user';
import { Button } from '../../components/ui/button';
import { Plus } from 'lucide-react';

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      const res = await apiGetUsers();
      if (res.success && res.data) {
        setUsers(res.data.items || []);
      } else {
        setUsers([
          {
            id: 'usr-1',
            name: 'Kannan (Director)',
            email: 'director@highed.in',
            role: 'super_admin',
            status: 'active',
            permissions: ['*'],
            createdAt: '2025-01-01',
            updatedAt: '2026-01-01',
          },
          {
            id: 'usr-2',
            name: 'Priyadharshini M',
            email: 'priya.counselor@highed.in',
            role: 'counselor',
            status: 'active',
            permissions: ['leads:view', 'leads:edit', 'events:view'],
            createdAt: '2025-06-15',
            updatedAt: '2026-03-01',
          },
          {
            id: 'usr-3',
            name: 'Arun Kumar',
            email: 'arun.editor@highed.in',
            role: 'editor',
            status: 'active',
            permissions: ['blogs:view', 'blogs:create', 'blogs:edit', 'blogs:publish'],
            createdAt: '2025-08-10',
            updatedAt: '2026-02-14',
          },
        ]);
      }
      setIsLoading(false);
    }
    load();
  }, []);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Team & User Accounts"
        description="Manage counselors, editors, and administrative staff access credentials."
        actions={
          <Link href="/admin/users/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" /> Invite Member
            </Button>
          </Link>
        }
      />

      <UserTable users={users} isLoading={isLoading} />
    </div>
  );
}
