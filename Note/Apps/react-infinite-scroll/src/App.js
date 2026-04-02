//src/ App.js
import { useState } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
    const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
    const [hasMore, setHasMore] = useState(true);
    const fetchMoreData = () => {
        //MAKING THE API CALL HERE
        setTimeout(() => {
            if (dataSource.length === 100) {
                setHasMore(false);
            } else {
                setDataSource(dataSource.concat(Array.from({ length: 10 })));
                setHasMore(true);
            }
        }, 500);
    };
    return (
        <div className="App">
            <InfiniteScroll dataLength={dataSource.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<p>Loading...</p>}
            >
                <p><b>INFINITE SCROLL</b></p>
                {dataSource.map((item, index) => {
                    return <div key={index}
                        className="container-box" >Your Content Here {index + 1}</div>;
                })}
            </InfiniteScroll>

        </div>
    );
}

export default App;