import { FooterDataProps, NavbarDataProps, RecentChatsProps } from "@/libs/models";

export const navbarData: NavbarDataProps[] = [
  { path: "/", route: "Home" },
  { path: "/trending", route: "Trending" },
  { path: "/discover", route: "Discover" }
];

export const footerData: FooterDataProps[] = [
  { name: "Twitter", icon: "/assets/icons/twitter-icon.svg" },
  { name: "LinkedIn", icon: "/assets/icons/linkedin-icon.svg" },
  { name: "Instagram", icon: "/assets/icons/instagram-icon.svg" },
  { name: "Google", icon: "/assets/icons/google-icon.svg" }
];

export const informationData = [
  {
    title: "Legal Knowledge Base:",
    body: "Access a vast repository of legal articles, guides, and FAQs covering various areas of law, including but not limited to business law, criminal law, family law, intellectual property, and more. Our content is regularly updated to reflect the latest changes in legislation and court decisions."
  },
  {
    title: "Legal Document Assistance:",
    body: "Drafting legal documents can be a challenging task. LilithAI is here to help! Our platform can generate templates and draft customized legal documents, saving you time and effort."
  },
  {
    title: "Legal Research Made Easy:",
    body: "Conducting legal research has never been easier. Use LilithAI to find relevant case law, statutes, and regulations that pertain to your legal questions."
  },
  {
    title: "Ask LilithAI:",
    body: "Have a specific legal question or need personalized advice? Our AI assistant is at your service! Simply ask your query, and LilithAI will provide clear and accurate responses based on the information you provide."
  },
  {
    title: "Stay Informed:",
    body: "Keep up-to-date with the latest legal news and developments in your areas of interest. LilithAI can curate legal news relevant to your preferences and deliver them straight to your inbox."
  }
];

export const recentChatsData: RecentChatsProps[] = [
  {
    title: "How can I not do this?",
    icon: "/assets/icons/delete-icon.svg",
    date: "today"
  },
  {
    title: "How can I do this??",
    icon: "/assets/icons/delete-icon.svg",
    date: "yesterday"
  },
  {
    title: "How can you do this?",
    icon: "/assets/icons/delete-icon.svg",
    date: "yesterday"
  },
  {
    title: "Why can’t you do this?",
    icon: "/assets/icons/delete-icon.svg",
    date: "yesterday"
  },
  {
    title: "I am very confused about...",
    icon: "/assets/icons/delete-icon.svg",
    date: "7 days"
  },
  {
    title: "There is no confusion at a...",
    icon: "/assets/icons/delete-icon.svg",
    date: "7 days"
  },
  {
    title: "Why are you always conf...",
    icon: "/assets/icons/delete-icon.svg",
    date: "7 days"
  },
  {
    title: "Please don’t be confused...",
    icon: "/assets/icons/delete-icon.svg",
    date: "7 days"
  }
];
