import UsePromiseDemo from "@/components/UsePromisesDemo";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main>
      <ErrorBoundary>
        <Suspense fallback={<p>Loading...</p>}>
          <UsePromiseDemo />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
