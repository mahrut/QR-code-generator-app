

import { QRCodeDisplay } from "@/components/qr-code-display"

export const metadata = {
  title: "Social Media Hub",
  description: "Scan the QR code to visit our social media links",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-muted p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-balance">Scan to Connect</h1>
          <p className="text-muted-foreground text-lg">Scan this QR code to visit our social media hub</p>
        </div>

        {/* QR Code - Centered */}
        <div className="flex justify-center">
          <QRCodeDisplay targetUrl="socials" />
        </div>
      </div>
    </main>
  )
}
