function AuthForm({ children }) {
  const [title, button, question] = children;

  return (
    <main className="data">
      {title}
      <form className="data__form">
        <input placeholder="Email" type="email" className="data__input" />
        <input placeholder="Пароль" type="password" className="data__input" />
        {button}
      </form>

      {question}
    </main>
  );
}

export default AuthForm;
