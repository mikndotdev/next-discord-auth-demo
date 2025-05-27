import Link from "next/link";
import { signIn, signOut, getSession } from "@mikandev/next-discord-auth/server-actions";

import "@/auth";

export default async function Home() {
	const session = await getSession();
	if (!session) {
		return (
			<main className="flex flex-col justify-center items-center min-h-screen">
				<h1 className={"font-bold text-2xl mb-2"}>You are not signed in.</h1>
				<form
					action={async () => {
						"use server";
						await signIn();
					}}
				>
					<button type="submit" className={"btn btn-primary"}>
						Sign in
					</button>
				</form>
			</main>
		);
	}

	return (
		<main className="flex flex-col justify-center items-center min-h-screen gap-2">
			<img src={session.user.avatar} alt="Avatar" width={100} height={100} className="rounded-full" />
			<span>Welcome, {session.user.name}!</span>
			<span> (ID: {session.user.id})</span>
			<form
				action={async () => {
					"use server";
					await signOut();
				}}
			>
				<button type="submit" className={"btn btn-error"}>
					Sign out
				</button>
			</form>
			<Link href="/session" className="btn btn-secondary">
				View Session Data
			</Link>
		</main>
	);
}
