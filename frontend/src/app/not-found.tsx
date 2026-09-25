import Link from "next/link";
import { Home, Compass, Search } from "lucide-react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background font-body py-16">
      <Container size="sm" className="text-center">
        <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-2xl bg-primary/10 text-brand-primary shadow-xs">
          <Search size={36} />
        </div>

        <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/">
            <Button variant="primary" size="default" className="gap-2">
              <Home size={18} />
              <span>Back to Home</span>
            </Button>
          </Link>
          <Link href="/study-in">
            <Button variant="outline" size="default" className="gap-2">
              <Compass size={18} />
              <span>Explore Countries</span>
            </Button>
          </Link>
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          Error 404 · HighEd Study Abroad Advisory
        </p>
      </Container>
    </div>
  );
}
