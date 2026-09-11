import trollFace from '/troll-face.jpg'

export default function First() {
    return (
        <header className="header text-black">
            <img 
                src={trollFace} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}