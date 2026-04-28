export default function SocialSharePanel({ message, url, emailSubject, onCopy }) {
  const encodedMessage = encodeURIComponent(`${message} ${url}`)
  const encodedUrl = encodeURIComponent(url)

  return (
    <div className="challenge-share-panel" aria-label="Share options">
      <a
        className="challenge-share-link"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        Facebook
      </a>
      <a
        className="challenge-share-link"
        href={`https://twitter.com/intent/tweet?text=${encodedMessage}`}
        target="_blank"
        rel="noreferrer"
      >
        X
      </a>
      <a
        className="challenge-share-link"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="challenge-share-link"
        href={`https://api.whatsapp.com/send?text=${encodedMessage}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
      <a className="challenge-share-link" href={`mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodedMessage}`}>
        Email
      </a>
      <button className="challenge-share-link" type="button" onClick={() => onCopy(`${message} ${url}`)}>
        Copy Link
      </button>
      <button className="challenge-share-link" type="button" onClick={() => onCopy(`${message} ${url}`)}>
        Copy for Instagram
      </button>
    </div>
  )
}
