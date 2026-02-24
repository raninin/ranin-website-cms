"use client";

import { useState, useCallback } from "react";
import { useUploadThing } from "@/lib/uploadthing";

interface Props {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export function ImageUpload({ value, onChange, label }: Props) {
  const [mode, setMode] = useState<"url" | "preview">(
    value ? "preview" : "url"
  );
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dragOver, setDragOver] = useState(false);

  const { startUpload } = useUploadThing("imageUploader", {
    onUploadProgress: (p) => setProgress(p),
    onClientUploadComplete: (res) => {
      if (res?.[0]) {
        onChange(res[0].ufsUrl);
        setMode("preview");
      }
      setUploading(false);
      setProgress(0);
    },
    onUploadError: () => {
      setUploading(false);
      setProgress(0);
    },
  });

  const handleFiles = useCallback(
    async (files: FileList | File[]) => {
      const file = files[0];
      if (!file) return;
      setUploading(true);
      setProgress(0);
      await startUpload([file]);
    },
    [startUpload]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      if (e.dataTransfer.files.length > 0) {
        handleFiles(e.dataTransfer.files);
      }
    },
    [handleFiles]
  );

  return (
    <div>
      {label && (
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-400">
          {label}
        </label>
      )}
      {mode === "preview" && value ? (
        <div className="relative">
          <img
            src={value}
            alt=""
            className="h-32 w-full border border-zinc-700 object-cover"
          />
          <button
            onClick={() => {
              setMode("url");
              onChange("");
            }}
            className="absolute right-2 top-2 bg-zinc-900/80 px-2 py-1 text-xs text-zinc-400 hover:text-white"
          >
            Change
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={() => {
              if (value) setMode("preview");
            }}
            placeholder="Enter image URL (e.g. /images/13.png)"
            className="w-full border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none"
          />

          {uploading ? (
            <div className="border border-zinc-700 bg-zinc-800 p-3">
              <div className="mb-1 flex items-center justify-between text-xs text-zinc-400">
                <span>Uploading...</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden bg-zinc-700">
                <div
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ) : (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              className={`flex cursor-pointer flex-col items-center justify-center border border-dashed p-4 text-center transition-colors ${
                dragOver
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-zinc-700 bg-zinc-800/50 hover:border-zinc-500"
              }`}
              onClick={() => {
                const input = document.createElement("input");
                input.type = "file";
                input.accept = "image/*";
                input.onchange = (e) => {
                  const files = (e.target as HTMLInputElement).files;
                  if (files) handleFiles(files);
                };
                input.click();
              }}
            >
              <p className="text-xs text-zinc-400">
                Drop an image here or{" "}
                <span className="text-blue-400">click to browse</span>
              </p>
              <p className="mt-1 text-[10px] text-zinc-600">
                Max 4MB &middot; PNG, JPG, WebP
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
