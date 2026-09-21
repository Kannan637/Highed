import React from "react";
import {
  Building2,
  Sparkles,
  Users,
  Trophy,
  MessageSquareQuote,
  Phone,
  Compass,
  GraduationCap,
  BadgePercent,
  FileText,
  FileCheck,
  Banknote,
  PlaneTakeoff,
  BookOpen,
  Globe2,
  ClipboardCheck,
  HelpCircle,
  Calculator,
  CircleDollarSign,
  Percent,
  TrendingUp,
  Languages,
  Award,
  CheckCircle2,
  Calendar,
  Video,
  CalendarDays,
  Briefcase,
  Newspaper,
  Home,
  MapPin,
  type LucideIcon,
} from "lucide-react";

interface MenuIconProps {
  type?: string;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  building: Building2,
  star: Sparkles,
  users: Users,
  success: Trophy,
  reviews: MessageSquareQuote,
  contact: Phone,
  career: Compass,
  university: GraduationCap,
  scholarship: BadgePercent,
  document: FileText,
  visa: FileCheck,
  loan: Banknote,
  support: PlaneTakeoff,
  guide: BookOpen,
  country: Globe2,
  exam: ClipboardCheck,
  faq: HelpCircle,
  calculator: Calculator,
  cost: CircleDollarSign,
  percentage: Percent,
  gpa: TrendingUp,
  ielts: Languages,
  pte: Award,
  check: CheckCircle2,
  fair: Sparkles,
  event: Calendar,
  webinar: Video,
  calendar: CalendarDays,
  blog: Newspaper,
  home: Home,
  accommodation: Home,
  location: MapPin,
};

export const MenuIcon: React.FC<MenuIconProps> = ({ type, className }) => {
  const IconComponent = (type && iconMap[type.toLowerCase()]) || Briefcase;

  return (
    <span
      className={
        className ||
        "flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] bg-icon-bg-primary text-brand-primary transition-all duration-200 ease-out group-hover/item:bg-brand-primary group-hover/item:text-white"
      }
    >
      <IconComponent size={16} strokeWidth={2} />
    </span>
  );
};

export default MenuIcon;
