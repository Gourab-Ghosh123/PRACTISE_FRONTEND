import "./Hero.css";

function Hero ({name , role}) {
    return (
        <>
            <h1>Hello , I'm {name}</h1>
            <p>{role}</p>
            <button>Hire Me</button>
            <button>Projects</button>
        </>
    );
}

export default Hero;