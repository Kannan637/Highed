'use client';

import React from 'react';
import Link from 'next/link';
import { User } from '../../types/user';
import { DataTable, Column } from '../common/DataTable';
import { UserStatusBadge } from './UserStatusBadge';
import { formatDate } from '../../lib/utils';
import { Edit2, Shield, User as UserIcon } from 'lucide-react';
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
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#25347B]/10 text-[#25347B] font-bold text-xs">
            {u.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <Link
              href={`/admin/users/${u.id}`}
              className="font-bold text-sm text-slate-900 hover:text-[#25347B] transition-colors"
            >
              {u.name}
            </Link>
            <p className="text-xs text-slate-500 font-mono mt-0.5">{u.email}</p>
          </div>
        </div>
      ),
    },
    {
      header: 'Assigned Role',
      cell: (u) => (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25347B] bg-[#25347B]/10 border border-[#25347B]/20 px-2 py-0.5 rounded-md capitalize">
          <Shield className="h-3 w-3" />
          {u.role.replace('_', ' ')}
        </span>
      ),
    },
    {
      header: 'Account Status',
      cell: (u) => <UserStatusBadge status={u.status} />,
    },
    {
      header: 'Member Since',
      cell: (u) => <span className="text-xs font-mono text-slate-500">{formatDate(u.createdAt)}</span>,
    },
    {
      header: 'Actions',
      cell: (u) => (
        <Link href={`/admin/users/${u.id}`}>
          <Button variant="outline" size="sm" className="h-7.5 px-2.5 text-xs font-semibold text-slate-700 hover:text-[#25347B] hover:border-[#25347B]">
            <Edit2 className="h-3.5 w-3.5 mr-1" /> Edit
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
