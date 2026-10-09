"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Overview", href: "/dashboard" },
  { name: "My Courses", href: "/dashboard/courses" },
  { name: "Quizzes", href: "/dashboard/quizzes" },
  { name: "Progress", href: "/dashboard/progress" },
  { name: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-4 flex flex-col justify-between">
      <div>
        <div className="text-2xl font-bold mb-8 text-blue-400">StudyAI</div>
        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="border-t border-slate-800 pt-4 text-xs text-slate-500">
        StudyAI Platform v1.0
      </div>
    </aside>
  );
}