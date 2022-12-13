import NextHead from 'next/head';
import React from 'react';

import { GoogleAnalytics } from '../GoogleAnalytics/GoogleAnalytics';

export interface HeadProps {
    title?: string;
    description?: string;
    ogImage?: string;
}

export const Head = (props: HeadProps) => {
    const {
        ogImage = 'https://res.cloudinary.com/dpv0ukspz/image/upload/v1650138958/og-100_mvbgru.jpg',
        title = 'Bloggy',
        description = 'Creative Blog',
    } = props;

    return (
        <NextHead>
            <title>{` ${title}`}</title>
    <meta name="description" content={description} />
    <link
    rel="icon"
    href="/favicon.ico"
    />

    <meta property="og:type" content="website" />
    <meta property="og:title" content={` ${title}`} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={`${title}`} />
    <meta name="twitter:description" content={description} />

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <GoogleAnalytics />
        </NextHead>
);
};