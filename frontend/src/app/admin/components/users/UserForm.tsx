'use client';

import React, { useState } from 'react';
import { CreateUserInput, UserRole, UserStatus } from '../../types/user';
import { Input } from '../ui/input';
import { Select } from '../ui/select';
import { Button } from '../ui/button';
import { AlertCircle } from 'lucide-react';
import { userSchema } from '../../lib/validations/user';

interface UserFormProps {
  initialData?: Partial<CreateUserInput>;
  onSubmit: (data: CreateUserInput) => Promise<void>;
  isLoading?: boolean;
}

export function UserForm({ initialData, onSubmit, isLoading }: UserFormProps) {
  const [formData, setFormData] = useState<CreateUserInput>({
    name: initialData?.name || '',
    email: initialData?.email || '',
    role: initialData?.role || 'counselor',
    status: initialData?.status || 'active',
    phone: initialData?.phone || '',
    password: '',
  });
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const validation = userSchema.safeParse(formData);
    if (!validation.success) {
      setValidationError(validation.error.issues[0]?.message || 'Please check user details');
      return;
    }

    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {validationError && (
        <div className="flex items-center gap-2 p-3 text-xs font-medium text-rose-700 bg-rose-50 border border-rose-200 rounded-lg">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{validationError}</span>
        </div>
      )}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">User Profile</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Full Name *
            </label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Priyadharshini M"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Official Email Address *
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@highed.in"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Role Access *
            </label>
            <Select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value as UserRole })}
            >
              <option value="counselor">Counselor (Leads & Students)</option>
              <option value="editor">Editor (Blogs & Content)</option>
              <option value="admin">Administrator</option>
              <option value="super_admin">Super Administrator</option>
              <option value="viewer">Viewer (Read-only)</option>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Account Status *
            </label>
            <Select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as UserStatus })}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Contact Phone
            </label>
            <Input
              value={formData.phone || ''}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 00000"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 block mb-1.5">
            {initialData ? 'Set New Password (leave blank to keep current)' : 'Account Password *'}
          </label>
          <Input
            type="password"
            value={formData.password || ''}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="••••••••••••"
            required={!initialData}
          />
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={() => window.history.back()}>
          Cancel
        </Button>
        <Button type="submit" isLoading={isLoading}>
          Save User
        </Button>
      </div>
    </form>
  );
}
