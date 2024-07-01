const card = [
    {
        id: 1,
        img: "./icon-1.png",
        title: "Accessible and Convenient",
        dec: "Access the app from anywhere, anytime, stay on top of your finances. No unnecessary fees, and manage your finances with ease."
    },
    {
        id: 2,
        img: "./icon-2.png",
        title: "Personalized Suggestions",
        dec: "Our app analyzes your spending patterns and offers advice to help you improve your habits, helping you save more and spend less."
    },
    {
        id: 3,
        img: "./icon-3.png",
        title: "Improved Financial Management",
        dec: "Our budgeting app provides a complete overview of your finances. Track your spending, set budgets, and monitor your progress."
    },
    {
        id: 3,
        img: "./icon-4.png",
        title: "Automated expenses",
        dec: "Automatically categorizes your transactions, making it easier to monitor your spending and budgeting."
    },

];

const ServicesLayouts = () => {
    return (
        <div className="s">
            <h2>Our Services</h2>
            <div className="services">
            {card.map(card => (
                <div className="content">
                    <img src={card.img} alt="" />
                    <p className="p" key={card.id}>{card.title}</p>
                    <p>{card.dec}</p>
                </div>
            ))}
        </div>
        </div>
    )
}

export default ServicesLayouts;