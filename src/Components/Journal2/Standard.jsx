import './Standard.css';

const Standard = () => {
  return (
    <div className="main_standard">
      <img 
        src="https://gatsby-ecommerce-theme.netlify.app/blogCover.png?imgcdn=true" 
        alt="New standard closing background" 
        className="background-img" 
      />
      <div className="content">
        <p>Design
        </p>
        <h1>The new standard of Closing</h1>
        <a href="/friends" className="read-story"><u className="read-story">READ STORY</u></a>
      </div>
    </div>
  );
};

export default Standard;
