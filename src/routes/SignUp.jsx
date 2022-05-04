import '../form.css';

export default function SignUp() {
    return (
        <form>
            <h2 className='reg'>zarejestruj się</h2>
            <input className='register' type='text' placeholder="Nazwa użytkownika"></input>
            <input className='register' type="email" placeholder="Adres e-mail"></input>
            <input className='register' type='password' placeholder="Hasło"></input>
            <input className='register' type='password' placeholder="Powtórz hasło"></input>
            <input className='register' type='submit' value='Zarejestruj się'></input>
        </form>
    );
}