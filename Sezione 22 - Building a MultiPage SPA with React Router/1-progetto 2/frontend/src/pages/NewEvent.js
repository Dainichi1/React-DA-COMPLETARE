import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage() {
  return <EventForm />;
}

export default NewEventPage;

export async function action({ request }) {
  const formData = await request.formData(); // Aggiunto `await`

  const eventData = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  // Controllo se la richiesta ha avuto successo
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Failed to create event" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Se la richiesta è andata a buon fine, reindirizza alla pagina degli eventi
  return redirect("/events");
}
