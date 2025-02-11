import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FoldingInfoDialog from "../components/FoldingInfoDialog";
import PageTitle from "../components/PageTitle";

export default function AccordionPage() {
  return (
    <div className="relative min-h-screen w-full">
      <PageTitle>アコーディオン</PageTitle>
      <div className="flex justify-center mb-6">
        <Accordion type="single" collapsible className="w-96">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <FoldingInfoDialog>
        <p className="text-xl ml-4 text-orange-500">メリット</p>
        <p className="text-xl ml-4">
          情報を折りたためるため、効率よく情報を探すことができる
        </p>
        <p className="text-xl ml-4 text-orange-500">デメリット</p>
        <p className="text-xl ml-4">
          コンテンツ全てを見るには、すべての項目をクリックする必要がある
        </p>
        <p className="text-xl ml-4 text-orange-500">ポイント</p>
        <p className="text-xl ml-4">
          ・アイコンなどを使い、開閉できることを明示する
          ・開閉の時にはアニメーションを入れると理解しやすい
          ・わかりやすい見出しにする
        </p>
      </FoldingInfoDialog>
    </div>
  );
}
