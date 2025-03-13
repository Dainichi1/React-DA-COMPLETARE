import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "ERROR" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return response;
}

export async function action({ params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not delete" }), {
      status: 500,
    });
  }
  return redirect("/events");
}
