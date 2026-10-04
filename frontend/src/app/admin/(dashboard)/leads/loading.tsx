import React from 'react';
import { LoadingState } from '../../components/common/LoadingState';

export default function LeadsLoading() {
  return (
    <div className="py-12">
      <LoadingState message="Loading enquiries and leads..." />
    </div>
  );
}
