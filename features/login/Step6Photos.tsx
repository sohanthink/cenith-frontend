"use client";

import { useState, useRef } from "react";
import { Upload, X, Check } from "lucide-react";
import { FormData } from "../../app/login/page";
import Button from "@/components/common/Button";
import Image from "next/image";

interface Step6PhotosProps {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
  onNext: () => void;
}

export default function Step6Photos({
  formData,
  updateFormData,
  onNext,
}: Step6PhotosProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const maxPhotos = 2;

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;

    const newFiles = Array.from(files).filter((file) => {
      const isImage = file.type.startsWith("image/");
      const isValidFormat =
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png";
      return isImage && isValidFormat;
    });

    const remainingSlots = maxPhotos - formData.photos.length;
    const filesToAdd = newFiles.slice(0, remainingSlots);

    if (filesToAdd.length > 0) {
      const updatedPhotos = [...formData.photos, ...filesToAdd];
      updateFormData({ photos: updatedPhotos });

      // Create preview URLs
      filesToAdd.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrls((prev) => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const removePhoto = (index: number) => {
    const updatedPhotos = formData.photos.filter((_, i) => i !== index);
    const updatedPreviews = previewUrls.filter((_, i) => i !== index);
    updateFormData({ photos: updatedPhotos });
    setPreviewUrls(updatedPreviews);
    if (currentPhotoIndex >= updatedPhotos.length && currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  };

  const handleNext = () => {
    if (formData.photos.length === 0) {
      alert("Please upload at least one photo");
      return;
    }
    onNext();
  };

  const progress = 100; // Final step is 100%

  return (
    <div>
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <Image src="/logo-main.svg" alt="Logo" width={100} height={100} />
      </div>

      {/* Title */}
      <h3 className="mb-4">Add Your Photos</h3>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm font-medium text-gray-600">{progress}%</span>
        </div>
      </div>

      {/* Upload Area */}
      {formData.photos.length < maxPhotos && (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={handleBrowseClick}
          className={`mb-8 border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-all ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-gray-300 hover:border-primary"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Upload className="w-10 h-10 text-primary" />
            </div>
            <div>
              <p className="text-lg font-medium text-text mb-1">
                Drop Your Image Here Or Browse
              </p>
              <p className="text-sm text-gray-500">Support: JPG/JPEG/PNG</p>
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png"
            multiple
            onChange={(e) => handleFileSelect(e.target.files)}
            className="hidden"
          />
        </div>
      )}

      {/* Photo Guidelines */}
      <div className="mb-8 space-y-6 grid grid-cols-3 gap-10">
        {/* Avoid Cropped Photos */}
        <div>
          <h4 className="mb-2 text-center">Avoid Cropped Photos</h4>
          <p className="mb-3 text-center">
            Show where your business is relative to its surroundings.
          </p>
          <div className="flex flex-col gap-4">
            <div className="relative rounded-lg overflow-hidden border-2 border-green-500">
              <Image
                src="/store-card.png"
                alt="Full View Example"
                width={1000}
                height={1000}
                className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden border-2 border-red-500">
              <Image
                src="/store-card.png"
                alt="Full View Example"
                width={1000}
                height={1000}
                className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Use Landscape Format */}
        <div>
          <h4 className="mb-2 text-center">Use Landscape Format</h4>
          <p className="mb-3 text-center">
            Show where your business is relative to its surroundings.
          </p>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Image
                src="/store-card.png"
                alt="Full View Example"
                width={1000}
                height={1000}
                className="w-full object-cover rounded-lg overflow-hidden border-2 border-green-500 aspect-video"
              />
              <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden border-2 border-red-500">
              <Image
                src="/store-card.png"
                alt="Full View Example"
                width={1000}
                height={1000}
                className="w-full h-full object-cover aspect-3/4"
              />
              <div className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* Avoid  too many elements */}
        <div>
          <h4 className="mb-2 text-center">Avoid too many elements</h4>
          <p className="mb-3 text-center">
            Show where your business is relative to its surroundings.
          </p>
          <div className="flex flex-col gap-4">
            <div className="relative rounded-lg overflow-hidden border-2 border-green-500">
              <Image
                src="/store-card.png"
                alt="Full View Example"
                width={1000}
                height={1000}
                className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden border-2 border-red-500">
              <Image
                src="/store-card.png"
                alt="Full View Example"
                width={1000}
                height={1000}
                className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Uploaded Photos Preview */}
      {formData.photos.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-text">Uploaded Photos</h4>
            <span className="text-sm text-gray-600">
              {currentPhotoIndex + 1} of {maxPhotos}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {previewUrls.map((url, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden border-2 border-gray-200 group"
              >
                <img
                  src={url}
                  alt={`Upload ${index + 1}`}
                  className="w-full aspect-video object-cover"
                />
                <button
                  onClick={() => removePhoto(index)}
                  className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button
          onClick={handleNext}
          variant="primary"
          fullWidth
          className="bg-primary hover:bg-opacity-90 rounded-lg py-3 text-white font-medium"
        >
          {formData.photos.length >= maxPhotos ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
}
