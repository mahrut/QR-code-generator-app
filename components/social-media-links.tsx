// "use client"

// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Mail, Youtube, Facebook } from "lucide-react"

// import { InstagramIcon as TelegramIcon, GitForkIcon as TikTokIcon } from "lucide-react"

// const socialLinks = [
//   {
//     name: "TELEGRAM",
//     url: "https://t.me/TwoA21",
//     icon: TelegramIcon,
//     color: "hover:text-blue-400",
//   },
//   {
//     name: "TIKTOK",
//     url: "https://tiktok.com/@2atraningcenter",
//     icon: TikTokIcon,
//     color: "hover:text-black dark:hover:text-white",
//   },
//   {
//     name: "TIKTOK",
//     url: "https://tiktok.com/@TWO26",
//     icon: TikTokIcon,
//     color: "hover:text-black dark:hover:text-white",
//   },
//   {
//     name: "Facebook",
//     url: "https://facebook.com/TowACoc",
//     icon: Facebook,
//     color: "hover:text-blue-600",
//   },
// //   {
// //     name: "YouTube",
// //     url: "https://youtube.com",
// //     icon: Youtube,
// //     color: "hover:text-red-600",
// //   },
// //   {
// //     name: "Email",
// //     url: "mailto:hello@example.com",
// //     icon: Mail,
// //     color: "hover:text-orange-500",
// //   },
// ]

// export function SocialMediaLinks() {
//   return (
//     <Card className="p-8 bg-card border border-border">
//       <h2 className="text-2xl font-bold mb-6">Follow Me</h2>

//       <div className="space-y-4">
//         {socialLinks.map((link) => {
//           const Icon = link.icon
//           return (
//             <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="block">
//               <Button variant="outline" className="w-full justify-start gap-3 h-12 text-base bg-transparent">
//                 <Icon className={`w-5 h-5 transition-colors ${link.color}`} />
//                 <span>{link.name}</span>
//               </Button>
//             </a>
//           )
//         })}
//       </div>

//       {/* <p className="text-sm text-muted-foreground mt-8 p-4 bg-muted rounded-lg">
//         💡 <strong>Tip:</strong> Scan the QR code to visit this page from anywhere!
//       </p> */}
//     </Card>
//   )
// }


"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Youtube, Facebook } from "lucide-react"

import { InstagramIcon as TelegramIcon, GitForkIcon as TikTokIcon } from "lucide-react"

const socialLinks = [
  {
    name: "TELEGRAM",
    url: "https://t.me/TwoA21",
    icon: TelegramIcon,
    color: "hover:text-blue-400",
  },
  {
    name: "TIKTOK",
    url: "https://tiktok.com/@2atraningcenter",
    icon: TikTokIcon,
    color: "hover:text-black dark:hover:text-white",
  },
  {
    name: "TIKTOK",
    url: "https://tiktok.com/@TWO26",
    icon: TikTokIcon,
    color: "hover:text-black dark:hover:text-white",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/TowACoc",
    icon: Facebook,
    color: "hover:text-blue-600",
  },
//   {
//     name: "YouTube",
//     url: "https://youtube.com",
//     icon: Youtube,
//     color: "hover:text-red-600",
//   },
//   {
//     name: "Email",
//     url: "mailto:hello@example.com",
//     icon: Mail,
//     color: "hover:text-orange-500",
//   },
]

export function SocialMediaLinks() {
  return (
    <Card className="p-8 bg-card border border-border shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Contact with us
      </h2>

      <div className="space-y-4">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="block">
              <Button
                variant="outline"
                className="w-full justify-start gap-3 h-12 text-base bg-transparent hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
              >
                <Icon className={`w-5 h-5 transition-colors ${link.color}`} />
                <span>{link.name}</span>
              </Button>
            </a>
          )
        })}
      </div>

      <p className="text-sm text-muted-foreground mt-8 p-4 bg-muted rounded-lg">
        💡 <strong>Tip:</strong> Scan the QR code to visit this page from anywhere!
      </p>
    </Card>
  )
}
