export default function FooterSplash() {
    const splashes = ["jGrasp >>>", "(0-0) the flickering", "Ready To Program!", "from HoltSoft", "also try Turing", "c>java>turing", "(._.)"];
    const splash = splashes[Math.floor(Math.random() * splashes.length)];
    return (
        <span>{splash}</span>
    )
}