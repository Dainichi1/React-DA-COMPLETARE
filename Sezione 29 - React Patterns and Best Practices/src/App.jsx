import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <article>
              <p>Lorem Ipsum</p>
              <p>LOREM IPSUM</p>
            </article>
          </AccordionItem>
          <AccordionItem
            className="accordion-item"
            title="We're working with local guides"
          >
            <article>
              <p>Lorem Ipsum</p>
              <p>LOREM IPSUM</p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
