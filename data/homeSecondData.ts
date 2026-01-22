export interface ValueCardData {
  id: number;
  number: string;
  title: string;
  description: string;
}

export const valueCards: ValueCardData[] = [
  {
    id: 1,
    number: "01",
    title: "Velocity Is Priority#1",
    description:
      "A full-cycle digital service agency. we do from design to end-to-end development to maintenance. we have been worked with more than 50+ brands",
  },
  {
    id: 2,
    number: "02",
    title: "Velocity Is Priority#1",
    description:
      "A full-cycle digital service agency. we do from design to end-to-end development to maintenance. we have been worked with more than 50+ brands",
  },
  {
    id: 3,
    number: "03",
    title: "Velocity Is Priority#1",
    description:
      "A full-cycle digital service agency. we do from design to end-to-end development to maintenance. we have been worked with more than 50+ brands",
  },
  {
    id: 4,
    number: "04",
    title: "Velocity Is Priority#1",
    description:
      "A full-cycle digital service agency. we do from design to end-to-end development to maintenance. we have been worked with more than 50+ brands",
  },
  {
    id: 5,
    number: "05",
    title: "Velocity Is Priority#1",
    description:
      "A full-cycle digital service agency. we do from design to end-to-end development to maintenance. we have been worked with more than 50+ brands",
  },
  {
    id: 6,
    number: "06",
    title: "Velocity Is Priority#1",
    description:
      "A full-cycle digital service agency. we do from design to end-to-end development to maintenance. we have been worked with more than 50+ brands",
  },
];

export interface WorkLocationCardData {
  id: number;
  image: string;
  alt: string;
  isProminent?: boolean;
}

export const workLocationCards: WorkLocationCardData[] = [
  {
    id: 1,
    image: "/home-second/card-1.png",
    alt: "Person holding a book with laptop",
  },
  {
    id: 2,
    image: "/home-second/card-1.png",
    alt: "Person holding a map of Bangkok",
  },
  {
    id: 3,
    image: "/home-second/card-1.png",
    alt: "Travel items including suitcases, camera, and hat",
    isProminent: true,
  },
  {
    id: 4,
    image: "/home-second/card-1.png",
    alt: "People collaborating around a map on a table",
  },
  {
    id: 5,
    image: "/home-second/card-1.png",
    alt: "Office workspace with people and world map",
  },
];

export interface TestimonialData {
  id: number;
  message: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
}

export const testimonials: TestimonialData[] = [
  {
    id: 1,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    authorName: "William carry",
    authorTitle: "Founder & CEO",
    authorImage: "/home-second/card-1.png",
  },
  {
    id: 2,
    message:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    authorName: "Sarah Johnson",
    authorTitle: "Marketing Director",
    authorImage: "/home-second/card-1.png",
  },
  {
    id: 3,
    message:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    authorName: "Michael Chen",
    authorTitle: "Product Manager",
    authorImage: "/home-second/card-1.png",
  },
];

export interface ThePressData {
  title: string;
  description: string;
  date: string;
  readTime: string;
  bgColor: string;
}

export const thePressData: ThePressData[] = [
  {
    title: "REQ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    date: "Jan 28,2025",
    readTime: "4 min Read",
    bgColor: "#007372",
  },
  {
    title: "REQ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    date: "Jan 28,2025",
    readTime: "4 min Read",
    bgColor: "#FD0166",
  },
  {
    title: "REQ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    date: "Jan 28,2025",
    readTime: "4 min Read",
    bgColor: "#FB8C00",
  },
];
