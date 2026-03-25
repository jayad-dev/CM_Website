import { LatestNewsData } from "@/types/strapi";
import { Box, Container, Stack, Text } from "@mantine/core";
import LatestNewsLeft from "./LatestNewsLeftSection";
import LatestNewsRight from "./LatestNewsRightSection";

interface Props {
    data: LatestNewsData | null;
}

const LatestNews = ( { data }: Props ) => {
    if ( !data ) return null;

    return (
        <Container size="lg" py={ 60 }>
            <Stack align="center" gap={ 8 } mb={ 30 }>
                <Text fw={ 700 } fz={ 36 } c="red.7">
                    { data.Heading }
                </Text>
                <Text c="dimmed">{ data.Subheading }</Text>
            </Stack>

            <Box
                style={ {
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    gap: 24,
                } }
            >
                <LatestNewsLeft article={ data.FeaturedArticle } />
                <LatestNewsRight news={ data.NewsList } />
            </Box>
        </Container>
    );
};

export default LatestNews;