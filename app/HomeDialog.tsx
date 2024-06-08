import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Transcribe from "./components/Transcribe";
import Answer from "./components/Answer";
import { SiOpenai } from "react-icons/si";

const HomeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>
          Ask to chatgpt <SiOpenai size={20} className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-5 text-2xl font-semibold">
            Transcrib-er
          </DialogTitle>
          <DialogDescription>
            <Transcribe />
            <Answer />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default HomeDialog;
