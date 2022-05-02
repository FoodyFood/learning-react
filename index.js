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
            <Main bodyText='hi my name is' color='blue' backgroundColor='lightgreen'/>
            <Footer />
        </>
    )
}

const app = document.getElementById("app")

function Header() {
    return (<h1>Big. Dirty. Sandwiches.</h1>)
}

function Main(props) {
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

function Footer() {
    return (<footer style={{position: 'absolute', bottom: 0, marginTop: '40px', height :'40px}'}}>Footer Copywrite Example: {new Date().getFullYear()}</footer>)
}

ReactDOM.render(<HomePage />, app)