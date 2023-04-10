import Image from "next/image";
import { LoadingContainer } from "@/components/Loading/loading.styles";

export const Loading = () => {
  return (
    <LoadingContainer data-testid="loading-container">
      <Image
        width={70}
        height={70}
        className={"loadingImg"}
        src="/icons/loading-gif.gif"
        alt="Loading image"
      />
    </LoadingContainer>
  );
};
