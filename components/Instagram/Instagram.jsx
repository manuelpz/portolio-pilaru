'use client'
import { InstagramEmbed } from 'react-social-media-embed'
export default function Instagram({ url}) {
  return (
    <div>
          <InstagramEmbed url={url} />
    </div>
  )
}
