import axios from "axios";
import { type NextRequest, NextResponse } from "next/server";
import { setCookie } from "cookies-next";

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
      `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/api/token/`,
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

    const data = response.data;

    // console.log("Data:", data);

    // if (response.status === 200 || response.status === 201) {
    //   return NextResponse.json(data, { status: 200 });
    // }
    // if (response.status === 400) {
    //   return NextResponse.json("Invalid credentials", { status: 400 });
    // }
    // if (response.status === 500) {
    //   return NextResponse.json("Internal Server Error", { status: 500 });
    // }

    // return NextResponse.json(data, { status: response.status });

    const { access } = response.data;
    // console.log("Access token:", access);

    if (access) {
      const response = NextResponse.json(
        { message: "Token received" },
        { status: 201 }
      );

      setCookie("access_token", access, {
        req: request,
        res: response,
      });

      // console.log("Access token:", access);

      const tokenParts = access.split(".");
      if (tokenParts.length !== 3) {
        return NextResponse.json({ error: "Invalid token" }, { status: 400 });
      }
      // console.log("Token parts:", JSON.parse(atob(tokenParts[1])).user_id);
      const tokenPayload = JSON.parse(atob(tokenParts[1]));
      const userId = tokenPayload?.user_id;
      console.log("UserId", userId);
      if (!userId) {
        return NextResponse.json(
          { error: "User ID not found in token" },
          { status: 400 }
        );
      }

      // getting a user by user ID and storing it in a cookie
      const userResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/api/get-user/${userId}/`,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );

      const user = userResponse.data;
      console.log("User from the API Role:", user);
      setCookie("user", user, {
        req: request,
        res: response,
      });

      return response;
    } else {
      return NextResponse.json(
        { error: "Authentication failed", message: "Invalid credentials" },
        { status: 401 }
      );
    }
    // console.log("Access token:", access);
    return NextResponse.json(response.data, {
      status: 201,
    });
  } catch (error) {
    console.error("Error in sign-in route:", error);
    return NextResponse.json("Internal Server Error", { status: 500 });

    // if (axios.isAxiosError(error)) {
    //   const axiosError = error as AxiosError;
    //   return NextResponse.json(
    //     {
    //       error: "Authentication failed",
    //       message:
    //         (axiosError.response?.data as { message?: string })?.message ||
    //         "Invalid credentials",
    //     },
    //     { status: axiosError.response?.status || 401 }
    //   );
    // }

    // return NextResponse.json(
    //   { error: "Internal server error" },
    //   { status: 500 }
    // );
  }
}
