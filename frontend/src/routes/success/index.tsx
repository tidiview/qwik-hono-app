import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Merci !</h1>
      <p>Votre message a bien été envoyé.</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Success",
  meta: [
    {
      name: "description",
      content: "Form success description",
    },
  ],
};