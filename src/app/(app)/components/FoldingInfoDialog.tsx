import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
  children: React.ReactNode;
}

const FoldingInfoDialog: React.FC<Props> = ({ children }) => {
  return (
    <div className="fixed bottom-4 right-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-screen h-screen">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">{children}</div>
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FoldingInfoDialog;
