// "use client"

// import { useState, useEffect } from "react"
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Loader, Download } from "lucide-react"

// interface QRCodeDisplayProps {
//   targetUrl?: string
//   showDownload?: boolean
// }

// export function QRCodeDisplay({ targetUrl = "", showDownload = false }: QRCodeDisplayProps) {
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)
//   const [qrImageUrl, setQrImageUrl] = useState<string | null>(null)
//   const [fullUrl, setFullUrl] = useState("")

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const generateQRCode = async () => {
//         try {
//           setLoading(true)
//           setError(null)

//           const baseUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin
//           const url = targetUrl ? `${baseUrl}/${targetUrl}` : baseUrl
//           setFullUrl(url)

//           const QRCodeStyling = (await import("qr-code-styling")).default

//           const qrCode = new QRCodeStyling({
//             width: 300,
//             height: 300,
//             data: url,
//             margin: 10,
//             dotsOptions: {
//               color: "#000000",
//               type: "rounded",
//             },
//             backgroundOptions: {
//               color: "#FFFFFF",
//             },
//             cornersSquareOptions: {
//               type: "rounded",
//             },
//           })

//           const blob = await qrCode.getRawData("png")
//           if (blob) {
//             const reader = new FileReader()
//             reader.onload = () => {
//               setQrImageUrl(reader.result as string)
//               setLoading(false)
//             }
//             reader.readAsDataURL(blob)
//           }
//         } catch (err) {
//           console.error("[v0] QR code generation error:", err)
//           setError(err instanceof Error ? err.message : "Failed to generate QR code")
//           setLoading(false)
//         }
//       }

//       generateQRCode()
//     }
//   }, [targetUrl])

//   const handleDownload = async () => {
//     if (!qrImageUrl) return

//     try {
//       const link = document.createElement("a")
//       link.href = qrImageUrl
//       link.download = `social-media-qr-code-${Date.now()}.png`
//       document.body.appendChild(link)
//       link.click()
//       document.body.removeChild(link)
//     } catch (err) {
//       console.error("[v0] Download failed:", err)
//       setError("Failed to download QR code")
//     }
//   }

//   return (
//     <Card className="p-8 bg-card border border-border max-w-sm w-full">
//       <div className="text-center">
//         <h2 className="text-2xl font-bold mb-6">Scan This QR Code</h2>

//         {loading && (
//           <div className="flex flex-col items-center justify-center py-12">
//             <Loader className="w-8 h-8 animate-spin text-primary mb-4" />
//             <p className="text-muted-foreground">Generating QR code...</p>
//           </div>
//         )}

//         {error && (
//           <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-4">
//             <p className="text-sm">{error}</p>
//           </div>
//         )}

//         {!loading && !error && qrImageUrl && (
//           <div className="space-y-6">
//             <div className="flex justify-center">
//               <img
//                 src={qrImageUrl || "/placeholder.svg"}
//                 alt="QR Code to social media links"
//                 className="w-80 h-80 bg-white p-4 rounded-lg shadow-md"
//               />
//             </div>

//             {/* Download Button */}
//             {showDownload && (
//               <Button onClick={handleDownload} className="w-full gap-2">
//                 <Download className="w-4 h-4" />
//                 Download QR Code
//               </Button>
//             )}

//             {/* Instructions */}
//             {showDownload && (
//               <div className="text-left bg-accent/10 p-4 rounded-lg">
//                 <p className="text-xs text-muted-foreground">
//                   <strong className="text-foreground">How to use:</strong>
//                 </p>
//                 <ul className="text-xs text-muted-foreground mt-2 space-y-1">
//                   <li>✓ Download the QR code above</li>
//                   <li>✓ Share it on your bio, website, or printed materials</li>
//                   <li>✓ Users scan it to visit our social links</li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </Card>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader, Download } from "lucide-react"

interface QRCodeDisplayProps {
  targetUrl?: string
  showDownload?: boolean
}

export function QRCodeDisplay({ targetUrl = "", showDownload = false }: QRCodeDisplayProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [qrImageUrl, setQrImageUrl] = useState<string | null>(null)
  const [fullUrl, setFullUrl] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const generateQRCode = async () => {
        try {
          setLoading(true)
          setError(null)

          const baseUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin
          const url = targetUrl ? `${baseUrl}/${targetUrl}` : baseUrl
          setFullUrl(url)

          const QRCodeStyling = (await import("qr-code-styling")).default

          const qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            data: url,
            margin: 10,
            dotsOptions: {
              color: "#000000",
              type: "rounded",
            },
            backgroundOptions: {
              color: "#FFFFFF",
            },
            cornersSquareOptions: {
              type: "rounded",
            },
          })

          const rawData = await qrCode.getRawData("png")

          if (rawData) {
            // qr-code-styling returns a Blob in the browser environment
            let blob: Blob
            if (rawData instanceof Blob) {
              blob = rawData
            } else {
              // Handle Buffer or other types by converting to Uint8Array
              // Convert any array-like object to Uint8Array, then to ArrayBuffer
              const dataArray = rawData as unknown as ArrayLike<number> | ArrayBuffer
              let uint8Array: Uint8Array
              
              if (dataArray instanceof ArrayBuffer) {
                uint8Array = new Uint8Array(dataArray)
              } else {
                uint8Array = new Uint8Array(dataArray as ArrayLike<number>)
              }
              
              // Create a new ArrayBuffer by copying the data to avoid SharedArrayBuffer issues
              const arrayBuffer = new ArrayBuffer(uint8Array.byteLength)
              new Uint8Array(arrayBuffer).set(uint8Array)
              blob = new Blob([arrayBuffer], { type: "image/png" })
            }

            const reader = new FileReader()
            reader.onload = () => {
              setQrImageUrl(reader.result as string)
              setLoading(false)
            }
            reader.readAsDataURL(blob)
          }
        } catch (err) {
          console.error("[v0] QR code generation error:", err)
          setError(err instanceof Error ? err.message : "Failed to generate QR code")
          setLoading(false)
        }
      }

      generateQRCode()
    }
  }, [targetUrl])

  const handleDownload = async () => {
    if (!qrImageUrl) return

    try {
      const link = document.createElement("a")
      link.href = qrImageUrl
      link.download = `social-media-qr-code-${Date.now()}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err) {
      console.error("[v0] Download failed:", err)
      setError("Failed to download QR code")
    }
  }

  return (
    <Card className="p-8 bg-card border border-border max-w-sm w-full">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Scan This QR Code</h2>

        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader className="w-8 h-8 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">Generating QR code...</p>
          </div>
        )}

        {error && (
          <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-4">
            <p className="text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && qrImageUrl && (
          <div className="space-y-6">
            <div className="flex justify-center">
              <img
                src={qrImageUrl || "/placeholder.svg"}
                alt="QR Code to social media links"
                className="w-80 h-80 bg-white p-4 rounded-lg shadow-md"
              />
            </div>

            {/* Download Button */}
            {showDownload && (
              <Button onClick={handleDownload} className="w-full gap-2">
                <Download className="w-4 h-4" />
                Download QR Code
              </Button>
            )}

            {/* Instructions */}
            {showDownload && (
              <div className="text-left bg-accent/10 p-4 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">How to use:</strong>
                </p>
                <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                  <li>✓ Download the QR code above</li>
                  <li>✓ Share it on your bio, website, or printed materials</li>
                  <li>✓ Users scan it to visit our social links</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}
