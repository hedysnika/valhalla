import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
    return (
        <div className="min-h-[90vh] h-auto bg-black pt-[60px]">
          <img src="" alt="" />

        </div>
    );
    }



    export async function getStaticProps({ locale }: { locale: any }) {
        return {
          props: {
            ...(await serverSideTranslations(locale, ["common", "footer"])),
          },
        };
      }
      