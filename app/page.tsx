'use client'

import { useState } from 'react'

export default function Home() {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)

  const sendRequest = async () => {
    setLoading(true)
    setCode('')
    try {
      const res = await fetch('/api/sendCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      })
      const data = await res.json()
      if (data.success) {
        setCode(data.code || '✅ الكود تم إرساله على رقمك!')
      } else {
        setCode(data.error || '❌ حدث خطأ ما!')
      }
    } catch (err) {
      setCode('⚠️ خطأ في الاتصال بالخادم')
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full space-y-4">
        <h1 className="text-xl font-bold text-center">🔗 تنصيب البوت الفرعي</h1>
        <input
          type="tel"
          placeholder="مثال: 9665XXXXXXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl text-right"
        />
        <button
          onClick={sendRequest}
          disabled={loading || phone.length < 10}
          className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
        >
          {loading ? 'جاري الإرسال...' : 'احصل على الكود'}
        </button>
        {code && (
          <div className="bg-gray-100 p-3 rounded-lg text-center font-mono text-lg">
            {code}
          </div>
        )}
      </div>
    </main>
  )
}
