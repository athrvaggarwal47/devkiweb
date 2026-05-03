import { NextResponse } from "next/server";

interface InstagramPost {
  id: string;
  caption: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

interface InstagramApiResponse {
  data: InstagramPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    return NextResponse.json(
      {
        posts: [],
        error: "Instagram access token not configured",
      },
      { status: 200 }
    );
  }

  try {
    const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
    const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${accessToken}&limit=8`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error("Instagram API error:", response.status, response.statusText);
      return NextResponse.json(
        {
          posts: [],
          error: "Failed to fetch Instagram posts",
        },
        { status: 200 }
      );
    }

    const data: InstagramApiResponse = await response.json();

    return NextResponse.json({
      posts: data.data || [],
      success: true,
    });
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    return NextResponse.json(
      {
        posts: [],
        error: "Failed to fetch Instagram posts",
      },
      { status: 200 }
    );
  }
}
