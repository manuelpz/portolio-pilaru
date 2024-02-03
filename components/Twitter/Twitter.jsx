'use client'
import { TwitterTweetEmbed } from 'react-twitter-embed'

export default function Twitter({ id }) {
    return (
        <TwitterTweetEmbed
            tweetId={id}
        />
    )
}
