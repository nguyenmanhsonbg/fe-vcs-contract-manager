import { Bell, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function TopBar({ breadcrumb }: { breadcrumb: string[] }) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-white px-6">
      <div className="flex items-center gap-1.5 text-sm">
        {breadcrumb.map((crumb, i) => (
          <span key={crumb} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-slate-300">\</span>}
            <span className={i === breadcrumb.length - 1 ? "font-medium text-slate-900" : "text-muted-foreground"}>
              {crumb}
            </span>
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <Input placeholder="Tìm kiếm" className="bg-input-background pl-9" />
        </div>
        <button className="relative rounded-full p-2 hover:bg-slate-100">
          <Bell className="size-5 text-slate-500" />
          <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-brand" />
        </button>
        <Avatar className="size-9">
          <AvatarFallback className="bg-brand-soft text-brand">A</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
