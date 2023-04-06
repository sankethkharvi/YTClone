import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "./";

const Videos = ({ videos, direction }) => (
  <Stack
    direction="row"
    flexWrap="wrap"
    justifyContent="start"
    alignItems="start"
    gap={2}
  >
    {videos.map((item, idx) => (
      <Box key={idx}>
        {item.id.channelId && <ChannelCard channelDetail={item} />}
        {item.id.videoId && <VideoCard video={item} />}
      </Box>
    ))}
  </Stack>
);

export default Videos;
