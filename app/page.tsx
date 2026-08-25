"use client"

import LandingPage from "@/components/landing-page";
import { useRouter } from "next/navigation";

export default function Home() {  
  const router = useRouter()

  const handleDashboard = () => {
    router.push('/dashboard')
  }
  return (
    <div>
      <LandingPage onEnterDashboard={handleDashboard} />
    </div>
  );
}
