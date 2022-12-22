import SignIn from '../components/Auth/SignIn'
import SignUp from '../components/Auth/SignUp'
import LoginWithGoogle from '../components/LoginWithGoogle/LoginWithGoogle'

const LoginPage = () => {
    return (
        <div className='constainer'>
            <SignIn />
            <SignUp />
            <LoginWithGoogle/>
        </div>
    )
}

export default LoginPage