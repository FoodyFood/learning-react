function HomePage() {
    return (
        <>
            <Header />
            <Main bodyText='hi my name is' color='blue' backgroundColor='green'/>
            <Footer />
        </>
    )
}

const app = document.getElementById("app")

function Header() {
    return (<h1>Develop. Preview. Ship. 🚀</h1>)
}

function Main(props) {
    return (<p style={{...props}}>{props.bodyText}</p>)
}

function Footer() {
    return (<footer style={{position: 'absolute', bottom: 0, marginTop: '40px', height :'40px}'}}>Footer Copywrite Example: {new Date().getFullYear()}</footer>)
}

ReactDOM.render(<HomePage />, app)