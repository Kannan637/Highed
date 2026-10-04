'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/useAuth';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { GraduationCap, Lock, Mail, AlertCircle } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('admin@highed.in');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const res = await login({ email, password });
      if (res.success) {
        router.push('/admin');
      } else {
        setError(res.error || 'Invalid credentials');
      }
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-slate-50/70 font-body">
      <Card className="w-full max-w-md shadow-md border-slate-200">
        <CardHeader className="text-center pb-5 pt-7">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white mb-3 shadow-2xs">
            <GraduationCap className="h-6 w-6" />
          </div>
          <CardTitle className="text-xl font-bold tracking-tight">HighEd Admin Portal</CardTitle>
          <CardDescription className="text-sm text-slate-500 mt-1">
            Enter your counselor or admin credentials to continue
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5 px-6 pb-7">
          {error && (
            <div className="flex items-center gap-2.5 rounded-lg bg-red-50 p-3 text-sm text-red-700 border border-red-200">
              <AlertCircle className="h-4.5 w-4.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1.5">
                Official Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@highed.in"
                  className="pl-10.5"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pl-10.5"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full mt-3 h-10.5 text-sm font-semibold" isLoading={isLoading}>
              Sign In
            </Button>
          </form>

          <p className="text-center text-xs text-slate-400 pt-3 border-t border-slate-100">
            HighEd Overseas Education Consultancy • Management Console
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
