import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";


export default function LightGallary() {

    // const arrayLength = 20;

    const onInit = () => {
        console.log("lightGallery has been initialized");
    };
    return (
        <>
            <div className="App">
                <LightGallery
                    elementClassNames="custom-wrapper-class"
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    onInit={onInit}
                >
                    <a href="https://picsum.photos/id/1015/800/600">
                        <img alt="img1" src="https://picsum.photos/id/1015/300/300" />
                    </a>
                    <a href="https://picsum.photos/id/1016/800/600">
                        <img alt="img2" src="https://picsum.photos/id/1016/400/300" />
                    </a>
                    <a href="https://picsum.photos/id/1022/800/600">
                        <img alt="img3" src="https://picsum.photos/id/1022/634/300" />
                    </a>
                    <a href="https://picsum.photos/id/1018/800/600">
                        <img alt="img4" src="https://picsum.photos/id/1018/667/600" />
                    </a>
                    <a href="https://picsum.photos/id/1019/800/600">
                        <img alt="img5" src="https://picsum.photos/id/1019/667/600" />
                    </a>
                    <a href="https://picsum.photos/id/1020/800/600">
                        <img alt="img6" src="https://picsum.photos/id/1020/500/300" />
                    </a>
                    <a href="https://picsum.photos/id/1021/800/600">
                        <img alt="img7" src="https://picsum.photos/id/1021/500/300" />
                    </a>
                </LightGallery>
            </div>
        </>
    );
}
