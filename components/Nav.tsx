import Link from "next/link";

const Nav = () => {
  let navigation = [
    {
      id: 1,
      title: "Home",
      to: "/",
    },
    {
      id: 2,
      title: "Movies",
      to: "/movies",
    },
    {
      id: 3,
      title: "Ticket Rates",
      to: "/rates",
    },
    {
      id: 4,
      title: "About",
      to: "/about",
    },
    {
      id: 5,
      title: "Contact",
      to: "/contact",
    },
  ];

  return (
    <nav>
      <div className="container mx-auto py-[25px] drop-shadow-2xl flex items-center justify-between">
        <h2 className="text-[32px] font-bold">
          Flick<span className="text-gold">Box</span>
        </h2>
        <ul className="flex items-center gap-[30px]">
          {navigation.map((el) => (
            <li className="text-[18px] tracking-wider" key={el.id}>
              <Link href={el.to}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
