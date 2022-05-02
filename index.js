function HomePage() {
    return (
      <div>
        {/* Nesting the Header component */}
        <Header />
        <Body bodyText='hi my name is' color='blue' backgroundColor='green'/>
      </div>
    )
}

const app = document.getElementById("app")

function Header() {
    return (<h1>Develop. Preview. Ship. 🚀</h1>)
}

function Body(props) {
    return (<p style={{...props}}>{props.bodyText}</p>)
}

ReactDOM.render(<HomePage />, app)