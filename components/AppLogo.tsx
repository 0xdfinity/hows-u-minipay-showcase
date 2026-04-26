import Image from "next/image";

export function AppLogo() {
  return (
    <span className="inline-flex rounded-[1.4rem] border border-white/8 bg-white p-2 shadow-[0_1px_2px_rgba(15,23,42,0.05)]">
      <Image
        src="/brand/hows-u-logo.png"
        alt="How's U"
        width={352}
        height={112}
        priority
        className="h-auto w-[140px]"
      />
    </span>
  );
}
