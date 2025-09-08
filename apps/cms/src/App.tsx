import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Separator } from "./components/ui/separator"; // named import

export default function App() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">CMS Dashboard</h1>
      <p className="text-sm">Tailwind + shadcn are live.</p>

      <Card className="max-w-sm">
        <CardContent className="p-4 space-y-3">
          <p className="font-semibold">Demo Card</p>
          <Separator /> {/* self-closing, no children */}
          <Button className="w-full">Publish</Button>
        </CardContent>
      </Card>
    </div>
  );
}
