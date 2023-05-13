import * as React from 'react';
import Column from '../../Layout/Column';

interface GridPreviewProps {
  isLoading: boolean;
  loadingSkeleton: React.ReactNode;
  content: React.ReactNode;
}

const GridPreview = ({ isLoading, loadingSkeleton, content }: GridPreviewProps) => {
  return isLoading ? <Column>{loadingSkeleton}</Column> : <Column>{content}</Column>;
};

export default GridPreview;
