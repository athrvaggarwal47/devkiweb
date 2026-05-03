# Instagram Feed Integration Setup

This guide will help you connect your Instagram account to automatically display your latest posts and reels on the website.

## Overview

The website now includes:
- **Instagram Feed Section**: Displays your 4 latest Instagram posts/reels on the homepage
- **Social Media Links Section**: Prominent social media buttons for Instagram, Facebook, YouTube, LinkedIn, and Twitter
- **Footer Social Icons**: Quick access to all your social profiles
- **Auto-refresh**: Instagram feed updates automatically every hour

## Step 1: Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **"My Apps"** → **"Create App"**
3. Choose **"Business"** as the app type
4. Fill in:
   - **App Name**: "Devki Nandan & Sons Website"
   - **App Contact Email**: puneet@devkinandanandsons.com
5. Click **"Create App"**

## Step 2: Add Instagram Basic Display

1. In your app dashboard, scroll down to **"Add Products"**
2. Find **"Instagram Basic Display"** and click **"Set Up"**
3. Click **"Create New App"** in the Instagram Basic Display section
4. Accept the terms and click **"Create App"**

## Step 3: Configure Instagram Basic Display

1. Go to **Basic Display** → **Settings**
2. Add the following URLs:
   - **Valid OAuth Redirect URIs**: `https://devkinandanandsons.com/`
   - **Deauthorize Callback URL**: `https://devkinandanandsons.com/`
   - **Data Deletion Request URL**: `https://devkinandanandsons.com/`
3. Click **"Save Changes"**

## Step 4: Add Instagram Test User

1. Scroll down to **"User Token Generator"**
2. Click **"Add or Remove Instagram Testers"**
3. In the Instagram app, go to **Settings** → **Apps and Websites** → **Tester Invites**
4. Accept the invitation

## Step 5: Generate Access Token

1. Back in Facebook Developers, go to **Basic Display** → **User Token Generator**
2. Click **"Generate Token"** next to your Instagram account
3. Log in to Instagram and authorize the app
4. Copy the **Access Token** (it will look like: `IGQVJXa1B2c3...`)

## Step 6: Get Long-Lived Access Token

The token from Step 5 expires in 1 hour. Convert it to a long-lived token (60 days):

```bash
curl -X GET "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=YOUR_APP_SECRET&access_token=YOUR_SHORT_LIVED_TOKEN"
```

Replace:
- `YOUR_APP_SECRET`: Found in **App Settings** → **Basic** → **App Secret**
- `YOUR_SHORT_LIVED_TOKEN`: The token from Step 5

The response will contain your long-lived token:
```json
{
  "access_token": "IGQVJYour_Long_Lived_Token...",
  "token_type": "bearer",
  "expires_in": 5183944
}
```

## Step 7: Add Token to Environment Variables

1. Create a `.env.local` file in the project root (if it doesn't exist)
2. Add your long-lived access token:

```env
INSTAGRAM_ACCESS_TOKEN=IGQVJYour_Long_Lived_Token_Here
```

3. **Never commit this file to Git** (it's already in `.gitignore`)

## Step 8: Deploy to Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name**: `INSTAGRAM_ACCESS_TOKEN`
   - **Value**: Your long-lived token
   - **Environment**: Production, Preview, Development
5. Click **"Save"**
6. Redeploy your site

## Step 9: Refresh Token (Every 60 Days)

Long-lived tokens expire after 60 days. To refresh:

```bash
curl -X GET "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=YOUR_CURRENT_TOKEN"
```

This gives you a new 60-day token. Update it in Vercel environment variables.

## Customization Options

### Change Number of Posts Displayed

Edit `components/ui/InstagramFeed.tsx`:

```tsx
{posts.slice(0, 4).map((post) => (  // Change 4 to any number
```

### Change Cache Duration

Edit `app/api/instagram/route.ts`:

```tsx
next: { revalidate: 3600 }, // Change 3600 (1 hour) to desired seconds
```

### Update Social Media Links

Edit `components/ui/SocialLinks.tsx` to update URLs:

```tsx
const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/YOUR_HANDLE", // Update this
    // ...
  },
  // ...
];
```

## Troubleshooting

### No Posts Showing

1. Check if `INSTAGRAM_ACCESS_TOKEN` is set in environment variables
2. Verify the token hasn't expired (60 days)
3. Check browser console for errors
4. Ensure your Instagram account is public or the app has proper permissions

### "Failed to fetch Instagram posts"

1. Verify the access token is valid
2. Check if you've exceeded Instagram API rate limits (200 requests/hour)
3. Ensure your Instagram account has at least one post

### Token Expired

Follow Step 9 to refresh your token and update environment variables.

## API Rate Limits

- **Instagram Basic Display API**: 200 requests per hour per user
- **Website caching**: 1 request per hour (configured in the API route)

## Security Notes

- Never commit `.env.local` to Git
- Never share your access token publicly
- Rotate tokens regularly
- Use environment variables for all sensitive data

## Support

For issues with:
- **Instagram API**: [Instagram Platform Documentation](https://developers.facebook.com/docs/instagram-basic-display-api)
- **Website integration**: Contact your developer

---

**Last Updated**: May 2026
