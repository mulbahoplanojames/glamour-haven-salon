import { GalleryImage, Stylist, TimeSlot } from "@/types/types";

export const stylists: Stylist[] = [
  {
    id: "1",
    name: "Emma Johnson",
    role: "Senior Stylist",
    bio: "With over 10 years of experience, Emma specializes in precision cuts and color transformations. Her attention to detail and ability to understand clients' needs make her a favorite among our regulars.",
    specialties: ["Haircuts", "Styling", "Color"],
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Color Specialist",
    bio: "Michael is our color expert with a passion for creating vibrant, personalized looks. He stays on top of the latest trends and techniques to bring fresh ideas to his clients.",
    specialties: ["Color", "Highlights", "Balayage"],
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
  },
  {
    id: "3",
    name: "Sophia Rodriguez",
    role: "Texture Expert",
    bio: "Sophia has a special talent for working with all hair textures. She's known for her curl-enhancing cuts and smoothing treatments that bring out the best in your natural hair.",
    specialties: ["Curly Hair", "Treatments", "Natural Styling"],
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
  },
  {
    id: "4",
    name: "James Wilson",
    role: "Style Director",
    bio: "As our Style Director, James brings years of international experience to the salon. He's worked with celebrities and at fashion weeks around the world, bringing high-end techniques to every client.",
    specialties: ["Avant-garde", "Editorial", "Precision Cuts"],
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
  },
];

export const timeSlots: TimeSlot[] = [
  { value: "09:00", label: "9:00 AM" },
  { value: "09:30", label: "9:30 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "10:30", label: "10:30 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "11:30", label: "11:30 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "12:30", label: "12:30 PM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "13:30", label: "1:30 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "14:30", label: "2:30 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "15:30", label: "3:30 PM" },
  { value: "16:00", label: "4:00 PM" },
  { value: "16:30", label: "4:30 PM" },
  { value: "17:00", label: "5:00 PM" },
  { value: "17:30", label: "5:30 PM" },
  { value: "18:00", label: "6:00 PM" },
  { value: "18:30", label: "6:30 PM" },
  { value: "19:00", label: "7:00 PM" },
];

export const faq = [
  {
    id: "1",
    question: "How often should I get a haircut?",
    answer:
      "Most stylists recommend a trim every 6-8 weeks to maintain your style and keep ends healthy.",
  },
  {
    id: "2",
    question: "What is a color treatment?",
    answer:
      "A color treatment is a service that involves applying a new color to your hair to achieve a desired look.",
  },
  {
    id: "3",
    question: "What is a keratin treatment?",
    answer:
      "A keratin treatment is a service that involves using keratin to repair and strengthen your hair.",
  },
  {
    id: "4",
    question: "How long do color services typically take?",
    answer:
      "Color services can range from 1-4 hours depending on the complexity. Consult with your stylist for a more accurate timeframe.",
  },
  {
    id: "5",
    question: "Do I need to prepare my hair before a color service?",
    answer:
      "It's best to come with unwashed hair (1-2 days) for color services as the natural oils help protect your scalp.",
  },
  {
    id: "6",
    question: "How can I maintain my color between appointments?",
    answer:
      "Use color-safe shampoo and conditioner, avoid excessive heat styling, and protect your hair from sun exposure.",
  },
  {
    id: "7",
    question: "How can I maintain my color between appointments?",
    answer:
      "Use color-safe shampoo and conditioner, avoid excessive heat styling, and protect your hair from sun exposure.",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/bg_3.jpg",
    alt: "Haircut transformation",
    category: "Haircuts",
  },
  {
    id: "2",
    src: "/keratin.jpg",
    alt: "Color transformation",
    category: "Coloring",
  },
  {
    id: "3",
    src: "/bg_2.jpg",
    alt: "Styling for special occasion",
    category: "Styling",
  },
  {
    id: "4",
    src: "/balayage.jpg",
    alt: "Balayage highlights",
    category: "Coloring",
  },
  {
    id: "5",
    src: "/haircult.jpg",
    alt: "Men's haircut",
    category: "Haircuts",
  },
  {
    id: "6",
    src: "/bridal.jpg",
    alt: "Bridal hairstyle",
    category: "Styling",
  },
  {
    id: "7",
    src: "/hair1.jpg",
    alt: "Curly hair styling",
    category: "Styling",
  },
  {
    id: "8",
    src: "/nikkismithhair.jpg",
    alt: "Hair treatment",
    category: "Treatments",
  },
  {
    id: "9",
    src: "/keratin.jpg",
    alt: "Blonde transformation",
    category: "Coloring",
  },
];

export const hairstyles = [
  {
    id: "style1",
    name: "Bob Cut",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "style2",
    name: "Long Layers",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "style3",
    name: "Pixie Cut",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "style4",
    name: "Beach Waves",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "style5",
    name: "Blunt Bangs",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "style6",
    name: "Shag Cut",
    image: "/placeholder.svg?height=150&width=150",
  },
];

export const hairColors = [
  { id: "color1", name: "Natural Black", color: "#0f0f0f" },
  { id: "color2", name: "Dark Brown", color: "#3b2417" },
  { id: "color3", name: "Chestnut", color: "#754c24" },
  { id: "color4", name: "Caramel Blonde", color: "#c19a6b" },
  { id: "color5", name: "Platinum Blonde", color: "#e6d7ab" },
  { id: "color6", name: "Auburn Red", color: "#a52a2a" },
  { id: "color7", name: "Vibrant Red", color: "#d93636" },
  { id: "color8", name: "Rose Gold", color: "#eea9a1" },
  { id: "color9", name: "Pastel Purple", color: "#c8a2c8" },
  { id: "color10", name: "Teal Blue", color: "#008080" },
];

export // Quiz questions
const questions = [
  {
    id: "q1",
    question: "What is your hair type?",
    options: [
      { id: "straight", label: "Straight" },
      { id: "wavy", label: "Wavy" },
      { id: "curly", label: "Curly" },
      { id: "coily", label: "Coily/Kinky" },
    ],
  },
  {
    id: "q2",
    question: "What services are you primarily interested in?",
    options: [
      { id: "haircuts", label: "Haircuts & Styling" },
      { id: "color", label: "Color Services" },
      { id: "treatments", label: "Treatments & Repairs" },
      { id: "extensions", label: "Extensions & Braiding" },
    ],
  },
  {
    id: "q3",
    question: "What's your preferred stylist experience level?",
    options: [
      { id: "junior", label: "Junior Stylist (More Affordable)" },
      { id: "senior", label: "Senior Stylist (More Experienced)" },
      { id: "master", label: "Master Stylist (Top Tier)" },
      { id: "any", label: "No Preference" },
    ],
  },
  {
    id: "q4",
    question: "What's your styling personality?",
    options: [
      { id: "classic", label: "Classic & Timeless" },
      { id: "trendy", label: "Trendy & Fashion-Forward" },
      { id: "edgy", label: "Edgy & Creative" },
      { id: "natural", label: "Natural & Low-Maintenance" },
    ],
  },
  {
    id: "q5",
    question: "How often do you typically visit a salon?",
    options: [
      { id: "frequent", label: "Every 4-6 Weeks" },
      { id: "regular", label: "Every 2-3 Months" },
      { id: "occasional", label: "A Few Times a Year" },
      { id: "rarely", label: "Only for Special Occasions" },
    ],
  },
];

// Extended stylist data with matching criteria
export const stylistMatching = [
  {
    id: "1",
    name: "Emma Johnson",
    specialties: ["Haircuts", "Styling", "Color"],
    matchCriteria: {
      hairTypes: ["straight", "wavy"],
      services: ["haircuts", "color"],
      experience: "senior",
      style: ["classic", "trendy"],
      visitFrequency: ["frequent", "regular"],
    },
  },
  {
    id: "2",
    name: "Michael Chen",
    specialties: ["Color", "Highlights", "Balayage"],
    matchCriteria: {
      hairTypes: ["straight", "wavy", "curly"],
      services: ["color", "treatments"],
      experience: "master",
      style: ["trendy", "edgy"],
      visitFrequency: ["frequent", "regular", "occasional"],
    },
  },
  {
    id: "3",
    name: "Sophia Rodriguez",
    specialties: ["Curly Hair", "Treatments", "Natural Styling"],
    matchCriteria: {
      hairTypes: ["curly", "coily"],
      services: ["haircuts", "treatments"],
      experience: "senior",
      style: ["natural", "classic"],
      visitFrequency: ["regular", "occasional"],
    },
  },
  {
    id: "4",
    name: "James Wilson",
    specialties: ["Avant-garde", "Editorial", "Precision Cuts"],
    matchCriteria: {
      hairTypes: ["straight", "wavy", "curly"],
      services: ["haircuts", "color"],
      experience: "master",
      style: ["edgy", "trendy"],
      visitFrequency: ["frequent", "occasional"],
    },
  },
];
