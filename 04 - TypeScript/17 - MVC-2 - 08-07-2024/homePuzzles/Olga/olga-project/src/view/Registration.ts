export function Registration(): string {
  const html = `
  <dialog id="dialog">
    <form method="dialog" id="form1">
            <h2>Registr / Login</h2>
              <p>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required />
              </p>
              <p>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" autocomplete="current-password" required />
              </p>
              <p>
                <button type="submit" id="closeDialog">Send</button>
              </p>
            </form>
          </dialog>
`;
  return html;
}
