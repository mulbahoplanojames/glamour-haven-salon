"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ImageUploadProps {
  value: string[]
  onChange: (value: string[]) => void
  onRemove: (value: string) => void
  disabled?: boolean
}

export default function ImageUpload({ value, onChange, onRemove, disabled }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)

      if (disabled) return

      const files = Array.from(e.dataTransfer.files)
      if (files.length === 0) return

      handleUpload(files)
    },
    [disabled],
  )

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    handleUpload(files)
    // Reset the input value so the same file can be uploaded again if removed
    e.target.value = ""
  }

  const handleUpload = async (files: File[]) => {
    setIsUploading(true)

    try {
      // Filter for image files
      const imageFiles = files.filter((file) => file.type.startsWith("image/"))

      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Create object URLs for preview (in a real app, you'd upload to a server)
      const newImages = imageFiles.map((file) => URL.createObjectURL(file))

      // Add new images to existing ones
      onChange([...value, ...newImages])
    } catch (error) {
      console.error("Upload failed:", error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "border-2 border-dashed rounded-lg p-6 transition-colors flex flex-col items-center justify-center gap-2",
          isDragging ? "border-primary bg-primary/5" : "border-gray-300",
          disabled && "opacity-50 cursor-not-allowed",
        )}
      >
        <Upload className="h-10 w-10 text-gray-400" />
        <p className="text-sm text-gray-600 text-center">Drag & drop images here, or click to select files</p>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFileChange}
          disabled={disabled || isUploading}
        />
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={disabled || isUploading}
          className="mt-2"
          onClick={() => document.getElementById("image-upload")?.click()}
        >
          {isUploading ? "Uploading..." : "Select Files"}
        </Button>
      </div>

      {value.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {value.map((url, index) => (
            <div key={index} className="relative aspect-square rounded-md overflow-hidden group">
              <img
                src={url || "/placeholder.svg"}
                alt={`Uploaded image ${index + 1}`}
                className="object-cover w-full h-full"
              />
              <button
                type="button"
                onClick={() => onRemove(url)}
                className="absolute top-2 right-2 bg-black/50 rounded-full p-1 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                disabled={disabled}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
