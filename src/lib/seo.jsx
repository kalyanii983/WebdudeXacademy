import { useEffect } from 'react'
export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title
    let m = document.querySelector('meta[name="description"]')
    if (m) m.setAttribute('content', description)
  }, [title, description])
  return null
}
