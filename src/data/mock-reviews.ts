import { Review } from "@/types/types";

export const mockReviews: Review[] = [
  {
    id: "1",
    customerName: "Sarah Johnson",
    customerAvatar: "/placeholder.svg?height=40&width=40",
    customerEmail: "sarah@example.com",
    serviceName: "Hair Cut & Style",
    rating: 5,
    comment:
      "Amazing service! Emma did an incredible job with my haircut. I love the new style and will definitely be back!",
    date: new Date(2024, 0, 15),
    status: "approved",
    adminResponse:
      "Thank you so much for your kind words, Sarah! We're thrilled you love your new style. Emma will be delighted to hear this!",
    adminResponseDate: new Date(2024, 0, 15),
  },
  {
    id: "2",
    customerName: "Michael Brown",
    customerAvatar: "/placeholder.svg?height=40&width=40",
    customerEmail: "michael@example.com",
    serviceName: "Beard Trim",
    rating: 4,
    comment:
      "Great beard trim, very professional service. The only thing is I had to wait a bit longer than expected.",
    date: new Date(2024, 0, 14),
    status: "pending",
  },
  {
    id: "3",
    customerName: "Lisa Davis",
    customerAvatar: "/placeholder.svg?height=40&width=40",
    customerEmail: "lisa@example.com",
    serviceName: "Hair Color",
    rating: 5,
    comment:
      "Sophie is absolutely amazing! The color came out exactly as I wanted. Highly recommend!",
    date: new Date(2024, 0, 13),
    status: "approved",
  },
  {
    id: "4",
    customerName: "John Smith",
    customerAvatar: "/placeholder.svg?height=40&width=40",
    customerEmail: "john@example.com",
    serviceName: "Hair Cut",
    rating: 2,
    comment:
      "Not satisfied with the service. The haircut was not what I asked for and the staff seemed rushed.",
    date: new Date(2024, 0, 12),
    status: "pending",
  },
];
