import { getSession } from "@mikandev/next-discord-auth/server-actions";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

import "@/auth";

export const GET = async (request: NextRequest) => {
	const session = await getSession();

	if (!session) {
		return NextResponse.json({ message: "Session not found" });
	}

	return NextResponse.json(session);
};
