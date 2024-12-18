import React, { useState } from 'react';
import { ImagePlus, ShoppingCart } from 'lucide-react';
import CreatePostSheet from './CreatePostSheet';

export default function CreatePostButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <ShoppingCart className="w-5 h-5 text-gray-400" />
        </div>
        
        <button
          onClick={() => setIsOpen(true)}
          className="flex-1 flex items-center bg-gray-50 text-gray-500 text-left rounded-lg px-4 py-2.5 hover:bg-gray-100 transition-colors group"
        >
          <span>Nə satırsınız?</span>
          <div className="ml-auto flex items-center space-x-2 text-gray-400">
            <ImagePlus className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
            <span className="hidden sm:inline text-sm group-hover:text-blue-500 transition-colors">Şəkil əlavə et</span>
          </div>
        </button>
      </div>

      <CreatePostSheet isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}