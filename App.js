import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h1>SRM-Kzilla</h1>
          </a>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://srmkzilla.net/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://srmkzilla.net/about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <form  action="mailto:gyantiwari420@gmail.com" method="post" enctype="text/plain">
      <div className="forms-input">
        <label for="basic-url" className="form-label">
          First Name
        </label>
        <div className="input-group01">
          <input type="text" aria-label="First name" className="form-control" />
          <label for="basic-url" className="form-label">
            Last Name
          </label>
          <input type="text" aria-label="Last name" className="form-control" />
        </div>
        <label for="basic-url" className="form-label">
          Registration Number
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            *
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Registration Number"
            aria-label="Registration Number"
            aria-describedby="basic-addon1"
          />
        </div>
        <label for="basic-url" className="form-label">
          Phone Number
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            #
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            aria-label="Phone Number"
            aria-describedby="basic-addon1"
          />
        </div>
        <label for="basic-url" className="form-label">
          SRM Mail Id
        </label>

        <div class="mb-3">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="ab1234@srmist.edu.in"/>
        </div>

        <label for="basic-url" className="form-label">
          Github Profile URL
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/users/
          </span>
          <input
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <label for="basic-url" className="form-label">
          Linked IN URL
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/users/
          </span>
          <input
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <label for="basic-url" className="form-label">
          General Question
        </label>
        <div className="input-group">
          <span className="input-group-text">Why are you joining srm kzilla club</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>
        <div id="btn-div" className="submit-btn">
          <button id="btn"  type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>
      </form>
    </>
  );
}

export default App;
