import { NewsItem } from "@/types/strapi";
import { Card, Image, Stack, Text, Badge } from "@mantine/core";
import { getMediaUrl } from "@/lib/strapi";

interface Props {
    news: NewsItem[];
}

const LatestNewsRight = ( { news }: Props ) => {
    return (
        <Stack gap={ 16 }>
            { news.map( ( item ) => (
                <Card key={ item.id } p={ 10 } radius="md" withBorder>
                    <Stack style={ { flexDirection: "row", gap: 10 } }>
                        <Image
                            src={ getMediaUrl( item.image ) || undefined }
                            alt={ item.title || "News image" }
                            w={ 90 }
                            h={ 70 }
                            radius="md"
                        />

                        <Stack gap={ 4 }>
                            <Badge size="xs">
                                { item.category?.name }
                            </Badge>

                            <Text fw={ 600 } fz={ 14 } lineClamp={ 2 }>
                                { item.title }
                            </Text>

                            <Text fz={ 12 } c="dimmed">
                                { item.date }
                            </Text>
                        </Stack>
                    </Stack>
                </Card>
            ) ) }
        </Stack>
    );
};

export default LatestNewsRight;