const BenefitsLayouts = () => {
  return (
    <div>
      <div className="about">
        <div className="right">
            <img src="./benefits.png" alt="" />
          </div>
          <div className="left">
            <h2 className="white">Benefits</h2>
            <p className="white-75">Designed to help you take control of your finances and achieve your financial goals. Our app is easy to use and provides a complete overview of your finances, allowing you to manage your money with confidence.</p><br />
            <div className="list">
              <div className="content">
                <img src="./checklist.png" alt="ck" /><p>Accessible and Convenient</p>
              </div>
              <div className="content">
                <img src="./checklist.png" alt="ck" /><p>Personalized Suggestions</p>
              </div>
              <div className="content">
                <img src="./checklist.png" alt="ck" /><p>Improved Financial Management</p>
              </div>
              <div className="content">
                <img src="./checklist.png" alt="ck" /><p>Automated expenses</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitsLayouts;