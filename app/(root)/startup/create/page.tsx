import StartupForm from "@/components/StartupForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <section className="blue_container !min-h-[230px]">
        <h1 className="heading">Create your own blog post</h1>
      </section>

      <StartupForm />
    </>
  );
};

export default Page;