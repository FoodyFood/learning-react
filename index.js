const app = document.getElementById("app")

const campaigns =
[
    {
        "CampaignName": "Monday Campaign",
        "CampaignDescription": "This is the one we run on Mondays",
        "CampaignContents": [
            {
                "ProductName": "Tasty Lobbies",
                "ProductSpecial": "20% off lobsters",
                "ProductSpecialDescription": "Best in the west, home grown lobster"
            }
        ]
    },
    {
        "CampaignName": "Tuesday Campaign",
        "CampaignDescription": "This is the one we run on Tuesdays",
        "CampaignContents": [
            {
                "ProductName": "Huge Beers",
                "ProductSpecial": "20% extra beer in every pint!",
                "ProductSpecialDescription": "Don't spill it or you're fired"
            }
        ]
    }
]


function HomePage() {
    return (
        <>
            <Header />
            <Main/>
            <Footer />
        </>
    )
}


function Header() {
    return (<h1>The Dirty Burger</h1>)
}

function Main() {
    return (
        <>
            <BurgerButton/>
            <Campaigns/>
        </>
    )
}

function Footer() {
    return (<footer style={{position: 'absolute', bottom: 0, marginTop: '40px', height :'40px}'}}>Footer Copywrite Example: {new Date().getFullYear()}</footer>)
}


function BurgerButton() {
    const [likes, setLikes] = React.useState(1)

    function BurgerPlus() {
        setLikes(likes + 1)
        console.log(likes)
        return
    }

    return (
        <div>
            <button onClick={BurgerPlus}>1 Burger Please</button>
        </div>
    )
}

function Campaigns(props) {
    return (
        <ul>
            {campaigns.map(campaign => (
                <>
                    <h3>{campaign.CampaignName}</h3>
                    <li>{campaign.CampaignDescription}</li>
                    <ul>
                        {campaign.CampaignContents.map(campaignContent => (
                            <>
                                <li>{campaignContent.ProductName}</li>
                                <li>{campaignContent.ProductSpecial}</li>
                                <li>{campaignContent.ProductSpecialDescription}</li>
                                <br></br>
                            </>
                        ))}
                    </ul>
                    <br></br>
                </>
            ))}
        </ul>   
    )
}


ReactDOM.render(<HomePage />, app)