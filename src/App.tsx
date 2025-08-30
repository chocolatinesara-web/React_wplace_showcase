import React, { useState } from "react";
import Box from "@mui/material/Box";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Settings, { useSettings } from "./Settings";

function Playground() {
  const { photos, layout, columns, targetRowHeight, spacing, padding, width } = useSettings();
  const [index, setIndex] = useState<number | null>(null); // current photo index
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ width: `${width}%`, mx: "auto" }}>
      <PhotoAlbum
        photos={photos}
        layout={layout}
        columns={columns}
        spacing={spacing}
        padding={padding}
        targetRowHeight={targetRowHeight}
        render={{
          wrapper: ({ style, ...rest }) => (
            <div
              style={{
                ...style,
                borderRadius: "12px",
                border: "5px solid #ffffff",
                boxShadow: "0 8px 25px rgba(0,0,0,0.7)",
                backgroundColor: "#ffffff",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "scale(1.1) rotate(-1deg)";
                el.style.boxShadow = "0 15px 40px rgba(0,0,0,0.8)";
                el.style.zIndex = "10";
                el.style.borderImage = "linear-gradient(45deg, #42404bff, #FFA500) 1";
                el.style.borderStyle = "solid";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "scale(1) rotate(0deg)";
                el.style.boxShadow = "0 8px 25px rgba(0,0,0,0.7)";
                el.style.zIndex = "1";
                el.style.borderImage = "linear-gradient(45deg, #42404bff, #FFA500) 1";
                el.style.borderStyle = "solid";
              }}
              onClick={() => {
                setIndex(rest.index); // open the clicked image
                setOpen(true);
              }}
              {...rest}
            />
          ),
        }}
      />

      {open && index !== null && (
        <Lightbox
          open={open}
          index={index}
          close={() => setOpen(false)}
          slides={photos.map((p) => ({ src: p.src, title: p.alt }))}
        />
      )}
    </Box>
  );
}

export default function App() {
  return (
    <Settings>
      <Playground />
    </Settings>
  );
}
