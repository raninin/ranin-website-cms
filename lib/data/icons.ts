import {
  Users,
  Package,
  Wrench,
  Hammer,
  PaintBucket,
  Printer,
  ShieldCheck,
  Handshake,
  Award,
  Target,
  Droplets,
  FlaskConical,
  Zap,
  Building2,
  Landmark,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Package,
  Wrench,
  Hammer,
  PaintBucket,
  Printer,
  ShieldCheck,
  Handshake,
  Award,
  Target,
  Droplets,
  FlaskConical,
  Zap,
  Building2,
  Landmark,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Package;
}

export { iconMap };
