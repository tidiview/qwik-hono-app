import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Contactez-nous</h1>
      <form method="POST" action="/api/contact">
        <label>
          Nom :
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email :
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Message :
          <textarea name="message" required></textarea>
        </label>
        <br />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
