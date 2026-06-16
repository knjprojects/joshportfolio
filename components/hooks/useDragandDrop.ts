"use client"

import { useState } from "react"
import type { DragEvent } from "react"

type Options = {
    onFile: (file: File) => void
    accept?: string
    }

    export const useDragAndDrop = ({ onFile, accept }: Options) => {
    const [isDragging, setIsDragging] = useState(false)

    const handleDragOver = (e: DragEvent<HTMLElement>) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = (e: DragEvent<HTMLElement>) => {
        e.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (e: DragEvent<HTMLElement>) => {
        e.preventDefault()
        setIsDragging(false)

        const file = e.dataTransfer.files?.[0]
        if (!file) return

        if (accept && !file.type.includes(accept)) return

        onFile(file)
    }

    return {
        isDragging,
        dragProps: {
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        },
    }
}