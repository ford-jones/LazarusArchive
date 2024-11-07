import NavBar from "../components/NavBar";

export default function Home(): React.JSX.Element {
  return (
    <>
      <div style={{
        zIndex: 1, 
        position: "fixed", 
        width: "100dvw", 
        background: "black",
        top: "0px",
        left: "0px"
      }}>
        <h1 style={{textAlign: "center", textDecoration: "underline"}}>Lazarus Engine - Archive:</h1>
        <NavBar />
      </div>
      <div style={{paddingTop: "105px"}}>
        <p>
          Welcome to the development log for Lazarus engine, a 3D game engine written in the C++17 standard. 
          The engine provides an abstraction in the form of an API over OpenGL 4.1, GLFW, FMOD and FreeType2 developed by Ford Jones.
        </p>
        <p>
        {`I’ve always loved video games and as a kid was completely enamored by the graphics of PlayStation and Xbox. I’d always 
          wanted to make a game of my own but didn’t want to commit the hours required to learning an existing AAA engine like 
          Unity or Unreal. I realized I could instead commit that time to making an engine of my own which was better suited to 
          the quake-like sorts of experiences I want to create. Two years later and I’m still chipping away at it. For a long time 
          the project was very untameable as I struggled with the problems of graphics programming, but recently there have been a 
          number of commits which have greatly improved the project and I think now is a great time to begin sharing my 
          Development experience with the world.`}
        </p>
        <p>
          The engine is currently in alpha but has support for the following features:
        </p>
        <ul>
          <li>Window management</li>
          <li>Mouse and keyboard event monitoring</li>
          <li>TrueType and OpenType font loading</li>
          <li>Wavefront mesh loading and rendering</li>
          <li>Translation and rotation transformations across camera, mesh and light assets</li>
          <li>Spacial audio</li>
        </ul>
        <p>
          {`The name Lazarus comes from the story of "Lazarus from Bethany" - a figure from the gospel who died and was reanimated; 
            the first zombie. This engine was named as such due to the fact it is built over OpenGL 4.1, a 2010 release of the now 
            deprecated OpenGL graphics framework. The reason for this choice was simply that at the time I started I had no access to 
            a Windows machine and Apple had dropped all support for OpenGL in favor of their proprietary framework - METAL. This meant 
            that all hope for a cross-platform API using modern graphics libraries would be an impossibility without rewriting it all 
            over again specifically for macintosh using METAL which, at the beginning of the project was far outside the scope of what 
            I could handle. This doesn't mean to say that Lazarus Engine will never be modernized. In future I hope to one day be able 
            to move to a hybrid graphics backend which uses Vulkan as well as METAL.`}
        </p>
        <p>
          Find the source code for the project <a style={{color: "whitesmoke"}}href="https://github.com/ford-jones/Lazarus">here</a>. 
        </p>
        <p>If you have a question, want to chat or are eager to collaborate contact me at:</p>
        <a style={{color: "whitesmoke"}}href="mail:fordnicholasjones@gmail.com">fordnicholasjones@gmail.com</a>
      </div>
    </>
  );
}
