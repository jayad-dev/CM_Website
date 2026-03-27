"use client";

import { LatestNewsData } from "@/types/strapi";
import { Box, Button, Container, Group, Stack, Text, Title } from "@mantine/core";
import LatestNewsLeft from "./LatestNewsLeftSection";
import LatestNewsRight from "./LatestNewsRightSection";
import { useMemo, useState } from "react";

interface Props {
    data: LatestNewsData | null;
}

const LatestNews = ( { data }: Props ) => {
    const [activeCategory, setActiveCategory] = useState<string>( "All" );

    const categories = useMemo( () => {
        const list = data?.CategoryList ?? [];
        const names = list
            .map( ( c ) => c.name )
            .filter( Boolean )
            .map( ( n ) => String( n ).trim() )
            .filter( ( n ) => n.toLowerCase() !== "all" );
        const unique = Array.from( new Set( names ) );
        return ["All", ...unique];
    }, [data?.CategoryList] );

    const filteredNews = useMemo( () => {
        if ( !data ) return [];
        if ( activeCategory === "All" ) return data.NewsList;
        const key = activeCategory.toLowerCase().trim();
        return data.NewsList.filter( ( n ) =>
            ( n.categories ?? ( n.category ? [n.category] : [] ) )
                .some( ( c ) => c.name?.toLowerCase().trim() === key )
        );
    }, [activeCategory, data] );

    if ( !data ) return null;

    return (
        <Container size="lg" py={ 60 }>
            <Stack align="center" gap={ 8 } mb={ 30 }>
                <Title
                    ta="center"
                    mb={ 10 }
                    style={ {
                        fontFamily: "Philosopher",
                        fontWeight: 700,
                        fontSize: "48px",
                        lineHeight: "100%",
                        color: "#C84C5C",
                    } }
                >
                    { data?.Heading }
                </Title>
                <Text c="dimmed">{ data.Subheading }</Text>
            </Stack>

            { categories.length > 1 && (
                <Group justify="center" gap={ 10 } mb={ 30 } wrap="wrap">
                    { categories.map( ( name ) => {
                        const active = name === activeCategory;
                        return (
                            <Button
                                key={ name }
                                onClick={ () => setActiveCategory( name ) }
                                radius={ 100 }
                                h={ 44 }
                                px={ 20 }
                                style={ {
                                    background: active
                                        ? "linear-gradient(90deg, #E89117 0%, #FDA949 50.03%, #E89117 100.07%)"
                                        : "#f1f3f5",
                                    color: active ? "#fff" : "#495057",
                                } }
                            >
                                { name }
                            </Button>
                        );
                    } ) }
                </Group>
            ) }

            <Box
                style={ {
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    gap: 24,
                } }
            >
                <LatestNewsLeft article={ data.FeaturedArticle } />
                <LatestNewsRight news={ filteredNews } />
            </Box>
        </Container>
    );
};

export default LatestNews;