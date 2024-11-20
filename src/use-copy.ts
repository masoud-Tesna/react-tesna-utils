import { useEffect, useRef, useState } from 'react'

export const useCopy = () => {
  const [isCopied, setIsCopied] = useState(false)
  const [isCopyLoading, setIsCopyLoading] = useState(false)

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearCopyTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  useEffect(() => {
    return () => clearCopyTimeout()
  }, [])

  const copyText = async (text: string) => {
    setIsCopyLoading(true)
    try {
      const success = await copyToClipboard(text)
      if (success) {
        setIsCopied(true)
        clearCopyTimeout()
        timeoutRef.current = setTimeout(() => setIsCopied(false), 2000)
      }
    } catch (error) {
      console.error('Error copying text:', error)
    } finally {
      setIsCopyLoading(false)
    }
  }

  return {
    isCopied,
    isCopyLoading,
    copyText,
  }
}

/**
 * Copies the provided text to the clipboard.
 * @param text - The text to copy to the clipboard.
 * @returns A promise that resolves to `true` if successful, or `false` if an error occurs.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (!navigator.clipboard) {
      console.error('Clipboard API is not supported in this browser.')
      return false
    }
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error('Failed to copy text to clipboard:', error)
    return false
  }
}
