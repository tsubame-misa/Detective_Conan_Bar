function Header() {
  return (
    <div className="hero is-small bg-black">
      <div
        className="hero-body"
        style={{ backgroundColor: "rgb(84 84 84)", marginTop: "1.5rem" }}
      >
        <div className="container">
          <p className="has-text-white" style={{ fontFamily: "fantasy" }}>
            名探偵コナンに出てくるお酒たち
          </p>
          <div
            className="has-text-white text-6xl pt-4"
            style={{ fontFamily: "fantasy" }}
          >
            Detective Conan Bar
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
