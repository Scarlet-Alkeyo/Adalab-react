import './index.css';
import { Link } from 'react-router-dom';

function LoginLink(){
    return (
        <div className='Intro'>
            <nav>
                <h1>My First App</h1>
                <h1>Continue to login</h1>
                <div id='button'>
                <button id="button"type='submit'><Link to="/login ">Back</Link></button>
                </div>
               
            </nav>
        </div>
    )
};


export default LoginLink;