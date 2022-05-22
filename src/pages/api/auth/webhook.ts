/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";

async function buffer(readable: Readable) {
  const chunk = [];

  for await (const chunk of readable) {
    chunk.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunk);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "POST") {
    const buf = await buffer(request);

    response.status(200).json({ ok: true });
  } else {
    response.setHeader("Allow", "POST");
    response.status(405).end("Method Not Allowed");
  }
};
