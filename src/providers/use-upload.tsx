import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react';

interface uploadFiles {
  content: string;
  name: string;
  type: string;
}

interface UploadContextType {
  enqueueUpload: (uploadFiles: uploadFiles[]) => void;
  files: uploadFiles[];
}

const UploadContext = createContext<UploadContextType | undefined>(undefined);

// SnackbarProvider component to wrap your app
export const UploadProvider = ({ children }: { children: ReactNode }) => {
  const [files, setFiles] = useState<uploadFiles[]>([]);

  const enqueueUpload = (uploadFiles: uploadFiles[]) => {
    setFiles((prev) => [...prev, ...uploadFiles]);
  };

  const value = useMemo(() => ({ enqueueUpload, files }), [files]);

  return (
    <UploadContext.Provider value={value}>
      {children}
      {/* <SnackbarDisplay files={files} /> */}
    </UploadContext.Provider>
  );
};

export const useUpload = (): UploadContextType => {
  const context = useContext(UploadContext);
  if (!context) {
    throw new Error('useUpload must be used within a UploadProvider');
  }
  return context;
};
