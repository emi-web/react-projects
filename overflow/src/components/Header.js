function Header(props) {
  return (
    <div className="header">
      <img src={props.profileImg} alt="profile" />
      <h1>{props.username}</h1>
    </div>
  );
}

export default Header;
