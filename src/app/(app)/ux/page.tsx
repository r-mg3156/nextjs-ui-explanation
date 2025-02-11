import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UxPage() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="text-3xl text-blue-300">UX</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 py-6">
        <p className="text-xl ml-4 text-orange-500">
          User Experience / ユーザーエクスペリエン
        </p>
        <p className="text-xl ml-4">
          ユーザーが製品・サービスを通じて得られる体験
        </p>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
