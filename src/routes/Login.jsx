import '../form.css';

export default function Login(){
    return(
        <form>
            <h2 className='log'>zaloguj się</h2>
            <input className='login' type='text' placeholder="Nazwa użytkownika"></input>
            <input className='login' type='password' placeholder="Hasło"></input>
            <input className='login' type='submit' value='Zaloguj się'></input> 
        </form>
    );
}

