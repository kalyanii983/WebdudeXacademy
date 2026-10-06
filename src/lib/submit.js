// Connect a real backend or form service here (Formspree, EmailJS, your API...).
// Replace the body of this function; it must resolve on success and throw on failure.
export async function submitEnquiry(data) {
  // Example: await fetch('https://formspree.io/f/YOUR_ID', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) })
  await new Promise((r) => setTimeout(r, 600))
  return data
}
