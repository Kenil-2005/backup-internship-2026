import { RowsPhotoAlbum, ColumnsPhotoAlbum, MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import "react-photo-album/columns.css";
import "react-photo-album/masonry.css";

const ReactPhotoAlbum = () => {

    const photos = [
        {
            src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            width: 800,
            height: 600,
        },
        {
            src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1600&q=80",
            width: 1600,
            height: 900,
        },
        {
            src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
            width: 1200,
            height: 800,
        },
        {
            src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1000&q=80",
            width: 1000,
            height: 667,
        },
        {
            src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=80",
            width: 1400,
            height: 933,
        },
        {
            src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
            width: 1200,
            height: 800,
        },
        {
            src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1100&q=80",
            width: 1100,
            height: 733,
        },
        {
            src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80",
            width: 1500,
            height: 1000,
        },
        {
            src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1300&q=80",
            width: 1300,
            height: 867,
        },
        {
            src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
            width: 1000,
            height: 667,
        },
        {
            src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
            width: 1200,
            height: 800,
        },
        {
            src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1400&q=80",
            width: 1400,
            height: 933,
        },
        {
            src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1100&q=80",
            width: 1100,
            height: 733,
        },
        {
            src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1350&q=80",
            width: 1350,
            height: 900,
        },
    ];

    return (
        <>
            <RowsPhotoAlbum
                photos={photos}
                componentsProps={(containerWidth) => ({
                    image: { loading: (containerWidth || 0) > 600 ? "eager" : "lazy" },
                })}
            />

            <br />
            <br />
            <hr />
            <br />
            <br />
            
            
            <ColumnsPhotoAlbum photos={photos} />
            
            
            <br />
            <br />
            <hr />
            <br />
            <br />


            <MasonryPhotoAlbum photos={photos} />
        </>
    );
};

export default ReactPhotoAlbum;
