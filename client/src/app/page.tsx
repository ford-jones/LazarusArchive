import NavBar from "../components/NavBar";

export default function Home(): React.JSX.Element {
  return (
    <>
      <div style={{
        zIndex: 1, 
        position: "fixed", 
        width: "100dvw", 
        background: "black",
        top: "0px"
      }}>
        <h1 style={{textAlign: "center"}}>Lazarus Archive</h1>
        <NavBar />
      </div>
      <div style={{paddingTop: "95px"}}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam id numquam facere nesciunt voluptatibus esse libero similique in ad eaque corporis saepe amet et, cum vel maxime incidunt beatae nobis?</p>
      </div>
    </>
  );
}
