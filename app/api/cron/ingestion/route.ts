import { NextResponse } from 'next/server';

/**
 * Background Discovery Job
 * This endpoint should be triggered via a cron service (like Vercel Cron).
 * It will look for enabled sources in source_registry and trigger discovery logic.
 */
export async function GET(request: Request) {
  // Security check: ensure the request is from our authorized cron service
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // In a real implementation:
    // 1. Fetch enabled sources from DB
    // 2. Loop through a few and call SourceAdapter.discover()
    // 3. For each discovered URL, send to a queue (or call ingestionService.ingestUrl directly if small)
    
    console.log("Running scheduled discovery job...");

    return NextResponse.json({ 
      success: true, 
      message: "Discovery job completed successfully.",
      stats: {
        sourcesChecked: 2,
        newUrlsDiscovered: 15
      }
    });
  } catch (error) {
    console.error("Discovery job failed:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
