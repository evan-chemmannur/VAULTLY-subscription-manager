import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';
import { useSubscription } from '../../context/SubscriptionContext';

interface ErrorStateProps {
  message?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message }) => {
  const { error, retry } = useSubscription();
  const displayMsg = message || error || 'Unable to load subscription data. Check your connection and try again.';

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#121216] border border-[#10B981]/30 rounded-2xl text-center my-6 shadow-brand-glow">
      <div className="w-12 h-12 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 flex items-center justify-center mb-3 text-[#34D399]">
        <AlertTriangle className="w-6 h-6" />
      </div>
      <h4 className="text-lg font-semibold text-white mb-1">Connection Error</h4>
      <p className="text-sm text-[#8888A0] max-w-md mb-5">{displayMsg}</p>
      <button
        onClick={retry}
        className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1A22] hover:bg-white/10 text-white border border-white/20 text-sm font-medium rounded-xl transition-all"
      >
        <RotateCcw className="w-4 h-4 text-[#10B981]" />
        Retry
      </button>
    </div>
  );
};
