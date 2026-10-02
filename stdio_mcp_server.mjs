#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "remotefrontendjobs",
  boardId: "remotefrontendjobs-official",
  domain: "remotefrontendjobs.com",
  npmName: "zc-remotefrontendjobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
