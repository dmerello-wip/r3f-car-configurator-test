import React, { useMemo } from 'react'
import { Text } from 'drei'


export default function TextComp() {
  const config = useMemo(
    () => ({
        font: '/fonts/Montserrat-Bold.ttf',
        fontSize: 5,
        color: "#ffffff",
        maxWidth: 300,
        lineHeight: 1,
        letterSpacing: 0,
        textAlign: "justify",
        materialType: "MeshPhongMaterial",
        anchorX: "center",
        anchorY: "bottom"
      }),
    []
  );

  return (
    <Text
      {...config}
    >
      hello world!
    </Text>
  )
}
