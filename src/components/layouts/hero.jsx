const HeroLayouts = () => {
  return (
    <div>
      <div className="hero">
        <div className="left">
          <h1 className="white">Your one stop Budgeting tool</h1>
          <p className="white-75">A budget is a plan for every dollar you have. It’s not magic, but it represents more financial freedom and a life with much less stress A budget is a plan</p><br />
          <div className="cta-button">
            <a href="#">Get Started</a>
            <img src="./arrow.png" alt="image" />
          </div>
        </div>
        <div className="right">
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeroLayouts;