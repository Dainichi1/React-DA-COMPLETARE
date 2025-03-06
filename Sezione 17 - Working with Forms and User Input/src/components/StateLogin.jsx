import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePaswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit() {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a avalid email"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePaswordBlur}
          value={passwordValue}
          error={passwordHasError && "Please enter a avalid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
