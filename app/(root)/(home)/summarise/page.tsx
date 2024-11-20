import { useGetCallById } from "@/hooks/useGetCallById";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";

const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-2 xl:flex-row">
      <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
        {title}:
      </h1>
      <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
        {description}
      </h1>
    </div>
  );
};

const summarise = () => {
  
  return (
    <section className="flex size-full flex-col gap-10 text-white">
    <h1 className="text-xl font-bold lg:text-3xl">Summarise</h1>
    <Button className="bg-blue-1 justify-content center" >
          <a href="https://www.google.com">Summarise Video</a>
        </Button>
  </section>
  );
};

export default summarise;
