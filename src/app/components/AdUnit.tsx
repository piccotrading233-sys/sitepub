interface AdUnitProps {
  format: 'horizontal' | 'vertical' | 'square';
  className?: string;
}

export function AdUnit({ format, className = '' }: AdUnitProps) {
  const dimensions = {
    horizontal: 'h-24',
    vertical: 'h-96',
    square: 'h-64'
  };

  return (
    <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center ${dimensions[format]} ${className}`}>
      <div className="text-center">
        <p className="text-gray-500 text-sm font-medium">Espace publicitaire</p>
        <p className="text-gray-400 text-xs mt-1">Google AdSense</p>
      </div>
    </div>
  );
}
