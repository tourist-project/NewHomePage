export default function Navbar() {
  return (
    <header
      style={{
        backgroundColor: "sandybrown",
      }}
    >
      <nav>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyle: "none",
            justifyContent: "space-between",
          }}
        >
          <li>About</li>
          <li>Member</li>
          <li>Contact</li>
          <li>SNS</li>
        </ul>
      </nav>
    </header>
  );
}
