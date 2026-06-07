import { useEffect } from "react";
import gsap from "gsap";
import "./App.css";

function App() {
    useEffect(() => {
        gsap.from(".card" , {
            y : 100,
            opacity : 0,
            duration : 1,
            stagger : 0.3
        })
    })

    return (
        <div className="container">
            <div className="card">Card 1</div>
            <div className="card">Card 2</div>
            <div className="card">Card 3</div>
        </div>
    );
}
export default App;