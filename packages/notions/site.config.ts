const CONFIG = {
  user: {
    name: "",
    age: "",
    profile: "",
  },
  metadata: {
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
  },
  blog: {
    title: "Beom-log",
    todayWords: ["hello world", "Beom-log", "V-log"],
    scheme: "dark", // 'light' | 'dark' | 'system'
  },
  utterances: {
    enable: true,
    config: {
      repo: "JeonBeomGu-S/notion-blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },
  isToolToggleVisible: false,
  sns: {
    github: "https://github.com/JeonBeomGu-S",
    linkedin:
      "https://www.linkedin.com/in/beomgu-jeon/",
  },
  headerButton: {
    mainProject: {
      name: "우당탕탕 도서관 가기",
      url: "https://blog.uddangtangtang.com/",
    },
    myInfo: {
      name: "프로필",
      url: "/page/profile",
    },
  },
  searchManager: {
    google: "Q1Bav1At-K9niA9pM2HWt_E8s4d17CThq0EvCWS6RPk",
  },
  analytics: {
    google:
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2465657218123782",
  },
};

export default CONFIG;
