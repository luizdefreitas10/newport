import { google } from "googleapis";
import "react-toastify/dist/ReactToastify.css";

type SheetForm = {
  userName: string;
  userEmail: string;
  userMessage: string;
};

export async function POST(req: Request, res: Response) {
  if (req.method !== "POST") {
    return new Response("Only POST requests allowed");
  }

  const body = (await req.json()) as SheetForm;

  const formattedDate = new Date().toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:C1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [body.userName, body.userEmail, body.userMessage, formattedDate],
        ],
      },
    });

    return new Response(JSON.stringify({ data: appendResponse.data }));
  } catch (e: any) {
    console.log(e);
    return new Response(JSON.stringify({ error: "Something went wrong." }), {
      status: 500,
    });
  }
}
