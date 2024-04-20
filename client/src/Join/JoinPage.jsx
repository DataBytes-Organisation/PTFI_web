import './JoinPage.css';
import Google from '../Images/Google.png'
import Microsoft from '../Images/Microsoft.png'

function JoinPage() {
  return (
      <div id='JoinPage'>
          <div id='background'>
              <div className='text'>
                  <h1>PTFI</h1>
                  <h6>Privacy Technologies For Financial Intelligence</h6>
                  <h2>Empowering Your Financial Journey</h2>
              </div>
              <div className='button-external'>
                  <button><img id='Google' src={Google} alt='google'/>   Login with Google</button>
                  <button><img id='Microsoft' src={Microsoft} alt='Microsoft'/>   Login with Microsoft</button>
                  <span>OR</span>
                  <button>Login with email</button>
              </div>
          </div>
      </div>
  );
}

export default JoinPage;
