// import { SocialMediaLinks } from "@/components/social-media-links"

// export const metadata = {
//   title: "Our Social Media Links",
//   description: "Follow us on all social media platforms",
// }

// export default function SocialsPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-background to-muted p-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold mb-2 text-balance">Follow Us</h1>
//           <p className="text-muted-foreground text-lg">Connect with us across all platforms</p>
//         </div>

//         {/* Social Media Links - Centered */}
//         <div className="flex justify-center">
//           <div className="w-full max-w-md">
//             <SocialMediaLinks />
//           </div>
//         </div>

//         {/* Back to home link */}
//         <div className="text-center mt-12">
//           <a href="/" className="text-primary hover:underline text-sm">
//             ← Back to QR Code
//           </a>
//         </div>
//       </div>
//     </main>
//   )
// }


import { SocialMediaLinks } from "@/components/social-media-links"

export const metadata = {
  title: "Our Social Media Links",
  description: "Follow us on all social media platforms",
}

export default function SocialsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-muted p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 text-balance text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            ቱ ኤ አረብ ሀገር ተጓዦች ማሰልጠኛ ተቋም
          </h1>
          <p className="text-muted-foreground text-lg font-medium">Contact with us across all platforms</p>
        </div>

        {/* Social Media Links - Centered */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <SocialMediaLinks />
          </div>
        </div>

        {/* Back to home link */}
        <div className="text-center mt-12">
          <a href="/" className="text-primary hover:underline text-sm">
            ← Back to QR Code
          </a>
        </div>
      </div>
    </main>
  )
}
