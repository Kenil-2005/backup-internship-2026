import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";

export default function PreBuildLibrary() {

    const images = [
        {
            original: "https://picsum.photos/id/1011/800/600",
            thumbnail: "https://picsum.photos/id/1011/250/150",
            description: "Mountain landscape with lake",
        },
        {
            original: "https://picsum.photos/id/1012/800/600",
            thumbnail: "https://picsum.photos/id/1012/250/150",
            description: "Mountain landscape with lake",
        },
        {
            original: "https://picsum.photos/id/1013/800/600",
            thumbnail: "https://picsum.photos/id/1013/250/150",
            description: "Mountain landscape with lake",
        },
        {
            original: "https://picsum.photos/id/1014/800/600",
            thumbnail: "https://picsum.photos/id/1014/250/150",
            description: "Mountain landscape with lake",
        },
        {
            original: "https://picsum.photos/id/1015/800/600",
            thumbnail: "https://picsum.photos/id/1015/250/150",
            description: "Forest road view",
        },
        {
            original: "https://picsum.photos/id/1016/800/600",
            thumbnail: "https://picsum.photos/id/1016/250/150",
            description: "Snowy mountains",
        },
        {
            original: "https://picsum.photos/id/1020/800/600",
            thumbnail: "https://picsum.photos/id/1020/250/150",
            description: "Desert dunes",
        },
        {
            original: "https://picsum.photos/id/1024/800/600",
            thumbnail: "https://picsum.photos/id/1024/250/150",
            description: "Dog portrait",
        },
        {
            original: "https://picsum.photos/id/1027/800/600",
            thumbnail: "https://picsum.photos/id/1027/250/150",
            description: "Ocean waves",
        },
        {
            original: "https://picsum.photos/id/1035/800/600",
            thumbnail: "https://picsum.photos/id/1035/250/150",
            description: "River in forest",
        },
        {
            original: "https://picsum.photos/id/1039/800/600",
            thumbnail: "https://picsum.photos/id/1039/250/150",
            description: "City skyline",
        },
        {
            original: "https://picsum.photos/id/1043/800/600",
            thumbnail: "https://picsum.photos/id/1043/250/150",
            description: "Beach sunset",
        },
        {
            original: "https://picsum.photos/id/1050/800/600",
            thumbnail: "https://picsum.photos/id/1050/250/150",
            description: "Bridge architecture",
        },
        {
            original: "https://picsum.photos/id/1057/800/600",
            thumbnail: "https://picsum.photos/id/1057/250/150",
            description: "Foggy forest",
        },
        {
            original: "https://picsum.photos/id/1069/800/600",
            thumbnail: "https://picsum.photos/id/1069/250/150",
            description: "Waterfall view",
        }
    ];

    return (
        <div className="app">
            {/* <h1>Image Gallery Demo</h1> */}
            <ImageGallery items={images} />
        </div>
    );
}
