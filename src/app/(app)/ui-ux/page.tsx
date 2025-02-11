import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FoldingInfoDialog from "../components/FoldingInfoDialog";

export default function UiUxPage() {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl text-blue-300">UIとUX</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center py-6">
          <div
            style={{ width: "480px", height: "480px", position: "relative" }}
          >
            <Image
              src={"/image_6.png"}
              alt="test_image"
              layout="fill"
              objectFit="cover"
              style={{ objectPosition: "center" }}
            />
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>

      <FoldingInfoDialog>
        <p className="text-xl ml-4">
          <span className="text-orange-500">よいUX</span>のためには、
        </p>
        <p className="text-xl ml-4">
          ユーザー目線にたった、
          <span className="text-orange-500">よいUI</span>
          が必要不可欠
        </p>
        <p className="text-xl ml-4 text-center font-bold">
          「普通に使える」ことが大事！
        </p>
      </FoldingInfoDialog>
    </div>
  );
}
