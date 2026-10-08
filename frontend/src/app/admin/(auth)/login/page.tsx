'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/useAuth';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { GraduationCap, Lock, Mail, AlertCircle, ShieldCheck } from 'lucide-react';
import { loginSchema } from '../../lib/validations/login';

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

    const validation = loginSchema.safeParse({ email, password });
    if (!validation.success) {
      setError(validation.error.issues[0]?.message || 'Please enter valid credentials');
      setIsLoading(false);
      return;
    }

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
    <div className="flex min-h-screen items-center justify-center p-4 bg-[#F5F5F9] font-body selection:bg-[#25347B]/10 selection:text-[#25347B]">
      <Card className="w-full max-w-md shadow-xs border-slate-200/90 bg-white">
        <CardHeader className="text-center pb-4 pt-7 px-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25347B] text-white mb-3.5 shadow-xs">
            <GraduationCap className="h-6 w-6" />
          </div>
          <CardTitle className="text-xl font-bold tracking-tight text-slate-900">
            HighEd Admin Portal
          </CardTitle>
          <CardDescription className="text-xs text-slate-500 mt-1">
            Overseas admissions management & counselor console
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 px-6 pb-7">
          {error && (
            <div className="flex items-center gap-2.5 rounded-lg bg-rose-50 p-3 text-xs font-medium text-rose-700 border border-rose-200">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1.5 uppercase tracking-wider">
                Staff Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@highed.in"
                  className="pl-9.5 text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1.5 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pl-9.5 text-sm"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full mt-2 h-10 text-sm font-semibold"
              isLoading={isLoading}
            >
              Sign In to Console
            </Button>
          </form>

          {/* Quick Demo Credentials Info */}
          <div className="rounded-lg border border-slate-200/80 bg-slate-50/70 p-3 text-xs text-slate-600 flex items-start gap-2 mt-4">
            <ShieldCheck className="h-4 w-4 text-[#25347B] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-800">Quick Access:</span>{' '}
              <span className="font-mono text-[11px] text-slate-600">admin@highed.in</span> /{' '}
              <span className="font-mono text-[11px] text-slate-600">admin123</span>
            </div>
          </div>

          <p className="text-center text-[11px] text-slate-400 pt-3 border-t border-slate-100">
            HighEd Overseas Education Advisory • Management Portal
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
