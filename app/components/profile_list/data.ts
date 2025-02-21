import { CardDataInterface, QnaDataInterface, PortDataInterface } from "@/app/constants/default";


const cardData1 = [
  {
    title: "파워링크",
    description: "원하시는 상품을 네이버 상위에 노출되게 흥보해드리겠습니다",
    icon: "/products/마케팅/파워링크.jpg", // Replace with actual image paths
  },
  {
    title: "카카오 광고",
    description: "대한민국 대표메신저, 여기에 당신의 상품을 판매할수있게 도와드립니다",
    icon: "/products/마케팅/카카오톡_아이콘.jpg", // Replace with actual image paths
  },
  {
    title: "인스타그램 광고",
    description: "20~30대들을 위한 광고를 진행해 고객을 모집해드리겠습니다",
    icon: "/products/마케팅/인스타그램광고.jpg", // Replace with actual image paths
  },
  {
    title: "유튜브 광고",
    description: "유튜브에 영상광고 및 유튜버 섭외를 통한 광고를 진행해드리겠습니다",
    icon: "/products/마케팅/유튜브광고.jpg", // Replace with actual image paths
  },
  {
    title: "브랜딩 기획",
    description: "당신의 브랜드가 사랑받는 이유 저희가 만들어드리겠습니다",
    icon: "/products/마케팅/브랜드기획.jpg", // Replace with actual image paths
  },
];

const cardData2 = [
  {
    title: "프로그램 개발",
    description: "생각해둔 프로그램이 있으시면 제가 만들어드리겠습니다",
    icon: "/products/개발/프로그램 개발.jpeg", // Replace with actual image paths
  },
  {
    title: "앱 기획 및 개발",
    description: "플랫폼 서비스를 만들고 싶으신가요? 상세한 구상과 개발은 저에게 맡기세요",
    icon: "/products/개발/앱 기획 및 개발.jpeg", // Replace with actual image paths
  },
  {
    title: "관리 프로그램",
    description: "직원, 매출 , 업무 관리가 필요하신가요? 프로그램으로 해결하세요",
    icon: "/products/개발/관리 프로그램.jpg", // Replace with actual image paths
  },
  {
    title: "브랜딩 페이지",
    description: "남들과 차별되는 사이트가 필요하신가요?",
    icon: "/products/개발/브랜딩 페이지.jpg", // Replace with actual image paths
  },
  {
    title: "인공지능 개발",
    description: "직원을 대신하는 인공지능 자동화 서비스 전문입니다",
    icon: "/products/개발/인공지능 개발.jpg", // Replace with actual image paths
  },
];

const cardData3 = [
  {
    title: "제품 활영",
    description: "제품의 특징과 활용도를 돋보이게 촬영합니다",
    icon: "/products/디자인&영상/제품촬영.jpg", // Replace with actual image paths
  },
  {
    title: "상세페이지 제작",
    description: "제품의 장점, 사용법을 한눈에 정리하고 구매 욕구를 자극하는 디자인을 만들어드립니다",
    icon: "/products/디자인&영상/상세페이지 제작.jpg", // Replace with actual image paths
  },
  {
    title: "영상 제작",
    description: "제품이나 브랜드의 특성을 효과적으로 전달하는 영상을 제작합니다",
    icon: "/products/디자인&영상/영상제작.jpg", // Replace with actual image paths
  },
  {
    title: "배너 제작",
    description: "광고나 프로모션을 효과적으로 알리기 위한 디자인을 제작합니다",
    icon: "/products/디자인&영상/배너제작.jpg", // Replace with actual image paths
  },
];

const cardData4 = [
  {
    title: "상품관리",
    description: "프로모션, 각종 온라인 쇼핑몰(아마존,쿠팡,네이버,유튜브 등) 행사 참여 및 입점",
    icon: "/products/쇼핑몰운영/상품관리.jpg", // Replace with actual image paths
  },
  {
    title: "판매전략 기획",
    description: "어떤 플랫폼에서 잘팔리는지를 분석하고 판매전략을 기획합니다",
    icon: "/products/쇼핑몰운영/판매전략 기획.jpg", // Replace with actual image paths
  },
  {
    title: "매출,재고 관리",
    description: "인기있는 제품과 아닌 제품을 분류하고 그게 맞는 상품 및 업무 배치를 합니다",
    icon: "/products/쇼핑몰운영/매출,재고 관리.jpg", // Replace with actual image paths
  },
  {
    title: "실적 개선 프로젝트",
    description: "상품 기획, 운영, 마케팅, 채널·재고 관리, 협업, 매출 분석을 해드립니다 ",
    icon: "/products/쇼핑몰운영/실적 개선 프로젝트.jpg", // Replace with actual image paths
  },


];

// qna 데이터 

const qnaData1 = [
  {
    question: "광고가 어디까지 가능한가요?",
    answer: `온라인과 오프라인을 포함한 대부분의 광고가 가능합니다 <br>  
      온라인: 네이버, 구글, 유튜브, 인스타그램, 페이스북, 틱톡, 카카오 등 다양한 플랫폼 광고 운영 <br>
      오프라인: 지하철, 버스, 전단지, 옥외 광고, 신문, 잡지 등 <br> 
    <br><strong>고객님의 목표와 예산에 맞춰 최적의 광고 전략을 제안해드립니다.</strong>
      `
  },
  {
    question: "마케팅 성과를 측정하는 방법이 따로 있나요?",
    answer: `네, 성과를 정확히 측정할 수 있도록 자체 데이터 분석 자동화 프로그램을 제공합니다
      <br> <strong>성과를 눈으로 확인할수 있도록 주기적인 보고서를 제공해드립니다</strong>
      `
  },
  {
    question: "유튜브 광고를 하고 싶은데 영상을 저희가 제공해야 하나요?",
    answer: `영상이 이미 있다면 그대로 활용할 수 있습니다 <br>
      혹시 없으시다면은 광고 목적(브랜딩, 제품 홍보 등)에 맞춰서 <strong>저희가 제작해드릴 수 있습니다</strong> 
      `
  },
  {
    question: "브랜딩 광고와 마케팅 광고는 어떻게 다른가요?",
    answer: `마케팅 광고는 ‘지금 당장’ 고객을 만들고, 브랜딩 광고는 ‘오래도록’ 고객을 남깁니다`
  },
  {
    question: "계약 조건은 어떻게되나요?",
    answer: "구체적인 계약 조건은 상담을 통해 명학하게 안내드립니다"
  }
];

const qnaData2 = [
  {
    question: "내 아이디어를 개발하려면 어떤 단계를 거치나요?",
    answer: `개발은 보통 기획 → 디자인 → 개발 → 테스트 → 출시 단계로 진행됩니다. 사업자는 기획 단계에서 방향을 정하고, 디자인과 개발 과정에서 진행 상황을 점검하며 수정 요청을 할 수 있습니다, 테스트 단계에서 최종 확인후 개발이 완료됩니다`
  },
  {
    question: "웹사이트, 앱, 프로그램 개발의 차이는 무엇인가요?",
    answer: `웹사이트: 인터넷 브라우저(크롬, 사파리 등)에서 실행되는 서비스 (예: 쇼핑몰, 기업 홈페이지) <br>
앱: 스마트폰에 설치해서 실행하는 프로그램 (예: 플랫폼 , 카카오톡, 배달의민족) <br>
프로그램: 특정 기능을 수행하는 컴퓨터용 소프트웨어 (예: 회계 프로그램, 게임) <br>
<strong>개발 목적에 따라 어떤 방식이 적합한지 결정해야 합니다.</strong>`
  },
  {
    question: "기획서나 와이어프레임이 꼭 필요한가요? 없어도 개발이 가능한가요?",
    answer: `기획서나 와이어프레임이 있으면 개발 방향을 더 명확하게 정리할 수 있어 이해하는 데 큰 도움이 됩니다. 하지만 없어도 괜찮습니다! 우리가 당신의 아이디어를 듣고, 기획서 작성부터 와이어프레임 설계, 디자인까지 모두 진행할 수 있습니다.<br> <br><strong>아이디어만 가지고 오세요, 나머지는 저희가 해결해드립니다</strong>`
  },
  {
    question: "혹시 어렵거나 큰 프로젝트도 가능한가요? ",
    answer: `네, 큰 프로젝트도 충분히 가능합니다! 국가사업을 수행한 경험이 있으며, 다양한 프로그램을 개발해 투자자들에게 판매하고 성공적으로 엑싯한 경험도 보유하고 있습니다. 규모가 크든 작든, <strong>최고의 기술력으로 최적의 솔루션을 제공합니다.</strong>`
  },

  {
    question: "사용자가 많아지면 서버가 다운될 수도 있나요? 어떻게 대비하나요? ",
    answer: `사용자가 많아질수록 개발 난이도도 함께 올라갑니다. 그렇기 때문에 하루에 몇 명이 방문할 프로그램인지 미리 파악하고, 이에 맞춰 시스템을 올바르게 설계하는 것이 중요합니다. 진행하기 전에 꼭  트래픽 증가(사용자량)에 대한 서버 아키텍처 설계를 제공하는지 확인하세요. 이 부분을 제대로 준비하지 않으면, 나중에 사용자가 몰릴 때 서버가 터지거나 서비스가 중단되는 심각한 문제가 발생할 수 있습니다. 저희가 진행하는 프로젝트는 초기 단계부터 이러한 문제를 대비해 안정적인 시스템을 구축합니다`
  },

];

const qnaData3 = [
  {
    question: "상세페이지 디자인이 매출에 영향을 주나요?",
    answer: "디자인뿐만 아니라 글과 구성 설계에 따라 구매 욕구를 효과적으로 자극할 수 있으며, 이는 곧 매출 상승으로 이어집니다"
  },
  {
    question: "SNS 광고용 짧은 영상도 제작이 가능한가요?",
    answer: "네, 인스타그램, 유튜브, 틱톡 등 플랫폼 맞춤형 숏폼 영상을 제작해 드립니다"
  },
  {
    question: "영상 기획부터 편집까지 모두 진행해 주시나요?",
    answer: "네, 기획, 촬영, 편집, 자막 및 효과 작업까지 원스톱으로 제공합니다"
  }
];

const qnaData4 = [
  {
    question: "어떤 업무까지 대행해주나요?",
    answer: "상품 등록/관리, 광고 운영,주문 관리,행사관리,프로모션관리"
  },
  {
    question: "기존에 운영 중인 쇼핑몰도 대행이 가능한가요?",
    answer: "네.가능합니다 업무 인수인계를 받고 업무를 진행해 드립니다"
  },
  {
    question: "다른 업체와 차별점이 무엇인가요?",
    answer: "자체 개발한 ai프로그램으로 대목,연말연시,판매,광고등을 시스템으로 관리합니다"
  }
];

const portData1: PortDataInterface[] = [
  {
    title: "프로그램 개발",
    description: '프로그램 개발',
    src: "/portfolio/dev/asm.mp4",
    link: "https://asm.co.kr/",
    type: "video"
  },

  {
    title: "프로그램 개발",
    description: '프로그램 개발',
    src: "/portfolio/dev/asm.mp4",
    link: "https://asm.co.kr/",
    type: "video"
  },

  {
    title: "프로그램 개발",
    description: '프로그램 개발',
    src: "/portfolio/dev/asm.mp4",
    link: "https://asm.co.kr/",
    type: "video"
  },
]

const portData2: PortDataInterface[] = [
  {
    title: "프로그램 개발",
    description: '프로그램 개발',
    src: "/portfolio/dev/asm.mp4",
    link: "https://asm.co.kr/",
    type: "video"
  },

]


const portData3: PortDataInterface[] = [
  {
    title: "프로그램 개발",
    description: '프로그램 개발',
    src: "/portfolio/dev/asm.mp4",
    link: "https://asm.co.kr/",
    type: "video"
  },

]

const portData4: PortDataInterface[] = [
  {
    title: "프로그램 개발",
    description: '프로그램 개발',
    src: "/portfolio/dev/asm.mp4",
    link: "https://asm.co.kr/",
    type: "image"
  },

]





export const cardData = {
  data1: cardData1,
  data2: cardData2,
  data3: cardData3,
  data4: cardData4
};

export const qnaData = {
  data1: qnaData1,
  data2: qnaData2,
  data3: qnaData3,
  data4: qnaData4
};

export const portData = {
  data1: portData1,
  data2: portData2,
  data3: portData3,
  data4: portData4
};

