import Nav from "@/app/components/Nav";

export default function ProfileInfoPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-semibold mb-6 tracking-tight">Profile Info</h1>
        <p className="opacity-80">Manage your account details here. (Placeholder page)</p>
      </main>
    </div>
  );
}


