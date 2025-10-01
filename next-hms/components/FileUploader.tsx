"use client";

import { convertFileToUrl } from "@/lib/utils";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};

const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="file-upload">
      <input {...getInputProps()} />

      {files && files?.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          width={1000}
          height={1000}
          alt="uploaded image"
          className="max-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image
            src="/assets/icons/upload.svg"
            width={40}
            height={40}
            alt="uploaded image"
            className="max-h-[400px] overflow-hidden object-cover"
          />
          <div className="file-upload_label">
            <p className="text-14-regular">
              <p>
                <span className="text-green-400">Click to upload</span> or Drag
                and Drop files here
              </p>
              <p>
                SVG, PNG, JPG or GIF (max. 800{" "}
                <span className="text-[13px]">x</span> 400px)
              </p>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUploader;
