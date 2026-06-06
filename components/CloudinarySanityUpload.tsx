"use client"

import React, { useState } from "react"
import { useDragAndDrop } from "@/utils/hooks/useDragandDrop"
import clsx from "clsx"

type UploadState = "idle" | "uploading" | "success"

const CloudinarySanityUpload = () => {
  const [file, setFile] = useState<File | null>(null)
  const [thumbnail, setThumbnail] = useState<File | null>(null)
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState("3d-model")
  const [status, setStatus] = useState<UploadState>("idle")

  const mainDrop = useDragAndDrop({
    onFile: (file) => {
      setFile(file)
      setStatus("idle")
    },
  })

  const thumbDrop = useDragAndDrop({
    onFile: (file) => {
      setThumbnail(file)
      setThumbnailPreview(URL.createObjectURL(file))
    },
  })

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setFile(file)
    setStatus("idle")
  }

  const onUpload = async () => {
    if (!file || status === "uploading") return

    setStatus("uploading")

    try {
      const formData = new FormData()

      formData.append("file", file)
      formData.append("thumbnail", thumbnail as File)
      formData.append("title", title)
      formData.append("description", description)
      formData.append("type", type)

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || "Upload failed")

      setStatus("success")

      setTimeout(() => {
        setStatus("idle")
        setFile(null)
        setThumbnail(null)
        setThumbnailPreview(null)
        setTitle("")
        setDescription("")
        setType("3d-model")
      }, 2000)
    } catch {
      setStatus("idle")
    }
  }

  const showForm = Boolean(file)

  return (
    <div className="mt-14 flex flex-col gap-4 w-full max-w-md p-4 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md">

      {/* MAIN FILE DROP */}
      <label
        {...mainDrop.dragProps}
        className={clsx(
          "flex flex-col items-center justify-center h-32 rounded-xl border-2 border-dashed border-white/20 bg-black/10 hover:bg-black/20 transition cursor-pointer",
          mainDrop.isDragging && "border-white/40"
        )}
      >
        <input type="file" onChange={onFileChange} className="hidden" />

        <span className="text-sm text-gray-300">
          {file ? file.name : "Drop project file"}
        </span>
      </label>

      {/* FORM */}
      <div
        className={clsx(
          showForm ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        )}
      >
        <input
          className="w-full rounded-xl border border-white/10 bg-black/10 p-3 text-white"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* THUMBNAIL */}
        <label
          {...thumbDrop.dragProps}
          className="mt-4 h-28 flex items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-white/20 bg-black/10 cursor-pointer"
        >
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const f = e.target.files?.[0] ?? null
              setThumbnail(f)
              if (f) setThumbnailPreview(URL.createObjectURL(f))
            }}
            className="hidden"
          />

          {thumbnailPreview ? (
            <img
              src={thumbnailPreview}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400">Drop thumbnail</span>
          )}
        </label>

        <textarea
          className="mt-4 w-full rounded-xl border border-white/10 bg-black/10 p-3 text-white resize-none"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="mt-4 w-full rounded-xl border border-white/10 bg-black/10 p-3 text-white"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="3d-model">3D Model</option>
          <option value="game">Game</option>
          <option value="animation">Animation</option>
          <option value="music">Music</option>
          <option value="flutter">Flutter App</option>
          <option value="nextjs">Next.js App</option>
        </select>

        <button
          onClick={onUpload}
          disabled={status === "uploading"}
          className="mt-4 w-full p-3 rounded-xl font-medium bg-purple-600 hover:bg-purple-500 transition"
        >
          {status === "uploading"
            ? "Uploading..."
            : status === "success"
            ? "Uploaded ✓"
            : "Upload Project"}
        </button>
      </div>
    </div>
  )
}

export default CloudinarySanityUpload