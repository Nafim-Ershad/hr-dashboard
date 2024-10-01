import Link from "next/link";

export default function Page(): React.ReactNode {
  return (
    <main className='relative min-w-screen min-h-screen flex flex-col items-center justify-center'>
      <div className="w-3/4 px-4 py-2 flex flex-col items-center justify-center">
        <span className="w-full my-2 flex items-center justify-center text-onyx text-5xl ">
          The <span className="mx-3 text-black text-6xl italic font-extrabold"> BEST </span> HRIS software out there
        </span>
        <span className="w-full my-2 flex items-center justify-center text-4xl text-onyx">
          Once you try it, you won&apos;t switch it
        </span>
      </div>
      <Link href="/login" className="my-2 py-4 px-8 border-solid rounded-2xl border-2 border-black bg-slate-100 text-black font-bold text-xl hover:bg-black hover:text-slate-100">
        Try It
      </Link>
    </main>
  );
}
