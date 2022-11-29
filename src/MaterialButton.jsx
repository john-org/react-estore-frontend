import React from "react";

import Button from "@mui/material/Button";

export default function MaterialButton({
  style,
  size,
  variant,
  func,
  children,
}) {
  return (
    <Button
      style={style}
      size={size}
      variant={variant}
      onClick={func}
      //   onClick={() => {
      //     alert("clicked");
      //   }}
    >
      {children}
    </Button>
  );
}
