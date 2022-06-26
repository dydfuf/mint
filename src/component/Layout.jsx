export default function Layout({ children }) {
  return (
    <div className="w-[1440px] h-[1000px] flex flex-col mx-auto bg-black">
      {children}
    </div>
  );
}
