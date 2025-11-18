import React from "react";

export function exampleCoreApi() {
  return "mini-fs-core ready";
}

interface File {
  id: string;
  name: string;
  parentId?: string;
  type: 'file';
}

interface Folder {
  id: string;
  name: string;
  parentId?: string;
  type: 'folder';
  children?: (File | Folder)[];
}

export const useFs = () => {

  const [fs, setFs] = React.useState<(File | Folder)[]>([
    { id: "1", name: "test", type: "file" },
    { id: "2", name: "Folder with long text", type: "folder" },
    { id: "11", name: "test", type: "file" },
    { id: "21", name: "Folder with long text", type: "folder" },
    { id: "12", name: "test", type: "file" },
    { id: "23", name: "Folder with long text", type: "folder" },
    { id: "14", name: "test", type: "file" },
    { id: "25", name: "Folder with long text", type: "folder" },
    { id: "16", name: "test", type: "file" },
    { id: "27", name: "Folder with long text", type: "folder" },
    { id: "18", name: "test", type: "file" },
    { id: "29", name: "Folder with long text", type: "folder" },
    { id: "a1", name: "test", type: "file" },
    { id: "a2", name: "Folder with long text", type: "folder" },
    { id: "a11", name: "test", type: "file" },
    { id: "a21", name: "Folder with long text", type: "folder" },
    { id: "a12", name: "test", type: "file" },
    { id: "a23", name: "Folder with long text", type: "folder" },
    { id: "a14", name: "test", type: "file" },
    { id: "a25", name: "Folder with long text", type: "folder" },
    { id: "a16", name: "test", type: "file" },
    { id: "a27", name: "Folder with long text", type: "folder" },
    { id: "a18", name: "test", type: "file" },
    { id: "a29", name: "Folder with long text", type: "folder" }
  ]);

  return {
    fs, 
    setFs
  }
}

