import './App.css';

function App() {
  return (
    <div className="container">
      <div className="box has-text-centered">
        <h1 className="logo mb-3">tripaider</h1>
        <h2 className="title is-4">Coming Soon</h2>
        <p className="subtitle is-6">
          Get Notified When We Launch
        </p>
        <form>
          <div className="field">
            <div className="control">
              <input className="input" type="email" placeholder="Enter your email" required />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link" type="submit" style={{ background: '#ff7b29' }}>Subscribe</button>
            </div>
          </div>
        </form>
        <p className="subtitle is-7 mt-3">
          Don't worry, we will not spam you :)<br />
          Photo Credit: James Wheeler on <a href="https://www.pexels.com/photo/lake-and-mountain-417074/" target='_blank' rel="noreferrer">www.pexels.com</a>
        </p>
        <hr />
        <div class="elfsight-app-0067d6f8-4226-4835-a362-3589cd2189bf" data-elfsight-app-lazy></div>
      </div>
    </div>
  );
}

export default App;
