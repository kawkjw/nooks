import React from "react";
import useAxios from "./useAxios";

const App = () => {
    const { loading, error, data, refetch } = useAxios({
        url:
            "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png",
    });
    console.log(`Loading:${loading}\nError:${error}\nData:${data}`);
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <img src={data ? data.config.url : data} alt="test" />
            <button onClick={refetch}>Refetch</button>
        </div>
    );
};

export default App;
