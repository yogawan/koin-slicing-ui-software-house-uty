const AboutLayouts = () => {
  return (
    <div>
      <div className="about">
        <div className="right">
            <img src="/about.png" alt="" />
          </div>
          <div className="left">
            <h2 className="white">Finances, made easy. Track, manage & reach your financial goals.</h2>
            <p className="white-75">Designed to help you take control of your finances and achieve your financial goals. Our app is easy to use and provides a complete overview of your finances, allowing you to manage your money with confidence.</p><br />
            <div className="cta-button">
              <a href="#">Get Started</a>
              <img src="./arrow.png" alt="image" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutLayouts;