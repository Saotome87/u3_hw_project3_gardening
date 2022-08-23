const HomePage = (props) => {
  return (
    <div className="home-page">
      <h1 className="home-page-header">This is the Gardening Landing Page</h1>
      <img
        className="home-page-pic"
        alt="maple"
        src="https://candide.com/img/9c8ffdd9-d2b9-4595-b88f-e19aa0842597/cropped/760x608"
      ></img>
      <div className="home-page-calender">
        <h1>This is where the scrolling event calender will be</h1>
      </div>
    </div>
  );
};

export default HomePage;
