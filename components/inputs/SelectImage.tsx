"use client";

import { ImageType } from "@/src/components/admin/AddProductForm";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
interface SelectImageProps {
  item?: ImageType;
  handleFileChange: (value: File) => void;
}

const SelectImage = ({ item, handleFileChange }: SelectImageProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      handleFileChange(acceptedFiles[0]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
  });
  return (
    <div
      {...getRootProps()}
      className="border-2 border-slate-400 p-2 border-dashed cursor-pointer text-sm font-normal text-slate-400 flex items-center justify-center"
    >
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop image here...</p> : <p>+ {item?.color} image</p>}
    </div>
  );
};

export default SelectImage;
