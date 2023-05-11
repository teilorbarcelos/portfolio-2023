import { PageHeaderContainer } from "@/components/PageHeader/pageheader.styles";
import { PageHeaderProps } from "./pageHeader.interface";
import Image from "next/image";
import { useLanguageStore } from "@/lib/contexts/language";
import { Language } from "@/lib/contexts/language/language.constants";
import { Button } from "../Button";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { useTranslation } from "@/hooks/useTranslation";

export const PageHeader = ({
  profileImageUrl,
  headerTextEN,
  headerTextPT,
  profileName,
}: PageHeaderProps) => {
  const { language } = useLanguageStore();
  const t = useTranslation();
  return (
    <PageHeaderContainer>
      <div className="content">
        <Image
          width={160}
          height={160}
          src={profileImageUrl}
          alt={`${profileName} profile image`}
          className="profile-image"
          data-testid="profile-image"
          priority
        />
        <p className="profile-name" data-testid="profile-name">
          {profileName}
        </p>
        <div
          className="header-text"
          data-testid="header-text"
          dangerouslySetInnerHTML={{
            __html: language === Language.EN ? headerTextEN : headerTextPT,
          }}
        />
        <Link href="/resume">
          <Button
            type="button"
            className="button"
            data-testid="view-resume-button"
          >
            <p>{t("viewResume")}</p> <BiRightArrowAlt />
          </Button>
        </Link>
      </div>
    </PageHeaderContainer>
  );
};
