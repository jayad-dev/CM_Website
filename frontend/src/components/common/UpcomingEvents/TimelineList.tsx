// import { Box, Stack } from "@mantine/core";
// import { UpcomingEventItem } from "@/types/strapi";
// import EventCard from "./EventCard";
// import Image from "next/image";

// interface Props {
//     events: UpcomingEventItem[];
//     selected: UpcomingEventItem | null;
//     onSelect: ( event: UpcomingEventItem ) => void;
// }

// export default function TimelineList( { events, selected, onSelect }: Props ) {
//     console.log( events, 'events' );

//     return (
//         <Stack gap="xl" pos="relative">

//             {/* Vertical line */ }
//             <Box
//                 pos="absolute"
//                 left={ 30 }
//                 top={ 0 }
//                 bottom={ 0 }
//                 w={ 2 }
//                 bg="linear-gradient(#ff8a00, #7b61ff)"
//             />

//             { events.map( ( item, index ) => {
//                 const iconUrl =
//                     item.Icon?.data?.url || item.Icon?.url || "";

//                 return (
//                     <Box key={ item.id } pos="relative" pl={ 80 }>

//                         {/* ICON */ }
//                         <Box
//                             pos="absolute"
//                             left={ 0 }
//                             top={ 0 }
//                             w={ 60 }
//                             h={ 60 }
//                             style={ {
//                                 borderRadius: 16,
//                                 background: "#fff",
//                                 display: "flex",
//                                 alignItems: "center",
//                                 justifyContent: "center",
//                                 boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
//                             } }
//                         >
//                             { iconUrl && (
//                                 <Image src={ iconUrl } alt="icon" width={ 28 } height={ 28 } />
//                             ) }
//                         </Box>

//                         {/* CARD */ }
//                         <EventCard
//                             item={ item }
//                             active={ selected?.id === item.id }
//                             onClick={ () => onSelect( item ) }
//                         />
//                     </Box>
//                 );
//             } ) }
//         </Stack>
//     );
// }
"use client";

import { Box, Stack } from "@mantine/core";
import { UpcomingEventItem } from "@/types/strapi";
import EventCard from "./EventCard";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";

interface Props {
    events: UpcomingEventItem[];
    selected: UpcomingEventItem | null;
    onSelect: ( event: UpcomingEventItem ) => void;
}

export default function TimelineList( { events, selected, onSelect }: Props ) {
    return (
        <Stack gap="xl" pos="relative">

            {/* Vertical line */ }
            <Box
                pos="absolute"
                left={ 30 }
                top={ 0 }
                bottom={ 0 }
                w={ 2 }
                bg="linear-gradient(180deg, #ff8a00 0%, #7b61ff 100%)"
            />

            { events.map( ( item ) => {
                const iconUrl = getStrapiMedia( item.Icon?.url ) || "";
                // console.log( iconUrl, 'iconUrl' );


                return (
                    <Box key={ item.id } pos="relative" pl={ 80 }>
                        <Box
                            pos="absolute"
                            left={ 0 }
                            top={ 0 }
                            w={ 60 }
                            h={ 60 }
                            bg="#fff"
                            style={ {
                                borderRadius: 16,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                            } }
                        >
                            { iconUrl && (
                                <Image
                                    src={ iconUrl }
                                    alt={ item.Title || "icon" }
                                    width={ 28 }
                                    height={ 28 }
                                    style={ {
                                        objectFit: "contain",
                                        display: "block",
                                    } }
                                    unoptimized
                                />
                            ) }
                        </Box>
                        <EventCard
                            item={ item }
                            active={ selected?.id === item.id }
                            onClick={ () => onSelect( item ) }
                        />
                    </Box>
                );
            } ) }
        </Stack>
    );
}