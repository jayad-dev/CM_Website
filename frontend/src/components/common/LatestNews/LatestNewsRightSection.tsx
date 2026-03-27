
import { NewsItem } from "@/types/strapi";
import { Card, Image, Stack, Text, Group, Box } from "@mantine/core";
import { IconCalendar, IconTag } from "@tabler/icons-react";
import { getMediaUrl } from "@/lib/strapi";

interface Props {
    news: NewsItem[];
}

const LatestNewsRight = ( { news }: Props ) => {
    return (
        <Stack gap={ 16 }>
            { news.map( ( item ) => (
                <Card key={ item.id } withBorder radius={ 16 } p={ 0 }>
                    <Group align="stretch" gap={ 0 } wrap="nowrap">
                        <Image
                            src={ getMediaUrl( item.image ) || undefined }
                            alt={ item.title || "News image" }
                            w={ 128 }
                            h={ 136 }
                            fit="cover"
                        />
                        <Box px={ 12 } py={ 10 } style={ { flex: 1 } }>
                            <Stack gap={ 6 }>
                                <Group gap={ 6 }>
                                    <IconTag size={ 14 } color="#E89117" />
                                    <Text size="xs" c="#6A7282" fw={ 500 }>
                                        { item.category?.name }
                                    </Text>
                                </Group>
                                <Text
                                    fw={ 700 }
                                    fz={ 18 }
                                    c="#E89117"
                                    lineClamp={ 2 }
                                    style={ {
                                        fontFamily: "Philosopher, serif",
                                        lineHeight: "125%",
                                    } }
                                >
                                    { item.title }
                                </Text>
                                <Group gap={ 6 } top={ 2 }>
                                    <IconCalendar size={ 14 } color="#868e96" />
                                    <Text size="xs" c="dimmed">
                                        { item.date }
                                    </Text>
                                </Group>

                            </Stack>
                        </Box>
                    </Group>
                </Card>
            ) ) }
        </Stack>
    );
};

export default LatestNewsRight;