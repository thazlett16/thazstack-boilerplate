import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/home')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-10 p-8">
      <div className="flex max-w-xs flex-col gap-3">HOME</div>
    </div>
  );
}
