import axios from "axios";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate the input
    if (!email || !password) {
      return new Response("Email and password are required", {
        status: 400,
      });
    }

    // console.log("Received data:", body);

    const response = await axios.post(
      "https://api.example.com/signin",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response;

    if (response.status === 200 || response.status === 201) {
      return NextResponse.json(data, { status: 200 });
    }
    if (response.status === 400) {
      return NextResponse.json("Invalid credentials", { status: 400 });
    }
    if (response.status === 500) {
      return NextResponse.json("Internal Server Error", { status: 500 });
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Error in sign-in route:", error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
