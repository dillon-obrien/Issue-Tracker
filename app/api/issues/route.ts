import prisma from "@/prisma/client";
import { NextRequest,NextResponse } from "next/server";
import { createIssueSchema } from "../../validationSchemas";

//The Request
export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    //If bad data return 400 otherwise success!
    if (!validation.success)
        return NextResponse.json(validation.error.format(), {status: 400})

    //Call to prisma to create a new issue item
    const newIssue = await prisma.issue.create({
        data: { title: body.title, description: body.description}
    })

    //send back to the client
    return NextResponse.json(newIssue,{status: 201})
}