export default function Loding() {
  return (
    <div>
      <form>
        <label>
          <input
            type="email"
            name="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            placeholder="Your email"
            required
            // value={email}
          />
        </label>
        <label>
          <input
            type="text"
            name="pasword"
            placeholder="Your pasword"
            required
            // value={pasword}
          />
        </label>
        <button type="submit">Loding</button>
      </form>
    </div>
  );
}
