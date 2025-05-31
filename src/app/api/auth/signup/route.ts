import { type NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, phone, fullName } = body;

    // Validate the input
    if (!email || !password || !phone || !fullName) {
      return new Response("Email and password are required", {
        status: 400,
      });
    }
    // console.log("Received data:", body);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/api/sign-up/`,
      {
        email,
        password,
        phone,
        full_name: fullName,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { data } = await response;

    if (response.status === 200 || response.status === 201) {
      return NextResponse.json("User created successfully", { status: 200 });
    }
    if (response.status === 400) {
      return NextResponse.json("User already exists", { status: 400 });
    }
    if (response.status === 500) {
      return NextResponse.json("Internal Server Error from api", {
        status: 500,
      });
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Error in sign-up route:", error);
    return NextResponse.json("Internal Server Error from api", { status: 500 });
  }
}
