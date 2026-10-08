'use client';

import React, { useState } from 'react';
import { Lead, LeadStatus } from '../../types/lead';
import { leadStatusSchema } from '../../lib/validations/lead';
import { Button } from '../ui/button';
import { Select } from '../ui/select';
import { Phone, Mail, MessageSquare, Trash2 } from 'lucide-react';
import { ConfirmDialog } from '../common/ConfirmDialog';

interface LeadActionsProps {
  lead: Lead;
  onStatusChange: (status: LeadStatus) => Promise<void>;
  onDelete: () => Promise<void>;
}

export function LeadActions({ lead, onStatusChange, onDelete }: LeadActionsProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleStatusSelect = (rawStatus: string) => {
    const parsed = leadStatusSchema.safeParse(rawStatus);
    if (parsed.success) {
      onStatusChange(parsed.data);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await onDelete();
    } finally {
      setIsDeleting(false);
      setShowConfirm(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Quick Status Select */}
      <div className="w-44">
        <Select
          value={lead.status}
          onChange={(e) => handleStatusSelect(e.target.value)}
        >
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="in_progress">In Progress</option>
          <option value="counseling_scheduled">Counseling Scheduled</option>
          <option value="applied">Applied</option>
          <option value="offer_received">Offer Received</option>
          <option value="visa_approved">Visa Approved</option>
          <option value="enrolled">Enrolled</option>
          <option value="lost">Lost</option>
          <option value="junk">Junk</option>
        </Select>
      </div>

      <a href={`tel:${lead.phone}`}>
        <Button variant="outline" size="sm">
          <Phone className="h-4 w-4 mr-1.5" /> Call
        </Button>
      </a>

      <a href={`mailto:${lead.email}`}>
        <Button variant="outline" size="sm">
          <Mail className="h-4 w-4 mr-1.5" /> Email
        </Button>
      </a>

      <a
        href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="sm" className="text-emerald-600 hover:text-emerald-700">
          <MessageSquare className="h-4 w-4 mr-1.5" /> WhatsApp
        </Button>
      </a>

      <Button
        variant="ghost"
        size="sm"
        className="text-rose-600 hover:text-rose-700"
        onClick={() => setShowConfirm(true)}
      >
        <Trash2 className="h-4 w-4 mr-1" /> Delete
      </Button>

      <ConfirmDialog
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleDelete}
        title="Delete Lead"
        description={`Are you sure you want to permanently delete lead "${lead.fullName}"? This action cannot be undone.`}
        confirmText="Delete"
        isDestructive
        isLoading={isDeleting}
      />
    </div>
  );
}
