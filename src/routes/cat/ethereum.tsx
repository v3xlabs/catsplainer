import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/cat/ethereum')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>I AM THE ETHEREUM CAT!</div>;
}
