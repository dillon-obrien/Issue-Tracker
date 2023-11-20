import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "../../validationSchemas";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

//The Request
export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const body = await request.json();
  const validation = issueSchema.safeParse(body);
  //If bad data return 400 otherwise success!
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  //Call to prisma to create a new issue item
  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  //send back to the client
  return NextResponse.json(newIssue, { status: 201 });
}
