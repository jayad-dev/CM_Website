
"use client";
import { SimpleGrid, Box } from "@mantine/core";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardGrid({ children }: Props) {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
      spacing={32}
      verticalSpacing={32}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <Box key={index} w="100%" style={{ display: "flex", justifyContent: "center" }}>
              {child}
            </Box>
          ))
        : children}
    </SimpleGrid>
  );
}