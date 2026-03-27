import { Box, Image, Text, Badge, Stack } from "@mantine/core";
import { NewsItem } from "@/types/strapi";
import { getMediaUrl } from "@/lib/strapi";

interface Props {
    article: NewsItem | null;
}

const LatestNewsLeft = ( { article }: Props ) => {
    if ( !article ) return null;
    return (
        <Box
            style={ {
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
            } }
        >
            <Image
                src={ getMediaUrl( article.image ) || undefined }
                alt={ article.title || "Featured news image" }
                h={ 420 }
                fit="cover"
            />

            <Box
                style={ {
                    position: "absolute",
                    bottom: 0,
                    padding: 24,
                    width: "100%",
                    background:
                        "linear-gradient(transparent, rgba(0,0,0,0.8))",
                } }
            >
                <Stack gap={ 6 }>
                    <Badge color="#FF6B35">
                        { article.category?.name }
                    </Badge>

                    <Text fz={ 28 } fw={ 700 } c="orange.4">
                        { article.title }
                    </Text>

                    <Text c="gray.3">{ article.description }</Text>

                    <Text c="gray.5" fz={ 12 }>
                        { article.date }
                    </Text>
                </Stack>
            </Box>
        </Box>
    );
};

export default LatestNewsLeft;
