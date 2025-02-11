import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UiPage() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="text-3xl text-blue-300">UI</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 py-6">
        <p className="text-xl ml-4 text-orange-500">
          User Interface / ユーザーインタフェース
        </p>
        <p className="text-xl ml-4">ユーザーと製品・サービスの接触面</p>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
