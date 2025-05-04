'use client';

import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk'

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(WebApp.initData);
    WebApp.HapticFeedback.selectionChanged();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    
    }, [])

  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Press to copy Init Data</h1>
      <button
        onClick={copyToClipboard}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        {copied ? 'Copied!' : 'Copy Init Data'}
      </button>
    </div>
  );
}
