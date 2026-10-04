'use client';

import React from 'react';
import Link from 'next/link';
import { User } from '../../types/user';
import { DataTable, Column } from '../common/DataTable';
import { UserStatusBadge } from './UserStatusBadge';
import { formatDate } from '../../lib/utils';
import { Eye, Shield } from 'lucide-react';
import { Button } from '../ui/button';

interface UserTableProps {
  users: User[];
  isLoading: boolean;
}

export function UserTable({ users, isLoading }: UserTableProps) {
  const columns: Column<User>[] = [
    {
      header: 'Team Member',
      cell: (u) => (
        <div>
          <span className="font-semibold text-sm text-slate-900">{u.name}</span>
          <p className="text-xs text-slate-500 mt-0.5">{u.email}</p>
        </div>
      ),
    },
    {
      header: 'Role',
      cell: (u) => (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md capitalize">
          <Shield className="h-3.5 w-3.5" />
          {u.role.replace('_', ' ')}
        </span>
      ),
    },
    {
      header: 'Status',
      cell: (u) => <UserStatusBadge status={u.status} />,
    },
    {
      header: 'Joined',
      cell: (u) => <span className="text-sm text-slate-500">{formatDate(u.createdAt)}</span>,
    },
    {
      header: 'Actions',
      cell: (u) => (
        <Link href={`/admin/users/${u.id}`}>
          <Button variant="ghost" size="sm">
            <Eye className="h-4 w-4 mr-1" /> Edit
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={users}
      isLoading={isLoading}
      emptyTitle="No team members found"
      emptyDescription="Invite counselors, editors, or admins to the team."
    />
  );
}
