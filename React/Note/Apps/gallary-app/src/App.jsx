import "./App.css";
import LightGallary from "./components/LightGallary";
import ReactImageGallary from "./components/ReactImageGallary";
import ReactPhotoAlbum from "./components/ReactPhotoAlbum";

function App() {

    return (
        <>
            <ReactImageGallary />
            <hr />
            <LightGallary />
            <hr />
            <ReactPhotoAlbum />
        </>
    );
}

export default App;
