"use client";

export function AuthButtons({ session }: { session: any }) {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<p className="text-center text-2xl text-white">
				{session && <span>Logged in as {session.user?.name}</span>}
			</p>
			{!session ? (
				<button
					className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
					onClick={() => { /* Zde zavolejte sign-in logiku */ }}
				>
					Sign in with Github
				</button>
			) : (
				<button
					className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
					onClick={() => { /* Zde zavolejte sign-out logiku */ }}
				>
					Sign out
				</button>
			)}
		</div>
	);
}
