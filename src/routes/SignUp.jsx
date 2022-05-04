export default function SignUp() {
    return (
        <form>
            <h2>Sign up</h2>
            <input type='text' placeholder="Nazwa użytkownika"></input>
            <input type="email" placeholder="Adres e-mail"></input>
            <input type='password' placeholder="Hasło"></input>
            <input type='password' placeholder="Powtórz hasło"></input>
        </form>
    );
}