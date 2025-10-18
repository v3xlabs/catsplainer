import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/cat/privacy')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>I AM THE PRIVACY CAT!</div>;
}
