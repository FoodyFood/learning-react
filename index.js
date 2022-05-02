function HomePage() {
    return (
      <div>
        {/* Nesting the Header component */}
        <Header />
        <Body />
      </div>
    )
}

const app = document.getElementById("app")

function Header() {
    return (<h1>Develop. Preview. Ship. 🚀</h1>)
}
function Body() {
    return (<p>Some kinda body</p>)
}

ReactDOM.render(<HomePage />, app)