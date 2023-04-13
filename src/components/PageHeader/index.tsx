import { PageHeaderContainer } from "@/components/PageHeader/pageheader.styles";
import { PageHeaderProps } from "./pageHeader.interface";
import Image from "next/image";
import { useLanguageStore } from "@/lib/contexts/language";
import { Language } from "@/lib/contexts/language/language.constants";

export const PageHeader = ({
  profileImageUrl,
  headerTextEN,
  headerTextPT,
  profileName,
}: PageHeaderProps) => {
  const { language } = useLanguageStore();
  return (
    <PageHeaderContainer>
      <Image
        width={160}
        height={160}
        src={profileImageUrl}
        alt={`${profileName} profile image`}
        className="profile-image"
      />
      <p className="profile-name">{profileName}</p>
      <div
        className="header-text"
        dangerouslySetInnerHTML={{
          __html: language === Language.EN ? headerTextEN : headerTextPT,
        }}
      />
    </PageHeaderContainer>
  );
};
