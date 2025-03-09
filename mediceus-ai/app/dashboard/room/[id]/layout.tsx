import type React from "react"
export default function RoomLayout({
  children
}: {
  children: React.ReactNode
  params: Promise<{ id: string }>
}) {
  return children
}