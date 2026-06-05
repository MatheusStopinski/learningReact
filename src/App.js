/*

import './App.css';

function App() {
  return (
    <div className="App">
      <Titulo />
    </div>
  );
}

function Titulo() {
  return (
    <div className="header">
      <h1>Welcome to My React App!</h1>
      <p>This is a simple React application</p>
      <h2>npm start</h2>
    </div>
  );
}

export default App;

*/

// [ Modo propriedades! ]

/*

import './App.css';

function Header(props) {
  return (
    <>

      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <h2 className={props.taglineClass}>{props.tagline}</h2>

    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header

        title="Welcome to My React App!"
        subtitle="This is a simple React application"
        tagline="npm start"
        taglineClass="tagline"

      />
    </div>
  );
}

export default App;

*/

// [ Modo propriedades! - Desestruturação! ]

import './App.css';

function Header({ title, subtitle, tagline, taglineClass }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <h2 className={taglineClass}>{tagline}</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App"><Header
        title="Welcome to My React App!"
        subtitle="This is a simple React application"
        tagline="npm start"
        taglineClass="tagline"
      />
    </div>
  );
}

export default App;

