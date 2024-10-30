import "./globals.css";
import NextQueryProvider from "@app/NextQueryProvider";
import BodyLayout from "@app/BodyLayout";

export const metadata = {
  title: "Beom-log",
  description:
    "Beom-log는 백엔드 개발과 관련된 실무 예제, SQL, CS 기초 지식을 나누고 있습니다. 성장하는 개발자로서, 유익한 정보를 꾸준히 공유하겠습니다!",
  keywords: "블로그, 개발, 로고, 백엔드, 웹 개발, Node.js, Express.js, SQL, CS",
  openGraph: {
    title: "Beom-log",
    description:
      "Beom-log는 백엔드 개발과 관련된 실무 예제, SQL, CS 기초 지식을 나누고 있습니다. 성장하는 개발자로서, 유익한 정보를 꾸준히 공유하겠습니다!",
    url: "https://beomgu.uddangtangtang.com/",
    type: "website",
    images: [
      {
        url: "https://beomgu.uddangtangtang.com/main_img.webp",
        alt: "Beom-log thumbnail",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>
        <div
          id="toast-root"
          className="fixed right-2/4 transform translate-x-2/4 flex flex-col z-30 w-64 space-y-2"
        />
        <div id="modal-root" className="fixed z-30" />
        <NextQueryProvider>
          <BodyLayout>{children}</BodyLayout>
        </NextQueryProvider>
      </body>
    </html>
  );
}
