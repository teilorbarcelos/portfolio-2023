import { useTranslation } from "@/hooks/useTranslation";
import { BlockTitle } from "../BlockTitle";
import { BlockBox } from "../BlockBox";
import { BlockRedirectButton } from "../BlockRedirectButton";
import { ClientsBoxProps } from "./clientsBox.interface";
import {
  ClientsBoxClientImage,
  ClientsBoxClientImageContainer,
} from "./clientsBox.styles";

export const ClientsBox = (data: ClientsBoxProps) => {
  const t = useTranslation();
  return (
    <BlockBox marginTop="40px">
      <BlockTitle>{t("clientsHomeTitle")}</BlockTitle>

      <ClientsBoxClientImageContainer>
        {data.clients.map((client) => (
          <ClientsBoxClientImage
            key={client.name}
            dangerouslySetInnerHTML={{ __html: client.image }}
            title={client.name}
          />
        ))}
      </ClientsBoxClientImageContainer>

      <BlockRedirectButton
        href="/contact"
        text={t("getInTouch")}
        testId="contact-redirect-button"
      />
    </BlockBox>
  );
};
