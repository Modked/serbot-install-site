import './globals.css'

export const metadata = {
  title: 'تنصيب بوت فرعي',
  description: 'ادخل رقمك واحصل على كود ربط البوت الفرعي تلقائيًا',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
